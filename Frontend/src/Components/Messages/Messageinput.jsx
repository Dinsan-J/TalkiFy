import React from 'react'
import { IoSend } from "react-icons/io5";
import useSendMessage from '../../Pages/hooks/useSendMessage';
import { useState } from 'react';

const Messageinput = () => {

  const [message, setMessage] = useState("");
	const { loading, sendMessage } = useSendMessage();


  const handleSubmit = async (e) => {
		e.preventDefault();
		if (!message) return;
		await sendMessage(message);
		setMessage("");
	};

  return (
    <form onSubmit={handleSubmit}>
    <div>
        
        
        <input type="text" placeholder="Type your message..." className="input input-bordered input-success w-full max-w-xl  "  value={message}
					onChange={(e) => setMessage(e.target.value)}/>
        
        <button type='submit' className="w-5 h-5 absolute bottom-2 right-3 mb-1 text-white cursor-pointer" >
					{loading ? <div className='loading loading-spinner'></div> : <IoSend />}
				</button>
       
    </div>
  </form>
  )
}

export default Messageinput