import React, { useState, useEffect } from 'react';
import './galleryImage.css';
import './online.css';
import { createTemple, updateTempleInfo }  from "../api/allApi";
import TempleList from './TempleList';
import Alert from 'react-bootstrap/Alert';

function CreateTemple(props) {
	const [temple, setTemple]= useState([])
	const [templeInfo, setTempleInfo]= useState('false')
	const [templeId, setTempleId]= useState()
	const [isMessage, setIsMessage] = useState(false)
  const [message, setmessage] = useState(null)
  const [messageType, setmessageType] = useState("success")
	const TempleInfo = props?.location?.state?.templeInfo
	useEffect(() => {
		
	},[])

	function handleClick() {
			window.location.href = "/";
	}
	const handleChange = (event,key) => {
		event.preventDefault();
		setTemple({...temple, temple: {...temple.temple, [key]: event.target.value}}) 
	}	

	const handleSubmit = (e) => {
		e.preventDefault();
		const res = createTemple(temple)
		res.then((result) => {
			setTempleId(result.data.temple.id)
			setIsMessage(true)
			setmessageType("success")
			setmessage(result?.data?.message)
			setTimeout(() => {
				setIsMessage(false)
				window.location.reload()
			}, 2000);
		})
	} 
	const handleUpdate = async(e) => {
		e.preventDefault();
		const res = updateTempleInfo(TempleInfo?.id, temple)
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
								<h3 class="breadcrumb-title wt">Temple Creation</h3>
								<ul class="breadcrumb-list">
										<li class="breadcrumb-item"><a onClick={handleClick}>Home</a></li>
										<li class="breadcrumb-item active">Temple Creation</li>
								</ul>   
						</div>
					</div>
				</div>
      </div>
      <div class="container-fluid px-1 py-5 mx-auto">
        <div class="row d-flex justify-content-center">
        	<div class="col-xl-7 col-lg-8 col-md-9 col-11 text-center">
            <div class="card">
							{props?.location?.state?.update === 'true' ? <h5 class="text-center mb-4">Update Temple</h5>: <h5 class="text-center mb-4">Create Temple</h5>}
							<form class="form-card">
								<div class="row justify-content-between text-left">
										<div class="form-group col-sm-6 flex-column d-flex"> 
											<label class="form-control-label px-3">Temple name
											<span class="text-danger"> *</span></label> 
											<input type="text" id="templename" name="temple_name" placeholder="Enter temple name" defaultValue={TempleInfo?.temple_name} onChange = {(e)=>handleChange(e,'temple_name')} /> 
										</div>
										<div class="form-group col-sm-6 flex-column d-flex">
											<label class="form-control-label px-3">Description
											<span class="text-danger"> *</span></label> 
											<input type="text" id="description" name="description" placeholder="Enter description" defaultValue={TempleInfo?.description} onChange = {(e)=>handleChange(e,'description')} onblur="validate(2)"/>
										 </div>
								</div>
								<div class="row justify-content-between text-left">
									<div class="form-group col-sm-6 flex-column d-flex">
										<label class="form-control-label px-3">
											Email <span class="text-danger"> *</span>
										</label>
										<input type="text" id="email" name="temple_email" placeholder="Enter Email" defaultValue={TempleInfo?.temple_email} onChange = {(e)=>handleChange(e,'temple_email')} onblur="validate(3)"/>
									</div>
									<div class="form-group col-sm-6 flex-column d-flex"> 
										<label class="form-control-label px-3">
											Phone Number<span class="text-danger"> *</span>
										</label> 
										<input type="text" id="mob" name="phone_no" placeholder="Enter Phone Number" defaultValue={TempleInfo?.phone_no} onChange = {(e)=>handleChange(e,'phone_no')} onblur="validate(4)"/> </div>
								</div>
								<div class="row justify-content-between text-left">
										<div class="form-group col-sm-6 flex-column d-flex"> <label class="form-control-label px-3">
										Start Time <span class="text-danger"> *</span></label>
											<input type="text" id="email" name="start_time" placeholder="Enter start time" defaultValue={TempleInfo?.start_time} onChange = {(e)=>handleChange(e,'start_time')} onblur="validate(3)"/> </div>
										<div class="form-group col-sm-6 flex-column d-flex"> <label class="form-control-label px-3">
										End Time<span class="text-danger"> *</span></label> 
										<input type="text" id="mob" name="end_time" placeholder="Enter end time" defaultValue={TempleInfo?.end_time} onChange = {(e)=>handleChange(e,'end_time')} onblur="validate(4)"/> </div>
								</div>
								<div class="row justify-content-between text-left">
										<div class="form-group col-sm-6 flex-column d-flex"> <label class="form-control-label px-3">
										Address <span class="text-danger"> *</span></label> 
												<input type="text" id="job" name="temple_address" placeholder="Enter Address" defaultValue={TempleInfo?.temple_address} onChange = {(e)=>handleChange(e,'temple_address')} onblur="validate(5)"/> 
										</div>
											<div class="form-group col-sm-6 flex-column d-flex"> <label class="form-control-label px-3">
												City <span class="text-danger"> *</span></label> 
												<input type="text" id="job" name="city" onChange = {(e)=>handleChange(e,'city')} defaultValue={TempleInfo?.city} placeholder="Enter City" onblur="validate(5)"/> 
										</div>
								</div>
								<div class="row justify-content-between text-left">
										<div class="form-group col-sm-6 flex-column d-flex"> <label class="form-control-label px-3">
											State<span class="text-danger"> *</span></label> 
											<input type="text" id="ans" name="state" placeholder="Enter state" defaultValue={TempleInfo?.state} onChange = {(e)=>handleChange(e,'state')} onblur="validate(6)"/> 
										</div>
											<div class="form-group col-sm-6 flex-column d-flex"> <label class="form-control-label px-3">
												Country <span class="text-danger"> *</span></label> 
												<input type="text" id="job" name="country" placeholder="Enter country" defaultValue={TempleInfo?.country} onChange = {(e)=>handleChange(e,'country')} onblur="validate(5)"/> 
										</div>
								</div>
									<div class="row justify-content-center">
										<div class="form-group col-sm-6 flex-column d-flex"> <label class="form-control-label px-3">
										Zip code <span class="text-danger"> *</span></label> 
											<input type="text" id="ans" name="zipcode" placeholder="Enter zipcode" defaultValue={TempleInfo?.zipcode} onChange = {(e)=>handleChange(e,'zipcode')} onblur="validate(6)"/> 
										</div>
								</div>
								<div class="row justify-content-center">
								{ props?.location?.state?.update === 'true' ?	<div class="form-group col-sm-6"> <button type="submit" class="btn-block btn-primary" onClick={handleUpdate}> Update Now</button> </div>
				         :	<div class="form-group col-sm-6"> <button type="submit" class="btn-block btn-primary" onClick={handleSubmit}>Create Now</button> </div>}
								</div>
							</form>
            </div>
          </div>
        </div>
       </div>
			 {isMessage && <Alert className='success-msg' variant={messageType}>{message}</Alert> }
		</div>
	);
}

export default CreateTemple;