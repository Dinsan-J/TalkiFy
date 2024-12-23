import React from 'react'
import Sidebar from '../../Components/sidebar/sidebar'
import Messagecontainer from '../../Components/Messages/Messagecontainer'

const Home = () => {
  return (
    
      <div className='flex sm:h-[350px] md:h-[550px] rounded-lg overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
			<Sidebar/>
			<Messagecontainer />
      
		</div>
   
  )
}

export default Home