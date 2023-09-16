import "./App.css"
import { Routes,Route } from "react-router-dom"
  import Navbar from "./components/navBar"
  import Home from "./Pages/Home"
import Register from "./Pages/Register"
import Login from "./Pages/Login"
import axios from "axios"
import {Toaster} from 'react-hot-toast'
axios.defaults.baseURL = 'http://localhost:8000'
axios.defaults.withCredentials = true
const App = () => {
  return (
    <>
      <Navbar position='bottom-right' toastOptions={{duration:2000}} />
      <Toaster/>
      <Routes>
        <Route path="/" element={<Home/> } />
        <Route path="/register" element={<Register/> } />
        <Route path="/login" element={<Login/>}  />
    
      </Routes>
   </>
  )
}

export default App