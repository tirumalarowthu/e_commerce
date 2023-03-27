import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Login from './Login';
import Signup from './Signup';
import "./HomepageStyles.css"
import HeaderOne from '../Components/HeaderOne';
const Homepage = () => {
          const [key, setKey] = useState(false);
          //if user in local storage then it will directly login
          const navigate = useNavigate()
    useEffect(() => {
        const user = JSON.parse(localStorage.getItem("userinfo"))
          if (user) {
              navigate("/")
          }
    }, [navigate])
          return (
          <>
                <HeaderOne/>
              <div style={{marginTop:"60px"}} className='App'>
                  <div className="Homepageheader">
                      <div className="homepage">
                          <button style={key ? {background:"#fff"} : { background: "#efefef" }} onClick={() => setKey(false)}>Login </button>
                          <button style={key ? { background: "#efefef" } : {background:"#fff"}} onClick={() => setKey(true)}>SignUp</button>
                      </div>
                      {
                              key ?<Signup/>: <Login/> 
                      }
                  </div>
              </div>
          </>
          
  )
}

export default Homepage