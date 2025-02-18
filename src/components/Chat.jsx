import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getChatAsync, addChatAsync } from "../features/driver/driverActions";
import Avatar from "../components/Avatar";
import "../assets/Chat.css"; // Ensure this file contains the necessary styles

export default function Chat({ currentUser, sender }) {
  const dispatch = useDispatch();
  const [input, setInput] = useState("");
  const [isOpen, setIsOpen] = useState(false); // Controls expansion
  const { chats } = useSelector((state) => state.drivers);
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      dispatch(getChatAsync(id));
    }
  }, [dispatch, id]);

  const sendMessage = (e) => {
    e.preventDefault();
    fetch(`${url}/chat`, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        message: input,
        deliverId: id,
        email: currentUser?.email,
      }),
    });

    setInput("");
    dispatch(getChatAsync(id));
  };

  return (
    <div className="chat-container">
      {/* Chat Button (Closed State) */}
      {!isOpen && (
        <button className="chat-button" onClick={() => setIsOpen(true)}>
          💬 Chat
        </button>
      )}

      {/* Chat Box (Expanded State) */}
      {isOpen && (
        <div className="chat-box">
          {/* Header with Close Button */}
          <div className="chat-header">
            <div className="chat-header-left">
              <Avatar src={currentUser?.avatar_url} />
              <span className="chat-header-name">{sender}</span>
            </div>
            <button className="chat-close" onClick={() => setIsOpen(false)}>
              ✖
            </button>
          </div>

          {/* Chat Body */}
          <div className="chat-body">
            {chats?.map((post) => (
              <p
                className={`chat-message ${
                  post.email === currentUser?.email ? "chat-receiver" : ""
                }`}
                key={post.timestamp}
              >
                <span className="chat-name">{post.email}</span>
                {post.message}
                <span className="chat-time">{post.timestamp}</span>
              </p>
            ))}
          </div>

          {/* Chat Input */}
          <div className="chat-footer">
            <form>
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type a message..."
                type="text"
              />
              <button onClick={sendMessage} type="submit">
                Send
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
