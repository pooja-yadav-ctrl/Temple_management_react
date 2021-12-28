import React, {useState} from 'react';
import { createTempleHistory, updateTempleInfo }  from "../api/allApi";
import Alert from 'react-bootstrap/Alert';

function CreateHistory(props) {
  const [temple, setTemple]= useState([])
  const [templeInfo, setTempleInfo]= useState([])
  const [templeId, setTempleId]= useState()
  const [isMessage, setIsMessage] = useState(false)
  const [message, setmessage] = useState(null)
  const [messageType, setmessageType] = useState("success")
  const TempleInfo = props?.location?.state?.templeInfo

	function handleClick() {
    window.location.href = "/";
  }

  const handleChange = (event,key) => {
		event.preventDefault();
		setTemple({...temple, temple_history_detail: {...temple.temple_history_detail, [key]: event.target.value, temple_id: TempleInfo?.id}}) 
}	
	const handleSubmit = (e) => {
		e.preventDefault();
		const res = createTempleHistory(temple)
		res.then((result) => {
			setTempleId(result?.data?.temple?.id)
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
              <h3 class="breadcrumb-title wt">Temple History</h3>
              <ul class="breadcrumb-list">
                <li class="breadcrumb-item"><a onClick={handleClick}>Home</a></li>
                <li class="breadcrumb-item active">Temple History</li>
              </ul>   
            </div>
          </div>
        </div>
      </div>
      <div class="container-fluid px-1 py-5 mx-auto">
        <div class="row d-flex justify-content-center">
        	<div class="col-xl-7 col-lg-8 col-md-9 col-11 text-center">
            <div class="card">
							{props?.location?.state?.update === 'true' ? <h5 class="text-center mb-4">Update Temple History</h5>: <h5 class="text-center mb-4">Add Temple History </h5>}
							<form class="form-card">
								<div class="row justify-content-between text-left">
										<div class="form-group col-sm-6 flex-column d-flex"> 
											<label class="form-control-label px-3">Temple History
											<span class="text-danger"> *</span></label> 
											<textarea type="text" id="templename" name="temple_history" placeholder="Enter temple history" defaultValue={TempleInfo?.temple_history} onChange = {(e)=>handleChange(e,'temple_name')} /> 
										</div>
										<div class="form-group col-sm-6 flex-column d-flex">
											<label class="form-control-label px-3">Temple Structure
											<span class="text-danger"> *</span></label> 
											<textarea type="text" id="description" name="temple_structure" placeholder="Enter temple structure" defaultValue={TempleInfo?.temple_structure} onChange = {(e)=>handleChange(e,'temple_structure')} onblur="validate(2)"/>
										 </div>
								</div>
								<div class="row justify-content-between text-left">
									<div class="form-group col-sm-6 flex-column d-flex">
										<label class="form-control-label px-3">
                      Inside Temple Theertham <span class="text-danger"> *</span>
										</label>
										<input type="text" id="email" name="inside_temple_theertham" placeholder="Enter Inside Temple Theertham" defaultValue={TempleInfo?.inside_temple_theertham} onChange = {(e)=>handleChange(e,'inside_temple_theertham')} onblur="validate(3)"/>
									</div>
									<div class="form-group col-sm-6 flex-column d-flex"> 
										<label class="form-control-label px-3">
                      Outside Temple Theertham<span class="text-danger"> *</span>
										</label> 
										<input type="text" id="mob" name="outside_temple_theertham" placeholder="Enter Outside Temple Theertham" defaultValue={TempleInfo?.outside_temple_theertham} onChange = {(e)=>handleChange(e,'outside_temple_theertham')} onblur="validate(4)"/> </div>
								</div>
								<div class="row justify-content-center">
								{ props?.location?.state === 'true' ?	<div class="form-group col-sm-6"> <button type="submit" class="btn-block btn-primary" onClick={handleUpdate}> Update Now</button> </div>
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

export default CreateHistory;