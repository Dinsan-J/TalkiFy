import React from 'react'
import Messages from './Messages'
import Messageinput from './Messageinput'
import { IoChatbubblesOutline } from "react-icons/io5";

const Messagecontainer = () => {
    const noChatSelected=false;
  return (
    <div className='md:min-w-[550px] flex flex-col'>
       {noChatSelected ? <NoChatSelected/> :(
         <>
        
         <div className='bg-slate-500 px-2 py-2 mb-2 rounded-md'>
                      <span className='label-text'>To:</span> <span className='text-gray-900 font-bold'>Boomer</span>
             </div>
         
         <Messages/>
         <Messageinput/>
         
         </>
         
       )}
    </div>
  )
}

export default Messagecontainer



const NoChatSelected = () => {
	
	return (
		<div className='flex items-center justify-center w-full h-full'>
			<div className='px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2'>
				<p>Welcome 👋  ❄</p>
				<p>Select a chat to start messaging</p>
				<IoChatbubblesOutline className='text-3xl md:text-6xl text-center' />
			</div>
		</div>
	);
};