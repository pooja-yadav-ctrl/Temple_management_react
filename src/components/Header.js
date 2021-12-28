import React ,{useState} from 'react'
import './header.css'
import Title from '../assets/temple.jpg'
import { Modal } from 'react-bootstrap';
import Button from '@material-ui/core/Button';
import { useHistory } from "react-router-dom";
import { signOut }  from "../api/allApi";
import Alert from 'react-bootstrap/Alert'

export default function Header() {
  let history = useHistory();
  const [show, setShow] = useState(false);
  const [isMessage, setIsMessage] = useState(false)
  const [message, setmessage] = useState(null)
  const [messageType, setmessageType] = useState("success")
  const authentication_token = localStorage.getItem('msg');
  
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
   function handleClick() {
      window.location.href = "/";
    }
    function handleImage(){
      window.location.href = "/gallery-image"
    }
    function handleVideo(){
      window.location.href = "/gallery-video"
    }
    function handleEvents(){
      window.location.href = "/events"
    }
    function handleOfflineDonation(){
      window.location.href = "/offline-donation"
    }
    function handleOnlineDonation(){
      window.location.href = "/online-donation"
    }
    function handleCreateTemple(){
      window.location.href = '/create'
    }
    function handleTempleList(){
      history.push('/list')
    }
    function handleSignOut(){
      const res = signOut()
      res.then((result) => {
        setIsMessage(true)
        setmessageType("success")
        setmessage("You have successfully logged out")
        setTimeout(() => {
          setIsMessage(false)
          window.location.href = '/login'
        }, 2000);
      })
    }
  
  return (
    <div className="header-main">
      <header className="header-area header-sticky">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 d-flex align-items-center">
              <div className=" mt-2 header__logo">
                 <img src={Title} width="8%" alt="" style={{ borderRadius: "50px"}}/><span className="title-text ml-4">Religious Temple</span> 
                 
              </div>
              <div class="header-right">
                <div class="header__navigation menu-style-three d-none d-lg-block">
                  <nav class="navigation-menu">
                    <ul>
                      <li class="has-children">
                        <a onClick={handleClick}><span>Home</span></a>
                      </li>
                      <li class="has-children has-children--multilevel-submenu ">
                        <a><span>Gallery</span></a>
                        <ul class="submenu">
                          <li class="active"><a onClick={handleImage}><span>Images</span></a></li>
                          <li><a onClick={handleVideo} ><span>Videos</span></a></li>
                       </ul>
                      </li>
                      <li class="has-children has-children--multilevel-submenu">
                        <a onClick={handleEvents} ><span>Events</span></a>
                        <ul class="submenu">
                          <li class="active"><a onClick={handleShow}><span>Add Events</span></a></li>
                          
                       </ul>
                      </li>
                      <li class="has-children has-children--multilevel-submenu">
                        <a ><span>Donate</span></a>
                        <ul class="submenu">
                          <li class="active"><a onClick={handleOfflineDonation}><span>Offline Donation</span></a></li>
                          <li><a onClick={handleOnlineDonation}><span>Online Donation</span></a></li>
                        </ul>
                      </li>
                      <li class="has-children has-children--multilevel-submenu">
                        <a ><span>Temple</span></a>
                        <ul class="submenu">
                         { authentication_token === "bKwD3Nkur5nyTFrNzD7_" &&  <li class="active"><a onClick={handleCreateTemple}><span>Create Temple</span></a></li> }
                          <li><a onClick={handleTempleList}><span>Temple List</span></a></li>
                        </ul>
                      </li>
                      <li class="has-children">
                        <a onClick={handleSignOut}><span>Logout</span></a>
                      </li>
                    </ul>
                  </nav>
                </div>
                <div class="mobile-navigation-icon d-block d-lg-none" id="mobile-menu-trigger">
                  <i></i>
                </div>
                </div>
            </div>
            {isMessage && <Alert className='logout-msg mt-2' variant={messageType}>{message}</Alert> }
          </div>
        </div>
      </header>
       <Modal show={show} onHide={handleClose} className="text-center mt-5">
       <div className="addevent card ">
        <h5 class="text-center mb-4"> Add Events </h5>
         <form class="form-card">
            <div class="row justify-content-between text-left">
                <div class="form-group col-sm-6 flex-column d-flex"> <label class="form-control-label px-3">Title
                <span class="text-danger"> *</span></label> <input type="text" id="fname" name="fname" placeholder="Enter your first name" onblur="validate(1)"/> </div>
                <div class="form-group col-sm-6 flex-column d-flex"> <label class="form-control-label px-3">Time
                <span class="text-danger"> *</span></label> <input type="text" id="fname" name="fname" placeholder="Enter your first name" onblur="validate(1)"/> </div>
            </div>
            <div class="row justify-content-between text-left">
                <div class="form-group col-sm-6 flex-column d-flex"> <label class="form-control-label px-3">
                  Date <span class="text-danger"> *</span></label>
                  <input type="date" id="email" name="email" placeholder="" onblur="validate(3)"/> </div>
                  <div class="form-group col-sm-6 flex-column d-flex"> <label class="form-control-label px-3">Address
                <span class="text-danger"> *</span></label> <input type="text" id="lname" name="lname" placeholder="Enter your last name" onblur="validate(2)"/> </div>
            </div>
            <div class="row justify-content-between text-left">
                <div class="form-group col-12 flex-column d-flex"> <label class="form-control-label px-3">
                  Description<span class="text-danger"> *</span></label> 
                <textarea id="mob" name="mob" placeholder="" onblur="validate(4)"/> </div>
            </div>
            <div class="row justify-content-center">
                <div class="form-group col-sm-6"> <button type="submit" class="btn-block btn-primary">Add Events</button> </div>
            </div>
          </form> 
        </div>   
      </Modal>
    </div>
  )
}
