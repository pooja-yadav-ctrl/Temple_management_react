import React,{ useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import { getTempleInfo, deleteTemple }  from "../api/allApi";
import { useHistory } from "react-router-dom";
import Alert from 'react-bootstrap/Alert'
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import CreateIcon from '@material-ui/icons/Create';
import Dropdown from 'react-bootstrap/Dropdown'
import Event1 from '../assets/events/event-01.png';

function TempleList() {
  let history = useHistory();
  const [templeInfo, setTempleInfo]= useState([])
  const [isMessage, setIsMessage] = useState(false)
  const [message, setmessage] = useState(null)
  const [messageType, setmessageType] = useState("success")

  useEffect(() => {
    const res = getTempleInfo()
			res.then((result) => {
				setTempleInfo(result.data)
			})
	},[])
  
  function handleClick() {
    window.location.href = "/home";
  }

  function handleUpdate(templeInfo) {
    history.push({ pathname: '/create',state: { update: 'true', templeInfo:templeInfo }});
  }

  function handleDelete(temple_list){
    const res = deleteTemple(temple_list.id)
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
  return (
    <div>
      <div class="breadcrumb-area--bg-two bg-overlay-black-4">
       <div class="container">
        <div class="row">
          <div class="col-lg-12">
              <h3 class="breadcrumb-title wt"></h3>
              <ul class="breadcrumb-list">
                  <li class="breadcrumb-item"><a onClick={handleClick}>Home</a></li>
                  <li class="breadcrumb-item active">Temple List</li>
              </ul>   
          </div>
        </div>
      </div>
      </div>
      <div class="site-wrapper-reveal">
        <div class="events-area section-space--pb_120 section-space--pt_90">
          <div class="container">
          {isMessage && <Alert className='message mt-2' variant={messageType}>{message}</Alert> }
            <div class="row">
            {templeInfo?.temples?.map((row) => { 
              var temple_list = row;
              return(
                <div class="col-lg-4 col-md-6">
                <div class="single-event-wrap mt-40">
                  <div class="event-image">
                    <a><img src={row?.logo} class="img-fluid" alt="Event Image"/></a>
                  </div>
                  <div class="event-content">
                    <div class="content-title">
                        <a>
                          <h4 class="mb-15">{row.temple_name}</h4>
                        </a>
                        <p>{row.description}</p>
                        <div class="event-date temple-time"><span>@ {row?.start_time?.substr(11, 5)} AM to {row?.end_time?.substr(11, 5)} PM </span></div>
                    </div>
                    <div class="ticket-button-box mt-20">
                        <a href="#" class="btn ticket-btn">History</a>
                        <IconButton aria-label="delete" className='createIcon ticket-btn' onClick={(e)=>handleUpdate(temple_list)}>
                          <CreateIcon />
                        </IconButton>
                        <IconButton aria-label="delete" className='createIcon' onClick={(e)=>handleDelete(temple_list)}>
                          <DeleteIcon />
                      </IconButton>
                    </div>
                  </div>
                </div>
              </div>
              )
              })}  
            </div>
          </div>
        </div>
      </div> 
      {/* <Table striped hover className='templetable mt-3'>
        <thead>
          <tr>
            <th>Temple Name</th>
            <th></th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {templeInfo?.temples?.map((row) => { 
            var temple_list = row;
              return(
                <>
                  <tr>
                    <td className='text-center'>{temple_list.temple_name}</td>
                    <td> 
                      <Dropdown>
                        <Dropdown.Toggle id="dropdown-basic">
                          Temple Details
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                          <Dropdown.Item onClick={()=>history.push({ pathname: '/create-history',state: {templeInfo:temple_list }})}>History</Dropdown.Item>
                          <Dropdown.Item href="#/action-2">Worship</Dropdown.Item>
                          <Dropdown.Item href="#/action-3">Time Slots</Dropdown.Item>
                          <Dropdown.Item href="#/action-3">Offline city center</Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </td>
                    <td>
                      <IconButton aria-label="delete" className='createIcon' onClick={(e)=>handleUpdate(temple_list)}>
                        <CreateIcon />
                      </IconButton>
                      <IconButton aria-label="delete" className='createIcon' onClick={(e)=>handleDelete(temple_list)}>
                        <DeleteIcon />
                      </IconButton>
                    </td>
                  </tr>
                </>  
              ) 
          })}
        </tbody>
      </Table> */}
    </div>
  );
}

export default TempleList;