import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()
    const handleSubmit = async (e) => {
        e.preventDefault()
        if (!email || !password) {
            alert("All feilds are neccessary")
        }
        try {
            const config = {
                headers: {
                    "Content-type": "application/json"
                }
            }
            const { data } = await axios.post("https://veera-khaki.vercel.app/api/user/login", { email, password }, config)

            localStorage.setItem("userinfo", JSON.stringify(data))
            if (data) {
                console.log("user login successfully")
                navigate("/")
            }
        }
        catch (err) {
            console.log(err.message)
            alert("Invalid User Credentials")
        }
    }
    return (
        <div>
            <form onSubmit={handleSubmit} className='lform'>
                <div>
                    <label >Email:</label>
                    <input className='formcontrol' value={email} type="text" onChange={e => setEmail(e.target.value)} />
                </div>
                <div>
                    <label>Password:</label>
                    <input className='formcontrol' value={password} onFocus={e => e.target.type = "text"} onChange={e => setPassword(e.target.value)} onBlur={e => e.target.type = "password"} />
                </div>
                <div>
                    <button className='smtbtn'>Login</button>
                </div>
            </form>
        </div>
    )
}

export default Login
