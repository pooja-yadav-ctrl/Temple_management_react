import React ,{useState, useEffect} from 'react'
import './header.css'
import Title from '../assets/temple.jpg'
import { Modal } from 'react-bootstrap';
import Button from '@material-ui/core/Button';
import { useHistory } from "react-router-dom";
import { signOut }  from "../api/allApi";
import Alert from 'react-bootstrap/Alert'
import { createEvents, getEvents}  from "../api/allApi";

export default function Header(props) {
  let history = useHistory();
  const [show, setShow] = useState(false);
  const [update, setUpdate] = useState('true')
  const [eventDetails, setEventDetails] = useState([]);
  const [isMessage, setIsMessage] = useState(false)
  const [message, setmessage] = useState(null)
  const [messageType, setmessageType] = useState("success")
  const authentication_token = localStorage.getItem('msg');
  const TempleInfo = props?.location?.state?.templeInfo
  console.log("props",props);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  function handleModalUpdate() {
    setUpdate('true')
    setShow(true)
  }
  console.log('update',update);
  const handleChange = (event,key) => {
		event.preventDefault();
		setEventDetails({...eventDetails, event: {...eventDetails.event, [key]: event.target.value, temple_id: 230}}) 
  }	
  
  const handleSubmit = (e) => {
		e.preventDefault();
		const res = createEvents(eventDetails)
		res.then((result) => {
			// setTempleId(result?.data?.temple?.id)
			setIsMessage(true)
			setmessageType("success")
			setmessage(result?.data?.message)
			setTimeout(() => {
				setIsMessage(false)
				window.location.reload()
			}, 2000);
		})
	} 
   function handleClick() {
      window.location.href = "/khajrana";
    }
    function handleImage(){
      window.location.href = "/gallery-image"
    }
    function handleAddImage(){
      window.location.href = "/add-image"
    }
    function handleAddVideo(){
      window.location.href = "/add-video"
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
    function handleHistory(){
      window.location.href = '/history'
    }
    function handleCreateTemple(){
      window.location.href = '/create'
    }
    function handleCreatePooja(){
      window.location.href = '/create-pooja'
    }
    function handleTempleList(){
      history.push('/list')
    }
    function handlePooja(){
      window.location.href = "/pooja"
    }
    function handleSignOut(){
      const res = signOut()
      res.then((result) => {
        setIsMessage(true)
        setmessageType("success")
        setmessage("You have successfully logged out")
        setTimeout(() => {
          setIsMessage(false)
          localStorage.removeItem('msg')
          window.location.href = '/'
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
                          { authentication_token === "bKwD3Nkur5nyTFrNzD7_" && 
                          <>
                            <li><a onClick={handleAddImage} ><span>Add Image </span></a></li>
                            <li><a onClick={handleAddVideo} ><span>Add Video</span></a></li>
                          </>}
                       </ul>
                      </li>
                      <li class="has-children has-children--multilevel-submenu ">
                        <a onClick={handlePooja}><span>Pooja</span></a>
                        { authentication_token === "bKwD3Nkur5nyTFrNzD7_" && 
                          <ul class="submenu">
                            <li class="active"><a onClick={handleCreatePooja}><span>Create</span></a></li>
                          </ul>
                        }
                      </li>
                      <li class="has-children has-children--multilevel-submenu ">
                        <a onClick={handleHistory}><span>History</span></a>
                      </li>
                      <li class="has-children has-children--multilevel-submenu">
                        <a onClick={handleEvents} ><span>Events</span></a>
                        { authentication_token === "bKwD3Nkur5nyTFrNzD7_" && 
                        <ul class="submenu">
                          <li class="active"><a onClick={handleShow}><span>Add Events</span></a></li>
                       </ul>}
                      </li>
                      <li class="has-children has-children--multilevel-submenu">
                        <a ><span>Donate</span></a>
                        <ul class="submenu">
                          <li class="active"><a onClick={handleOfflineDonation}><span>Offline Donation</span></a></li>
                          <li><a onClick={handleOnlineDonation}><span>Online Donation</span></a></li>
                        </ul>
                      </li>
                      { authentication_token === "bKwD3Nkur5nyTFrNzD7_" && 
                        <>
                          <li class="has-children has-children--multilevel-submenu">
                            <a ><span>Temple</span></a>
                            <ul class="submenu">
                              <>
                                <li><a onClick={handleTempleList}><span>Temple List</span></a></li>
                                <li class="active"><a onClick={handleCreateTemple}><span>Create Temple</span></a></li>
                              </>
                            </ul>
                          </li>
                          <li class="has-children">
                            <a onClick={handleSignOut}><span>Logout</span></a>
                          </li>
                        </>
                      }
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
       {/* {update === 'true' ? <h5 class="text-center mb-4"> Update Events </h5> : */}
        <h5 class="text-center mb-4"> Add Events </h5>
         <form class="form-card">
            <div class="row justify-content-between text-left">
                <div class="form-group col-sm-6 flex-column d-flex"> <label class="form-control-label px-3">Title
                <span class="text-danger"> *</span></label>
                 <input type="text" id="fname" name="event_name" placeholder="Enter Title" onChange = {(e)=>handleChange(e,'event_name')} onblur="validate(1)"/> </div>
                <div class="form-group col-sm-6 flex-column d-flex"> <label class="form-control-label px-3">Time
                <span class="text-danger"> *</span></label>
                <input type="text" id="fname" name="event_time" placeholder="Enter Time" onChange = {(e)=>handleChange(e,'event_time')} onblur="validate(1)"/> </div>
            </div>
            <div class="row justify-content-between text-left">
                <div class="form-group col-sm-6 flex-column d-flex"> 
                  <label class="form-control-label px-3">
                  Date <span class="text-danger"> *</span></label>
                  <input type="date" id="event_date" onChange = {(e)=>handleChange(e,'event_date')} name="event_date" placeholder="" onblur="validate(3)"/> </div>
                  <div class="form-group col-sm-6 flex-column d-flex"> <label class="form-control-label px-3">Address
                  <span class="text-danger"> *</span></label>
                  <input type="text" id="lname" name="event_address" onChange = {(e)=>handleChange(e,'event_address')} placeholder="Enter Address" onblur="validate(2)"/> </div>
            </div>
            <div class="row justify-content-between text-left">
                <div class="form-group col-12 flex-column d-flex"> <label class="form-control-label px-3">
                  Description<span class="text-danger"> *</span></label> 
                <textarea id="mob" name="event_description" onChange = {(e)=>handleChange(e,'event_description')} placeholder="Enter Description" onblur="validate(4)"/> </div>
            </div>
            <div class="row justify-content-center">
              {/* {update === 'true' ? <div class="form-group col-sm-6"> <button type="submit" class="btn-block btn-primary" onClick={handleModalUpdate}>Update Events</button></div> */}
              <div class="form-group col-sm-6"> <button type="submit" class="btn-block btn-primary" onClick={handleSubmit}>Add Events</button> </div>
            </div>
          </form> 
        </div>   
      </Modal>
    </div>
  )
}
