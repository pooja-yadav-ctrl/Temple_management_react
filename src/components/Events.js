import React,{useEffect, useState} from 'react';
import './galleryImage.css';
import './event.css';
import './home.css';
import Event1 from '../assets/events/DSC_0002.JPG';
import { getEvents}  from "../api/allApi";
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import CreateIcon from '@material-ui/icons/Create';
import { useHistory } from "react-router-dom";
import { getTempleInfo, deleteEvent, updateEvents }  from "../api/allApi";
import { Modal } from 'react-bootstrap';

export const Events = () => {

  let history = useHistory();
  const [templeInfo, setTempleInfo]= useState([])
  const [isMessage, setIsMessage] = useState(false)
  const [message, setmessage] = useState(null)
  const [messageType, setmessageType] = useState("success")
  const [eventInfo, setEventInfo] = useState([]);
  const [show, setShow] = useState(false);
  const [eventDetails,  setEventDetails] = useState([]);
  const temple_id = localStorage.getItem('temple_id')
  const role = localStorage.getItem('role')
  function handleClick() {
      window.location.href = "/babaradevra";
  }
  
  const handleClose = () => setShow(false);
  const handleShow = (row) => {
    setTempleInfo(row)
    setShow(true);
  }
 
  const handleChange = (event,key) => {
		event.preventDefault();
		setEventDetails({...eventDetails, event: {...eventDetails.event, [key]: event.target.value, temple_id: temple_id}}) 
  }	
  const handleUpdate = async(e) => {
		e.preventDefault();
		const res = updateEvents(templeInfo?.id, eventDetails)
		res.then((result) => {
			setIsMessage(true)
			setmessageType("success")
			setmessage(result?.data?.message)
			setTimeout(() => {
				setIsMessage(false)
				window.location.reload()
			}, 2000);
		})
	} 

  useEffect(() => {
    const res = getEvents("babaradevra")
			res.then((result) => {
				setEventInfo(result.data)
			})
	},[])

  function handleDelete(id){
    const res = deleteEvent(id)
    res.then((result) => {
      setIsMessage(true)
			setmessageType("success")
			setmessage(result?.data?.message)
			setTimeout(() => {
				setIsMessage(false)
				window.location.reload()
			}, 2000);
    })
  }
  console.log('eventInfo', eventInfo);
  return (
    <div>
      <div class="breadcrumb-area--bg-two bg-overlay-black-4">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <h3 class="breadcrumb-title wt">Events</h3>
              <ul class="breadcrumb-list">
                  <li class="breadcrumb-item"><a onClick={handleClick}>Home</a></li>
                  <li class="breadcrumb-item active">Events</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="site-wrapper-reveal">
      <div class="events-area section-space--pb_120 section-space--pt_90">
        <div class="container">
          <div class="row">
            {eventInfo?.events?.map((row) => { 
              var date = new Date(row?.event_date);
              var time = new Date(row?.event_time)
              return(
                <>
                <div class="col-lg-4 col-md-6">
                  <div class="single-event-wrap mt-40">
                    <div class="event-image">
                      <a><img src={Event1} class="img-fluid" alt="Event Image"/></a>
                    </div>
                    <div class="event-content">
                      <div class="content-title">
                        <a>
                            <h4 class="mb-15">{row.event_name}</h4>
                        </a>
                        <p>{row?.event_description}</p>
                        <div class="event-date"><span>Event Date</span> <span>{date.toDateString()}</span></div>
                        <div class="event-date"><span>Event Time</span> <span>{time.toLocaleTimeString()}</span></div>
                      </div>
                      <div class="ticket-button-box mt-20">
                          <a href="#" class="btn ticket-btn">Buy Ticket</a>
                          { role === "admin" && 
                            <>
                              <IconButton aria-label="delete" className='createIcon' onClick={(e)=>handleShow(row)}>
                                <CreateIcon />
                              </IconButton>
                              <IconButton aria-label="delete" className='createIcon' onClick={(e)=>handleDelete(row?.id)}>
                                <DeleteIcon />
                              </IconButton>
                            </>
                          }
                      </div>
                    </div>
                  </div>
                </div>
                </>
              )
            }
            )}
          </div>
        </div>
      </div>
    </div> 
    <Modal show={show} onHide={handleClose} className="text-center mt-5">
       <div className="addevent card ">
       {/* {update === 'true' ? <h5 class="text-center mb-4"> Update Events </h5> : */}
        <h5 class="text-center mb-4"> Update Events </h5>
         <form class="form-card">
            <div class="row justify-content-between text-left">
                <div class="form-group col-sm-6 flex-column d-flex"> <label class="form-control-label px-3">Title
                <span class="text-danger"> *</span></label>
                 <input type="text" id="fname" name="event_name" placeholder="Enter Title" defaultValue={templeInfo.event_name} onChange = {(e)=>handleChange(e,'event_name')} onblur="validate(1)"/> </div>
                <div class="form-group col-sm-6 flex-column d-flex"> <label class="form-control-label px-3">Time
                <span class="text-danger"> *</span></label>
                <input type="text" id="fname" name="event_time" defaultValue={templeInfo.event_time}  placeholder="Enter Time" onChange = {(e)=>handleChange(e,'event_time')} onblur="validate(1)"/> </div>
            </div>
            <div class="row justify-content-between text-left">
                <div class="form-group col-sm-6 flex-column d-flex"> 
                  <label class="form-control-label px-3">
                  Date <span class="text-danger"> *</span></label>
                  <input type="date" id="event_date" defaultValue={templeInfo.event_date} onChange = {(e)=>handleChange(e,'event_date')} name="event_date" placeholder="" onblur="validate(3)"/> </div>
                  <div class="form-group col-sm-6 flex-column d-flex"> <label class="form-control-label px-3">Address
                  <span class="text-danger"> *</span></label>
                  <input type="text" id="lname" defaultValue={templeInfo.event_address} name="event_address" onChange = {(e)=>handleChange(e,'event_address')} placeholder="Enter Address" onblur="validate(2)"/> </div>
            </div>
            <div class="row justify-content-between text-left">
                <div class="form-group col-12 flex-column d-flex"> <label class="form-control-label px-3">
                  Description<span class="text-danger"> *</span></label> 
                <textarea id="mob" name="event_description" defaultValue={templeInfo.event_description} onChange = {(e)=>handleChange(e,'event_description')} placeholder="Enter Description" onblur="validate(4)"/> </div>
            </div>
            <div class="row justify-content-center">
              {/* {update === 'true' ? <div class="form-group col-sm-6"> <button type="submit" class="btn-block btn-primary" onClick={handleModalUpdate}>Update Events</button></div> */}
              <div class="form-group col-sm-6"> <button type="submit" class="btn-block btn-primary" onClick={handleUpdate}>Update Events</button> </div>
            </div>
          </form> 
        </div>   
      </Modal>     
    </div>
  )
}
