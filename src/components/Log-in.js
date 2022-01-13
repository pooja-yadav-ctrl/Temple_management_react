import React, { useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import { signInUser } from '../api/allApi'

function LogIn(props) {
    const [user, setUser] = useState({})
    const [passwordError, setpasswordError] = useState("");
    const [emailError, setemailError] = useState("");
    const [isMessage, setIsMessage] = useState(false)
    const [message, setmessage] = useState(null)
    const [messageType, setmessageType] = useState("success")
    const [submit , setSubmit] = useState(false)

    const handleValidation = (event) => {
      let formIsValid = true;
  
      if (!user.user.email.match(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/)) {
        formIsValid = false;
        setemailError("Email Not Valid");
        return false;
      } else {
        setemailError("");
        formIsValid = true;
      }
  
      if (!user.user.password.match(/^[a-zA-Z0-9_\.\@\-]{8,12}$/)) {
        formIsValid = false;
        setpasswordError(
          "It should contain digits,One capital and small Letter and length must best min 8 Chracters and Max 12 Chracters"
        );
        return false;
      } else {
        setpasswordError("");
        formIsValid = true;
      }
      return formIsValid;
    };
    const handleChange = (event) => {
      setUser({...user, user: {...user.user,[event.target.name]: event.target.value}})
    }
    const loginSubmit = async(e) => {
      e.preventDefault();
      if(handleValidation(e)){
        setSubmit(true);
        const res = signInUser(user)
        res.then((result) => {
          setSubmit(false);
          if (result?.data?.message === "you have entered wrong credentials") {
            setIsMessage(true)
            setmessageType("danger")
            setmessage(result?.data?.message)
            setTimeout(() => {
              setIsMessage(false)
            }, 1500);
          }
          else{
            setIsMessage(true)
            setmessageType("success")
            setmessage("you have successfully logged in")
            localStorage.setItem('id', result?.data?.id);
            localStorage.setItem('msg', result?.data?.authentication_token);
            setTimeout(() => {
              setIsMessage(false)
              window.location.href = `/khajrana`
            }, 1500);
          }
        })
      }
    }  
    console.log('setSubmit',submit);
    return (
      <>
        {isMessage && <Alert className='message mt-2' variant={messageType}>{message}</Alert> }
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-md-6 text-center mt-3 mb-5">
              <h2 class="heading-section">Login</h2>
            </div>
          </div>
          <div class="row justify-content-center">
            <div class="col-md-7 col-lg-5">
              <div class="wrap">
                <div class="img"></div>
                <div class="login-wrap p-4 p-md-5">
                <div class="d-flex">
                  <div class="w-100">
                    <h3 class="mb-4">Sign In</h3>
                  </div>
                  <div class="w-100">
                    <p class="social-media d-flex justify-content-end">
                      <a href="#" class="social-icon d-flex align-items-center justify-content-center"><span class="fa fa-facebook"></span></a>
                      <a href="#" class="social-icon d-flex align-items-center justify-content-center"><span class="fa fa-twitter"></span></a>
                    </p>
                  </div>
                </div>
                <form id="loginform" onSubmit={loginSubmit} class="signin-form">
                  <div class="form-group mt-3">
                    <input type="text" class="form-control" name="email" aria-describedby="emailHelp" onChange={(event) => handleChange(event)} required/>
                    <label class="form-control-placeholder" for="username">Username</label>
                    <small id="emailHelp" className="text-danger form-text">
                      {emailError}
                    </small>
                  </div>
                  <div class="form-group">
                    <input id="password-field" type="password" class="form-control" name="password" id="exampleInputPassword1" onChange={(event) => handleChange(event)} required/>
                    <label class="form-control-placeholder" for="password">Password</label>
                    <span toggle="#password-field" class="fa fa-fw fa-eye field-icon toggle-password"></span>
                    <small id="passworderror" className="text-danger form-text">
                      {passwordError}
                    </small>
                  </div>
                  <div class="form-group">
                    <button type="submit" class="form-control btn btn-primary rounded submit px-3" disabled={submit}>Sign In</button>
                  </div>
                </form>
                <p class="text-center">Not a member? <a data-toggle="tab" href="#signup">Sign Up</a></p>
              </div>
            </div>
          </div>
         </div>
       </div>
      </>
    );
}

export default LogIn;