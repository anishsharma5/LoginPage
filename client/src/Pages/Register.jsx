import axios from "axios"
import { useState } from "react"
import toast from "react-hot-toast"
import {useNavigate} from "react-router-dom"
const Register = () => {
  const navigate =useNavigate()
  const [data, setData] = useState({
    name: '',
    email: '',
    password :''
  })
  const registerUser = async (e) =>{
    e.preventDefault()
    const { name, email, password } = data
    try {
      const { data } = await axios.post('/register', { name, email, password })
      if (data.error) {
        toast.error(data.error)
      }
      else {
        setData([])
        toast.success('Login Successfullly')
        navigate('/login')
      }
    } catch (error) {
      console.log(error);
      toast.error('Login UnSuccessfullly')
    }
  }
  return (
    <div>
      <form onSubmit={registerUser}>
        <label>Name</label>
        <input type="text" placeholder="Enter Name" value={data.name} onChange={(e)=>setData({...data,name:e.target.value})}/>
        <label>Email</label>
        <input type="email" placeholder="Enter Email" value={data.email} onChange={(e)=>setData({...data,email:e.target.value})}/>
        <label>Password</label>
        <input type="password" placeholder="Enter Password"  value={data.password} onChange={(e)=>setData({...data,password:e.target.value})}/>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default Register
