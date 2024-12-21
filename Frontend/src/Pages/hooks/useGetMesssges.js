import { useEffect, useState } from "react";
import useConversation from "../../zustand/useConversation";
import toast from "react-hot-toast";

const useGetMessages = () => {
  const [loading, setLoading] = useState(false);
  const { messages, setMessages, selectedConversation } = useConversation();

  useEffect(() => {
    const getMessages = async () => {
      if (!selectedConversation?._id) return;

      setLoading(true);
      try {
        console.log("Fetching messages for conversation:", selectedConversation._id);
        const res = await fetch(`/api/messages/${selectedConversation._id}`);
        const data = await res.json();

        console.log("Fetched messages:", data);
        if (data.error) throw new Error(data.error);
        setMessages(data); // Updates messages in the Zustand store
      } catch (error) {
        toast.error(error.message);
      } finally {
        setLoading(false);
      }
    };

    getMessages();
  }, [selectedConversation?._id, setMessages]);

  return { messages, loading };
};

export default useGetMessages;
