import React from "react";
import { useAuthContext } from "../../context/AuthContext";
// import { useSocketContext } from "../../context/SocketContext";
import useConversation from "../../zustand/useConversation";

const Message = ({ message }) => {
  const { authUser } = useAuthContext();
  const { selectedConversation } = useConversation();
  const fromMe = message.senderId === authUser._id;
  const chatClassName = fromMe ? "chat-end" : "chat-start";
  const profilePic = fromMe ? authUser.profilePic : selectedConversation?.profilePic;
  const bubbleBgColor = fromMe ? "bg-blue-500" : "bg-gray-200";
  const shakeClass = message.shouldShake ? "shake" : "";

  return (
    <div>
      <div className={`chat ${chatClassName}`}>
        {/* Avatar */}
        <div className="chat-image avatar">
          <div className="w-10 rounded-full">
            <img alt="User Avatar" src={profilePic} />
          </div>
        </div>

        {/* Header */}
        <div className="chat-header">
          {fromMe ? authUser.name : selectedConversation?.name}
        </div>

        {/* Message Bubble */}
        <div className={`chat-bubble ${bubbleBgColor} ${shakeClass} ${fromMe ? "text-white" : "text-black"} p-3`}>
          {message.message}
        </div>

        {/* Footer */}
        <div className="chat-footer opacity-50 text-xs mt-1">
          {new Date(message.createdAt).toLocaleTimeString()}
        </div>
      </div>
    </div>
  );
};

export default Message;
