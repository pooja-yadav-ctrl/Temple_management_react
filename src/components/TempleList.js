import React,{ useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import { getTempleInfo, deleteTemple }  from "../api/allApi";
import { useHistory } from "react-router-dom";
import Alert from 'react-bootstrap/Alert'
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import CreateIcon from '@material-ui/icons/Create';

function TempleList() {
  let history = useHistory();
  const [templeInfo, setTempleInfo]= useState([])
  const [isMessage, setIsMessage] = useState(false)
  const [message, setmessage] = useState(null)
  const [messageType, setmessageType] = useState("success")

  useEffect(() => {
    const res = getTempleInfo('babaradevra')
			res.then((result) => {
				setTempleInfo(result.data)
			})
	},[])
  
  function handleClick() {
    window.location.href = "/babaradevra";
  }

  function handleUpdate(temple_list) {
    history.push({ pathname: '/create',state: { update: 'true', templeInfo:temple_list }});
  }

  function handleHistory(temple_list) {
    history.push({ pathname: '/create-history',state: { update: 'true', templeInfo:temple_list }});
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
                    <a><img src={row?.logo} class="img-fluid temple-img" alt="Event Image"/></a>
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
                        <a class="btn ticket-btn" onClick={(e)=>handleHistory(row)} >History</a>
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
    </div>
  );
}

export default TempleList;