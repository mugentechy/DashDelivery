from api import db
from datetime import datetime, timedelta
from time import time
from werkzeug.security import generate_password_hash, check_password_hash
from hashlib import md5
from sqlalchemy.dialects.postgresql import ARRAY


class Updateable:
    def update(self, data):
        for attr, value in data.items():
            setattr(self, attr, value)


class User(db.Model, Updateable):
    __tablename__ = 'users'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String)
    email = db.Column(db.String, unique=True)
    mobile = db.Column(db.String)
    user_role = db.Column(db.String)
    password_hash = db.Column(db.String)
    created_at = db.Column(db.DateTime, default=datetime.now)
    updated_at = db.Column(db.DateTime, onupdate=datetime.now)
    status = db.Column(db.String(20), default='Available')

    @property
    def avatar_url(self):
        digest = md5(self.email.lower().encode('utf-8')).hexdigest()
        return f'https://www.gravatar.com/avatar/{digest}?d=identicon'

    @property
    def password(self):
        raise AttributeError('password is not a readable attribute')

    @password.setter
    def password(self, password):
        self.password_hash = generate_password_hash(password)

    def verify_password(self, password):
        return check_password_hash(self.password_hash, password)

    def __repr__(self):
        return '<User {}>'.format(self.name)

    @property
    def url(self):
        return url_for('users.get', id=self.id)

    def serialize(self):
        return {
            'id': self.id,
            'name': self.name,
            'status': self.status,
            'user_role': self.user_role,
            'mobile': self.mobile,
            'email': self.email,
            'created_at': self.created_at,
            'updated_at': self.updated_at,
            'avatar_url': self.avatar_url
        }





class Delivery(db.Model, Updateable):
    __tablename__ = 'deliveries'

    id = db.Column(db.Integer, primary_key=True)
    task = db.Column(db.String)
    description = db.Column(db.String)
    pickup_time = db.Column(db.String)
    drop_time = db.Column(db.String)
    status = db.Column(db.String(20), default='In Progress')
    driver_coordinates = db.Column(ARRAY(db.Float))
    stage = db.Column(db.Integer)
    driver_id = db.Column(db.Integer, db.ForeignKey('users.id'))
    shipments_id = db.Column(db.Integer, db.ForeignKey('shipments.id'))

    shipments = db.relationship('Shipment', back_populates='deliveries')
    chats = db.relationship('Chat', back_populates='deliveries')
    user = db.relationship('User', backref='deliveries')

    def __repr__(self):
        return '<Delivery {}>'.format(self.id)

    @property
    def url(self):
        return url_for('deliveries.get', id=self.id)

    def serialize(self):
        return {
        'id': self.id,
        'task': self.task,
        'description': self.description,
        'driver_coordinates': self.driver_coordinates,
        'pickup_time': self.pickup_time,
        'drop_time': self.drop_time,
        'status': self.status,
        'shipments': self.shipments.id if self.shipments else None,
        'driver': self.user.id if self.user else None
        }




class Chat(db.Model, Updateable):
    __tablename__ = 'chats'

    id = db.Column(db.Integer, primary_key=True)
    message = db.Column(db.String)
    email = db.Column(db.String(20))
    timestamp = db.Column(db.DateTime, default=datetime.utcnow)
    deliverId = db.Column(db.Integer, db.ForeignKey('deliveries.id'))

    deliveries = db.relationship('Delivery', back_populates='chats')

    def __repr__(self):
        return '<Chat {}>'.format(self.id)

    @property
    def url(self):
        return url_for('chats.get', id=self.id)

    def serialize(self):
        return {
            'id': self.id,
            'email': self.email,
            'message': self.message,
            'timestamp': self.timestamp,
            'deliveries': self.deliveries.serialize() if self.deliveries else None
        }



class StatusHistory(db.Model):
    __tablename__ = 'status_history'

    id = db.Column(db.Integer, primary_key=True)
    shipment_id = db.Column(db.Integer, db.ForeignKey('shipments.id'), nullable=False)
    name = db.Column(db.String(20), nullable=False)
    updated_at = db.Column(db.DateTime, default=datetime.now)

    # Relationship
    shipment = db.relationship('Shipment', back_populates='status_history')

    def __repr__(self):
        return f'<StatusHistory {self.name}>'

    def serialize(self):
        return {
            'id': self.id,
            'shipment_id': self.shipment_id,
            'name': self.name,
            'updated_at': self.updated_at.isoformat()
        }


class Shipment(db.Model, Updateable):
    __tablename__ = 'shipments'

    id = db.Column(db.Integer, primary_key=True)
    created_at = db.Column(db.DateTime, default=datetime.now)
    details = db.Column(db.String)
    reciever_name = db.Column(db.String)
    reciever_contact = db.Column(db.String)
    reciever_email = db.Column(db.String)
    parcel = db.Column(db.String)
    quantity = db.Column(db.String)
    weight = db.Column(db.String)
    status = db.Column(db.String(20), nullable=False, default='NEW') 
    
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    location_id = db.Column(db.Integer, db.ForeignKey('locations.id'), nullable=False)
    delivery_id = db.Column(db.Integer)

    # Relationships
    deliveries = db.relationship('Delivery', back_populates='shipments')
    status_history = db.relationship('StatusHistory', back_populates='shipment', lazy='dynamic')
    location = db.relationship('Location', backref='shipments')
    user = db.relationship('User', backref='shipments')


    def __repr__(self):
        return f'<Shipment {self.parcel}>'

    @property
    def url(self):
        return url_for('shipments.get', id=self.id)

    def update_status(self, new_status):
        self.status = new_status
        status_entry = StatusHistory(shipment_id=self.id, name=new_status)
        db.session.add(status_entry)

    def serialize(self):
        return {
            'id': self.id,
            'reciever_name': self.reciever_name,
            'reciever_contact': self.reciever_contact,
            'reciever_email':self.reciever_email,
            'status': self.status,
            'parcel': self.parcel,
            'created_at': self.created_at,
            'deliveries': [delivery.serialize() for delivery in self.deliveries] if self.deliveries else None,
            'sender_coordinates': self.location.sender_coordinates if self.location.sender_coordinates else None,
            'reciever_coordinates': self.location.reciever_coordinates if self.location.reciever_coordinates else None,
            'sender_location': self.location.sender_location if self.location.sender_location else None,
            'reciever_location': self.location.reciever_location if self.location.reciever_location else None,
            'user': self.user.serialize() if self.user else None
        }



class Location(db.Model):
    __tablename__ = 'locations'

    id = db.Column(db.Integer, primary_key=True)
    pickup_time = db.Column(db.String)
    sender_location = db.Column(db.String, nullable=False)
    sender_coordinates = db.Column(ARRAY(db.Float), nullable=False)
    pickup_address = db.Column(db.String)
    reciever_location = db.Column(db.String, nullable=False)
    reciever_coordinates = db.Column(ARRAY(db.Float), nullable=False)
    drop_address = db.Column(db.String)
    created_at = db.Column(db.DateTime, default=datetime.now)
    updated_at = db.Column(db.DateTime, default=datetime.now, onupdate=datetime.now)


    def __repr__(self):
        return f'<Location {self.sender_location}>'

    def serialize(self):
        return {
            'id': self.id,
            'pickup_time': self.pickup_time,
            'sender_location': self.sender_location,
            'sender_coordinates': self.sender_coordinates,
            'pickup_address': self.pickup_address,
            'reciever_location': self.reciever_location,
            'reciever_coordinates': self.reciever_coordinates,
            'drop_address': self.drop_address,
            'created_at': self.created_at,
            'updated_at': self.updated_at
        }





class Blockchain(db.Model):
    __tablename__ = 'blockchain'

    id = db.Column(db.Integer, primary_key=True)
    block_hash = db.Column(db.String, nullable=False)
    previous_hash = db.Column(db.String, nullable=False)
    transactions = db.Column(db.JSON, nullable=False)
    timestamp = db.Column(db.DateTime, default=datetime.now)
    nonce = db.Column(db.Integer, default=0)

    def __repr__(self):
        return '<Blockchain {}>'.format(self.block_hash)

    def serialize(self):
        return {
            'id': self.id,
            'block_hash': self.block_hash,
            'previous_hash': self.previous_hash,
            'transactions': self.transactions,
            'timestamp': self.timestamp.isoformat(),
            'nonce': self.nonce
        }