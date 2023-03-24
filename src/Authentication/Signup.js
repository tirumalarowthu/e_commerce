import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
const Signup = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPasword, setConfirmPassword] = useState("")
  const [pic, setPic] = useState("https://www.shareicon.net/data/2016/05/24/770139_man_512x512.png")
  const [sbtn, setSbtn] = useState(true)
  const [msg, setMsg] = useState("")
  const navigate = useNavigate()
  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log(name, email, password, confirmPasword, pic)
    if (!name || !email || !password || !confirmPasword) {
      alert("all feilds are neccessary")
    }
    if (password !== confirmPasword) {
      alert("password not matched")
    }
    //now uploaded to the database
    try {
      const config = {
        headers: {
          "Content-type": "application/json"
        }
      }
      const { data } = await axios.post("https://veera-khaki.vercel.app/api/user", { name, email, password, pic }, config)

      localStorage.setItem("userinfo", JSON.stringify(data))
      if (data) {
        console.log("user Register successfully")
        navigate("/login")
      }
    }
    catch (err) {
      console.log(err.message)
    }
  }
  //to change the pic uploaded into url image
  const postdetails = async (pics) => {
    setSbtn(false)
    console.log(pics)
    if (pics.type === "image/jpeg" || pics.type === "image/png") {
      const data = new FormData()
      data.append("file", pics)
      data.append("upload_preset", "frontend")
      data.append('cloud_name', "du51yn1qe")
      const uploadpic = await fetch("https://api.cloudinary.com/v1_1/du51yn1qe/image/upload", {
        method: 'post',
        body: data,
      }).then((res) => res.json()).catch((err) => {
        setSbtn(false)
        console.log(err.message)
        setMsg("please upload your pic again")
      })

      const finalurl = await uploadpic.url
      setPic(finalurl.toString())
      if (finalurl) {
        console.log(finalurl)
        setSbtn(true)
      }
    }
  }
  return (
    <div>
      <form onSubmit={handleSubmit} className='lform'>
        <div>
          <label>Name:</label><br />
          <input className='formcontrol' onChange={e => setName(e.target.value)} type="text" />
        </div>
        <div>
          <label>Email Address:</label><br />
          <input className='formcontrol' onChange={e => setEmail(e.target.value)} type="email" />
        </div>
        <div>
          <label>Password:</label><br />
          <input className='formcontrol' onFocus={e => e.target.type = "text"} onChange={e => setPassword(e.target.value)} onBlur={e => e.target.type = "password"} />
        </div>
        <div>
          <label>Confirm Password:</label>
          <input className='formcontrol' onChange={e => setConfirmPassword(e.target.value)} onFocus={e => e.target.type = "text"} onBlur={e => e.target.type = "password"} />
        </div>
        <div>
          <label>Upload Your Picture</label>
          <input className='formcontrol' style={{ background: "#fff", color: "green" }} accept="image/*" onChange={e => postdetails(e.target.files[0])} type="file" />
        </div>
        <div style={{ color: "red", background: "#fff" }}>{msg}</div>
        <div>
          <button style={sbtn ? { background: "yellowgreen" } : { background: "red" }} className='smtbtn'>{sbtn ? "SingUp" : "Uploading..."}</button>
        </div>
      </form>
    </div>
  )
}

export default Signup