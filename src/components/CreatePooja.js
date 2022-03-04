import React, {useState} from 'react';
import { createTemplePooja, updateTemplePooja }  from "../api/allApi";
import Alert from 'react-bootstrap/Alert';
import { useHistory } from "react-router-dom";

function CreatePooja(props) {
  let history = useHistory();
  const [temple, setTemple]= useState([])
  const [templeInfo, setTempleInfo]= useState([])
  const [templeId, setTempleId]= useState()
  const [isMessage, setIsMessage] = useState(false)
  const [message, setmessage] = useState(null)
  const [messageType, setmessageType] = useState("success")
  const TempleInfo = props?.location?.state?.poojaInfo
	const temple_id = localStorage.getItem('temple_id')
	
	function handleClick() {
    window.location.href = "/babaradevra";
  }

  const handleChange = (event,key) => {
		event.preventDefault();
		setTemple({...temple, worship: {...temple.worship, [key]: event.target.value, temple_id: temple_id}}) 
  }	
	const handleSubmit = (e) => {
		e.preventDefault();
		const res = createTemplePooja(temple)
		res.then((result) => {
			setTempleId(result?.data?.temple?.id)
			setIsMessage(true)
			setmessageType("success")
			setmessage(result?.data?.message)
			setTimeout(() => {
				setIsMessage(false)
				window.location.href = '/pooja'
			}, 2000);
		})
	} 

  const handleUpdate = async(e) => {
		e.preventDefault();
		const res = updateTemplePooja(TempleInfo?.id,temple)
		res.then((result) => {
			console.log('res',res);
			setIsMessage(true)
			setmessageType("success")	
			setmessage("Pooja updated successfully")
			setTimeout(() => {
				setIsMessage(false)
				window.location.href = '/pooja'
			}, 2000);
		})
	} 
  return (
    <div>
      <div class="breadcrumb-area--bg-two bg-overlay-black-4">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <h3 class="breadcrumb-title wt">POOJA TIME</h3>
              <ul class="breadcrumb-list">
                <li class="breadcrumb-item"><a onClick={handleClick}>Home</a></li>
                <li class="breadcrumb-item active">Temple Pooja Time</li>
              </ul>   
            </div>
          </div>
        </div>
      </div>
			{isMessage && <Alert className='alert-msg' variant={messageType}>{message}</Alert> }
      <div class="container-fluid px-1 py-5 mx-auto">
        <div class="row d-flex justify-content-center">
        	<div class="col-xl-7 col-lg-8 col-md-9 col-11 text-center">
            <div class="card">
							{props?.location?.state?.update === "true" ? <h5 class="text-center mb-4">Update Temple Pooja Time</h5>: <h5 class="text-center mb-4">Add Temple Pooja Time </h5>}
							<form class="form-card">
								<div class="row justify-content-between text-left">
										<div class="form-group col-sm-6 flex-column d-flex"> 
											<label class="form-control-label px-3">Pooja 
											<span class="text-danger"> *</span></label> 
											<input type="text" id="templename" name="name" placeholder="Enter Pooja name" defaultValue={TempleInfo?.name} onChange = {(e)=>handleChange(e,'name')} /> 
										</div>
										<div class="form-group col-sm-6 flex-column d-flex">
											<label class="form-control-label px-3">Pooja Type
											<span class="text-danger"> *</span></label> 
											<input type="text" id="description" name="type_of_pooja" placeholder="Enter type of pooja" defaultValue={TempleInfo?.type_of_pooja} onChange = {(e)=>handleChange(e,'type_of_pooja')} onblur="validate(2)"/>
										 </div>
								</div>
								<div class="row justify-content-between text-left">
									<div class="form-group col-sm-6 flex-column d-flex">
										<label class="form-control-label px-3">
                     Prist Name <span class="text-danger"> *</span>
										</label>
										<input type="text" id="email" name="pundit" placeholder="Enter Pandit name" defaultValue={TempleInfo?.pundit} onChange = {(e)=>handleChange(e,'pundit')} onblur="validate(3)"/>
									</div>
									<div class="form-group col-sm-6 flex-column d-flex"> 
										<label class="form-control-label px-3">
                    Start Time<span class="text-danger"> *</span>
										</label> 
										<input type="text" id="mob" name="start_time" placeholder="Enter start_time" defaultValue={TempleInfo?.start_time} onChange = {(e)=>handleChange(e,'start_time')} onblur="validate(4)"/> </div>
								</div>
                <div class="row justify-content-center">
                  <div class="form-group col-sm-6 flex-column d-flex"> <label class="form-control-label px-3">
                  End time <span class="text-danger"> *</span></label> 
                    <input type="text" id="ans" name="end_time" placeholder="Enter end_time" defaultValue={TempleInfo?.end_time} onChange = {(e)=>handleChange(e,'end_time')} onblur="validate(6)"/> 
                  </div>
                </div>
								<div class="row justify-content-center">
									<div class="form-group col-sm-6"> <button type="submit" class="btn-block btn-primary" onClick={(e)=>{history.push('/pooja')}}>Back</button></div>
									{ props?.location?.state?.update === "true" ?	<div class="form-group col-sm-6"> <button type="submit" class="btn-block btn-primary" onClick={handleUpdate}> Update Now</button> </div>
									:	<div class="form-group col-sm-6"> <button type="submit" class="btn-block btn-primary" onClick={handleSubmit}>Create Now</button> </div>}
								</div>
							</form>
            </div>
          </div>
        </div>
       </div>
    </div>
  );
}

export default CreatePooja;