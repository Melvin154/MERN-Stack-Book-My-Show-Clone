import React, { useState } from 'react'
import './Auth.css'
import Login from './Login'
import Signup from './Signup'

const Auth = () => {
    const [isLog,setLog]=useState(false)
    const onSignUp=()=>{
        
        setLog(!isLog)
    }
    const onLogin=()=>{
    
      setLog(!isLog)
  }
  return (
    <>






      <div className="container mt button-sign">
        <button
          className="btn btn-danger"
          data-bs-toggle="modal"
          data-bs-target="#loginModal"
        >{/*Added Code*/}
               {isLog ? "Sign out" : "Sign in"}
        </button>
      </div>










      <div
        className="modal fade"
        id="loginModal"
        aria-labelledby="loginModalLabel"
        aria-hidden="true"
        
      >
        <div className="modal-dialog">
          <div className="modal-content">
           

            <div className="modal-body">
              <div className="tab-content">
                <div className="tab-pane fade show active" id="login">

{/*Added Onlogin Code*/}
                 {!isLog && <Login onLogin={()=>setLog(true)}  onLogout={() => setLog(false)} logout={isLog} onclick={onSignUp}  />}
                 {isLog && <Signup onSignUp={()=>setLog(false)} onclick={onLogin}/> }



             

                </div>
              </div>
            </div>



          </div>
        </div>
      </div>
    </>
  )
}

export default Auth