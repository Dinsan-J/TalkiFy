import { createContext, useState, useEffect, useContext } from "react";
import { useAuthContext } from "./AuthContext";
import io from "socket.io-client";

const SocketContext = createContext();

export const useSocketContext = () => {
  return useContext(SocketContext);
};

export const SocketContextProvider = ({ children }) => {
  const [socket, setSocket] = useState(null);
  const [onlineUsers, setOnlineUsers] = useState([]);
  const [messages, setMessages] = useState({}); // Store messages per conversation
  const { authUser } = useAuthContext();

  useEffect(() => {
    if (authUser) {
      const socketConnection = io("http://localhost:5000", {
        query: { userId: authUser._id },
      });

      setSocket(socketConnection);

      // Listen for online users
      socketConnection.on("getOnlineUsers", (users) => {
        setOnlineUsers(users);
      });

      // Listen for incoming messages
      socketConnection.on("newMessage", (newMessage) => {
        setMessages((prevMessages) => ({
          ...prevMessages,
          [newMessage.receiverId]: [...(prevMessages[newMessage.receiverId] || []), newMessage],
        }));
      });

      // Handle connection errors (optional for debugging)
      socketConnection.on("connect_error", (err) => {
        console.error("Socket connection error:", err);
      });

      return () => {
        socketConnection.close();
        setSocket(null);
      };
    } else {
      if (socket) {
        socket.close();
        setSocket(null);
      }
    }
  }, [authUser]);

  // Function to send a message
  const sendMessage = (receiverId, message) => {
    if (socket) {
      const newMessage = {
        senderId: authUser._id,
        receiverId,
        message,
        createdAt: new Date().toISOString(),
      };

      // Emit the message to the server
      socket.emit("sendMessage", newMessage);

      // Update local message state for immediate feedback
      setMessages((prevMessages) => ({
        ...prevMessages,
        [receiverId]: [...(prevMessages[receiverId] || []), newMessage],
      }));
    }
  };

  // Function to load previous messages from the server
  const loadMessages = async (conversationId) => {
    if (conversationId) {
      try {
        const response = await fetch(`/api/messages/${conversationId}`);
        const data = await response.json();
        setMessages((prevMessages) => ({
          ...prevMessages,
          [conversationId]: data, // Set the fetched messages for the conversation
        }));
      } catch (error) {
        console.error("Failed to fetch messages:", error);
      }
    }
  };

  return (
    <SocketContext.Provider
      value={{
        socket,
        onlineUsers,
        messages,
        sendMessage,
        loadMessages, // Expose the function to load messages
      }}
    >
      {children}
    </SocketContext.Provider>
  );
};
