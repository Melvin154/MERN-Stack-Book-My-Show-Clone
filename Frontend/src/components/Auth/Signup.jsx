import React from 'react'
import { useState,useEffect } from 'react';

const Signup = (props) => {


    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [number, setNumber] = useState('');
    const [password, setPassword] = useState('');


    useEffect(() => {
      const savedData = JSON.parse(localStorage.getItem('formData'));
  
      if (savedData) {
        setName(savedData.name);
        setEmail(savedData.email);
        setPassword(savedData.password)
        setNumber(savedData.setNumber)
      }
    }, []);


const handleSubmit = (event) => {
  event.preventDefault();

  const formData = {
    name: name,
    email: email,
    password:password,
    number:number,
  };


  localStorage.setItem('formData', JSON.stringify(formData));
  alert('Form data saved successfully!, Welcome to BookMyShow');
  props.onSignUp()
};

  const onChangeLog = (e) => {
    e.preventDefault()
    props.onclick()
  }





  return (
    <div className="container" style={{ border: "2px solid" }}>
      <h3><b><u>Create a new Account</u></b> </h3>
      <form onSubmit={handleSubmit}>
        <div className="form" >
          <h3><strong>SIGN UP</strong></h3>


          <div className="form-content" >
            <label htmlFor="username">Name</label><br />

            <input type="text" name="username" id="username" required value={name}
              onChange={(e)=>setName(e.target.value)} /><br /></div>


          <div className="form-content" >
            <label htmlFor="number">Number</label><br />
            <input type="text" pattern="[6789][0-9]{9}" name='number' id='number' title="Please enter valid phone number" value={number}
              onChange={(e)=>setNumber(e.target.value)} /></div>




          <div className="form-content" >
            <label htmlFor="email">Email</label><br />

            <input type="email" name="email" id="email" required value={email}
              onChange={(e)=>setEmail(e.target.value)} /><br /></div>





          <div className="form-content" >
            <label htmlFor="password">Password</label><br />
            <input type="password" name="password" id="password" required value={password}
              onChange={(e)=>setPassword(e.target.value)} /><br />
          </div>




          <div className="form-content">
            <input type="submit" value="SIGN UP" />
          </div>

          <p>___________________________________________</p>
          <p style={{ textAlign: "center" }}>OR</p>

          <div className="form-content other-authentication" >
            {/*Google*/}
            <a className="btn btn-outline-light btn-floating m-1 other-auth" href="#!" role="button"><i
              className="fab fa-google"></i></a>


            <a className="btn btn-outline-light btn-floating m-1 other-auth" href="#!" role="button"><i
              className="fab fa-linkedin-in"></i></a>

            {/*Github*/}
            <a className="btn btn-outline-light btn-floating m-1 other-auth" href="#!" role="button"><i
              className="fab fa-github"></i></a>
            <p style={{ textAlign: "center", margin: "2px" }}>Already an user?


              <a href="#"  onClick={() => { props.onLogout(); onChangeLog(); }}>  Login</a>


            </p>
          </div>




        </div>

      </form>
    </div>
  )
}

export default Signup