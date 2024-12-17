import React, { useRef, useEffect } from 'react';
import Message from './Message';
import useGetMessages from '../../Pages/hooks/useGetMesssges';
import MessageSkeleton from '../skeletons/MessageSkeleton';

const Messages = () => {
  const { messages, loading } = useGetMessages();
  const lastMessageRef = useRef(null);

  // Automatically scroll to the last message when messages or loading state changes
  useEffect(() => {
    if (lastMessageRef.current && !loading) {
      lastMessageRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, loading]); // Trigger when messages or loading state changes

  return (
    <div className='px-4 flex-1 overflow-auto'>
      {!loading &&
        messages.length > 0 &&
        messages.map((message, idx) => (
          <div key={message._id} ref={idx === messages.length - 1 ? lastMessageRef : null}>
            <Message message={message} />
          </div>
        ))}

      {loading && [...Array(3)].map((_, idx) => <MessageSkeleton key={idx} />)}

      {!loading && messages.length === 0 && (
        <p className='text-center'>Send a message to start the conversation</p>
      )}
    </div>
  );
};

export default Messages;
