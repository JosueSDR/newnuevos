import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { LuSendHorizonal } from "react-icons/lu";
import Nuevo from './components/Nuevo';
import RegistrationForm from './components/RegistrationForm';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
   {/*   */}

   <Nuevo></Nuevo>
    </>
  )
}

export default App
