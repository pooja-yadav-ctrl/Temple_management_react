import React,{ useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import { getTempleInfo, deleteTemple }  from "../api/allApi";
import { useHistory } from "react-router-dom";
import Alert from 'react-bootstrap/Alert'
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import CreateIcon from '@material-ui/icons/Create';
import Dropdown from 'react-bootstrap/Dropdown'

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
    window.location.href = "/";
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
      {isMessage && <Alert className='message mt-2' variant={messageType}>{message}</Alert> }
      <Table striped hover className='templetable mt-3'>
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
      </Table>
    </div>
  );
}

export default TempleList;