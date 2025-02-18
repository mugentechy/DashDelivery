import datetime
from hashlib import sha256

class Block:
    def __init__(self, transactions, previous_hash):
        self.time_stamp = datetime.datetime.now()
        self.transactions = transactions
        self.previous_hash = previous_hash
        self.nonce = 0  # Nonce is used in Proof of Work
        self.hash = self.generate_hash()  # Initial hash (will be updated during mining)

    def generate_hash(self):
        # Hash the block's contents
        block_contents = str(self.time_stamp) + str(self.transactions) + str(self.previous_hash) + str(self.nonce)
        block_hash = sha256(block_contents.encode()).hexdigest()
        return block_hash

    def mine_block(self, difficulty):
        # Mine the block by finding a hash that meets the difficulty requirement
        target = "0" * difficulty  # The hash must start with this many zeros
        while self.hash[:difficulty] != target:
            self.nonce += 1  # Increment the nonce
            self.hash = self.generate_hash()  # Recompute the hash
        print(f"Block mined: {self.hash}")

    def print_block(self):
        # Print block contents
        print("timestamp:", self.time_stamp)
        print("transactions:", self.transactions)
        print("current hash:", self.hash)
        print("previous hash:", self.previous_hash)
        print("nonce:", self.nonce)
        print("\n")