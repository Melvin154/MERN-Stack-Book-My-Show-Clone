import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { userData } from "../../userData";

const Login = (props) => {
  const navigate = useNavigate();

 //Logout Referrence



  const [logInpt, setLoginInpt] = useState({
    email: "",
    password: "",
  });

  const [inputErr, setInputErr] = useState({});

  const onInputHandler = (event) => {
    const name = event.target.name;
    const val = event.target.value;
    setLoginInpt({ ...logInpt, [name]: val });
  };




  const onLogin = (event) => {
    event.preventDefault();
    const validate = {};
    let isEmail =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (logInpt.email.trim().length === 0) {
      validate.emailErr = "Please enter Email ID";
    } else if (!logInpt.email.trim().match(isEmail)) {
      validate.emailErr = "Please enter valid Email ID";
    }
    if (logInpt.password.trim().length === 0) {
      validate.passwordErr = "Please enter password";
    } else if (logInpt.password.trim().length < 6) {
      validate.passwordErr = "Password must be 6 digits";
    }
    setInputErr(validate);



    if (Object.keys(validate).length == 0) {
      const findUser = userData.find((user) => user.email === logInpt.email);
      if (findUser) {
        if (findUser.password === logInpt.password) {
          navigate("/");
          localStorage.setItem("userID", findUser.id);
         //Added Code
          props.onLogin()
        } else {
          validate.invalidUser = "Invalid email Id or Password.!";
        }
      } else {
        validate.invalidUser = "Invalid email Id or Password.!";
      }

      alert("Login Successful !!!");
    }
  };

  const onChangeLog = (e) => {
    e.preventDefault();
    props.onclick();
  };




  return (
    <div className="container" style={{ border: "2px solid" }}>
      <h5 className="modal-title">
        <b>
          <u> Already Have an Account ?</u>
        </b>
      </h5>





      <form onSubmit={onLogin}>
        <div className="form">
          <h3>
            <strong>LOGIN</strong>
          </h3>

          {inputErr.invalidUser && <p>{inputErr.invalidUser}</p>}
          <div className="form-content">
            <label htmlFor="email">Email</label>
            <br />

            <input
              type="email"
              name="email"
              id="email"
              required
              value={logInpt.email}
              onChange={onInputHandler}
            />
            {inputErr.emailErr && <p>{inputErr.emailErr}</p>}
            <br />
          </div>

          <div className="form-content">
            <label htmlFor="password">Password</label>
            <br />
            <input
              type="password"
              name="password"
              id="pwd"
              required
              value={logInpt.password}
              onChange={onInputHandler}
            />

            {inputErr.passwordErr && <p>{inputErr.passwordErr}</p>}
            <br />
          </div>

          <div className="form-content">
            <input type="checkbox" name="check" id="check" required />
            &nbsp; Remember Me?
          </div>

          <div className="form-content">
            <input type="submit" value="LOGIN" />
          </div>

          <p>___________________________________________</p>
          <p style={{ textAlign: "right" }}>Forgot Password?</p>
          <p style={{ textAlign: "center" }}>OR</p>

          <div className="form-content other-authentication">
            {/*Google*/}
            <a
              className="btn btn-outline-light btn-floating m-1 other-auth"
              href="#!"
              role="button"
            >
              <i className="fab fa-google"></i>
            </a>

            <a
              className="btn btn-outline-light btn-floating m-1 other-auth"
              href="#!"
              role="button"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>

            {/*Github*/}
            <a
              className="btn btn-outline-light btn-floating m-1 other-auth"
              href="#!"
              role="button"
            >
              <i className="fab fa-github"></i>
            </a>
            <p style={{ textAlign: "center", margin: "2px" }}>
              Need an account?
              <Link to="#" onClick={onChangeLog}  >
                
              {props.logout ? "Sign in" : "Sign up"}
              </Link>
            </p>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
