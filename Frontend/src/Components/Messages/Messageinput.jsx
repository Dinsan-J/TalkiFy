import React from 'react'
import { IoSend } from "react-icons/io5";

const Messageinput = () => {
  return (
    <div>
        <IoSend className="w-5 h-5 absolute bottom-2 right-3 mb-1 text-white cursor-pointer" />
        <input type="text" placeholder="Type your message..." className="input input-bordered input-success w-full max-w-xl " />
        
       
       
    </div>
  )
}

export default Messageinput