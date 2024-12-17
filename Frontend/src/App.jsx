import './App.css';
import Login from "./Pages/Login/Login.jsx";
import Signup from './Pages/SignUp/Signup.jsx';
import Home from './Pages/Home/Home.jsx';
import {Route,Routes} from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import {useAuthContext} from './context/authContext.jsx'
import { Navigate } from 'react-router-dom';




function App() {
  
	const { authUser } = useAuthContext();
  return (

    <div className='p-4 h-screen flex items-center justify-center'>
      <Routes>
      <Route path='/' element={authUser ? <Home /> : <Navigate to={"/Login"} />} />
				<Route path='/Login' element={authUser ? <Navigate to='/' /> : <Login />} />
				<Route path='/Signup' element={authUser ? <Navigate to='/' /> : <Signup />} />

      </Routes>
      <Toaster/>
      
			
		</div>
  )
}

export default App
