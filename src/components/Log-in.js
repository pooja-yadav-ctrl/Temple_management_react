// import React, { useState } from 'react';
// import { withFormik, Form, Field } from 'formik';
// import * as Yup from 'yup';
// import { useHistory } from 'react-router-dom';

// const AdminLogin = (props) => {
//   const history = useHistory();
//   const [userId, setUserId] = useState()
//   const loginPageStyle = {
//     margin: "225px auto 37px",
//     maxWidth: "530px",
//     background: "#fff",
//     padding: "60px",
//     borderRadius: "10px",
//     boxShadow: "0px 0px 10px 10px rgba(0,0,0,0.15)",
//     backgroundColor: "#dae2ff",
//     textAlign: 'center'
//   }
//   const { touched, errors } = props;
//   return(
//     <React.Fragment>
//       <div className="container">
//         <div className="login-wrapper" style={loginPageStyle}>
//           <h2 style={{marginBottom: '40px'}}>Login Page</h2>
//           <Form className="form-container">
//             <div className="form-group" style={{margin: '15px 0px'}}>
//               <label htmlFor="email">Email</label>
//               <Field type="text" name="email" className={"form-control"} placeholder="Email" style={{marginLeft: '15px'}}/>
//               { touched.email && errors.email && <span className="help-block text-danger">{errors.email}</span> }
//             </div>
//             <div className="form-group" style={{margin: '15px 0px'}}>
//               <label htmlFor="password">Password</label>
//               <Field type="password" name="password" className={"form-control"} placeholder="Password" style={{marginLeft: '15px'}}/>
//               { touched.password && errors.password && <span className="help-block text-danger">{errors.password}</span> }
//             </div>
//              <button type="submit" className="btn btn-primary" style={{backgroundColor: '#c5c5ff', padding: '8px 13px', borderRadius: '20px', marginTop: '15px'}}>Login</button>
//           </Form>
//         </div>
//       </div>
//     </React.Fragment>
//   );
// }
// const LoginFormik = withFormik({
//   mapPropsToValues: (props) => {
//     return {
//       email: props.email || '',
//       password: props.password || ''
//     }
//   },
//   validationSchema: Yup.object().shape({
//     email: Yup.string().email('Email not valid').required('Email is required'),
//     password: Yup.string()
//       .required('Password is required')
//       .min(8, "Password is too short - should be 8 chars minimum.")
//       .matches(/(?=.*[0-9])/, "Password must contain a number.")
//   }),
//   handleSubmit: (values) => {
//     const REST_API_URL = "http://localhost:3001/users/sign_in";
//     fetch(REST_API_URL, {
//       method: 'POST',
//       body: JSON.stringify(values),
//       headers: {
//         'Content-Type': 'application/json'
//       }
//     }).then(response=> {
//       // debugger
//       if (response.ok) {
//           response.json()
//           // setUserId(response.json())
//         // return(
//           console.log('response ===== ', response)
//           // window.location.href = `/temples`
//           // history.push("/ShowTempleDetails")
//         // )
//       } else {
//         // HANDLE ERROR
//         throw new Error('Something went wrong');
//       }
//     }).then(data => {
//       // HANDLE RESPONSE DATA
//       console.log(data);
//     }).catch((error) => {
//       // HANDLE ERROR
//       console.log(error);
//     });
//   }
// })(AdminLogin);

// export default LoginFormik


import React, { useState } from 'react';
import axios from 'axios';
import Alert from 'react-bootstrap/Alert';
import { signInUser } from '../api/allApi'
import CreateTemple from './CreateTemple';

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
              window.location.href = `/home`
            }, 1500);
          }
        })
      }
    }  
      // try {
      //   const res = await axios.post(url, user, {
      //     headers: {
      //       "Access-Control-Allow-Origin": "*",
      //       'Accept': 'application/json',
      //       'Content-Type': 'application/json;charset=UTF-8',
      //     },
      //   })
      //   console.log(res)
      //   if (res?.data?.message === "you have entered wrong credentials") {
      //     setIsMessage(true)
      //     setmessageType("error")
      //     setmessage(res?.data?.message)
      //   }
      // } catch (error) {
      //   console.log('error',error)
      // }
  
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
                    <button type="submit" class="form-control btn btn-primary rounded submit px-3">Sign In</button>
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