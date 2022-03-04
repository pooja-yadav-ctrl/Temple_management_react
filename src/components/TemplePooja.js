import React,{useEffect, useState} from 'react';
import { getTemplePoojaList, deletePooja }  from "../api/allApi";
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import CreateIcon from '@material-ui/icons/Create';
import { useHistory } from "react-router-dom";
import Alert from 'react-bootstrap/Alert'

function TemplePooja(props) {
  let history = useHistory();
  const [poojaInfo, setPoojaInfo]= useState([])
  const [isMessage, setIsMessage] = useState(false)
  const [message, setmessage] = useState(null)
  const [messageType, setmessageType] = useState("success")
  const role = localStorage.getItem('role')
  function handleClick() {
    window.location.href = "/babaradevra";
  }
  useEffect(() => {
    const res = getTemplePoojaList(1)
			res.then((result) => {
				setPoojaInfo(result.data)
			})
	},[])

  function handleUpdate(poojaInfo) {
    history.push({ pathname: '/create-pooja',state: { update: 'true', poojaInfo:poojaInfo }});
  }

  function handleDelete(temple_list){
    const res = deletePooja(temple_list.id)
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
              <h3 class="breadcrumb-title wt">Pooja Timing</h3>
              <ul class="breadcrumb-list">
                  <li class="breadcrumb-item"><a onClick={handleClick}>Home</a></li>
                  <li class="breadcrumb-item active">Pooja Timing</li>
              </ul>   
          </div>
        </div>
      </div>
      </div>
      {isMessage && <Alert className='alert-msg ml-941' variant={messageType}>{message}</Alert> }
      <div class="site-wrapper-reveal">
      <div class="events-area section-space--pb_120 section-space--pt_90">
      <h4 class="text-center text-danger font-weight-bold mb-5"><b>Pooja Timing </b></h4>
        <div class="container">
          <div class="row">
            {poojaInfo?.worships?.map((row) => { 
              var starttime = new Date(row?.start_time) 
              var endtime = new Date(row?.end_time) 
              return(
                <>
                <div class="col-lg-4 col-md-6">
                  <div className='pooja-card'>
                  <div class="single-event-wrap mt-40">
                    <div class="pooja-content">
                    
                          <h5 class="text-center pooja-name">{row.name}</h5>
                        <p>{row?.event_description}</p>
                        <div class="pooja-time ml-4"><span>Start Time</span> <span>{starttime.toLocaleTimeString()}</span></div>
                        <div class="pooja-time ml-4"><span>End Time</span> <span>{endtime.toLocaleTimeString()}</span></div>
                        <div class="pooja-time ml-4"><span>Prist Name</span> <span>{row?.pundit}</span></div>
                    
                      <div class="ticket-box mt-20">
                          { role === "admin" && 
                            <>
                              <IconButton aria-label="delete" className='createIcon ticket-btn' onClick={(e)=>handleUpdate(row)}>
                                <CreateIcon />
                              </IconButton>
                              <IconButton aria-label="delete" className='createIcon' onClick={(e)=>handleDelete(row)}>
                                <DeleteIcon />
                              </IconButton>
                            </>
                          }
                      </div>
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
      {/* <div class="col span_6_of_8 text-center">
        <br/>
        <p style={{color: "#FF0000", fontWeight: "bold"}}>Temple Worship Time</p>
        <div>
        {poojaInfo?.worships?.map((row) => { 
                var starttime = new Date(row?.start_time) 
                var endtime = new Date(row?.end_time) 
                return(
                  <>
                   <div className='pooja-card mb-4 ml-35'>

                  </div>
                  </>
                )
                })}
        </div> */}
        {/* <table width="548" border="1" className='ml-35'>
          <tbody>
            <tr>
              <th style={{color: "#f9d48e", background: "#c67634"}}>Pooja</th>
              <th style={{color: "#f9d48e", background: "#c67634"}}>Start Time</th>
              <th style={{color: "#f9d48e", background: "#c67634"}}>End Time </th>
              <th style={{color: "#f9d48e", background: "#c67634"}}>Prist name</th>
              <th width='20%' style={{color: "#f9d48e", background: "#c67634"}}>Action</th>
            </tr>
            {poojaInfo?.worships?.map((row) => { 
                var starttime = new Date(row?.start_time) 
                var endtime = new Date(row?.end_time) 
                return(
                  <>
                    <tr>
                      <td width="326"  style={{bgcolor:"#eea490", align:"center"}}>{row.name}</td>
                      <td width="206"  style={{bgcolor:"#eea490", align:"center"}}>{starttime.toLocaleTimeString()}</td>
                      <td width="206"  style={{bgcolor:"#eea490", align:"center"}}>{endtime.toLocaleTimeString()}</td>
                      <td width="206"  style={{bgcolor:"#eea490", align:"center"}}>{row?.pundit}</td>
                      <td> 
                        <IconButton aria-label="delete" className='createIcon ticket-btn' onClick={(e)=>handleUpdate(row)}>
                          <CreateIcon />
                        </IconButton>
                        <IconButton aria-label="delete" className='createIcon' onClick={(e)=>handleDelete(row)}>
                          <DeleteIcon />
                        </IconButton>
                      </td>
                    </tr>
                  </>)
                })}
           </tbody>
        </table> */}
      </div> 
  );
}

export default TemplePooja;