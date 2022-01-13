import React,{useEffect, useState} from 'react';
import { addVedio }  from "../api/allApi";
import { useHistory } from "react-router-dom";
import Alert from 'react-bootstrap/Alert';

function AddVedio(props) {
  let history = useHistory();
  const [isMessage, setIsMessage] = useState(false)
  const [message, setmessage] = useState(null)
  const [messageType, setmessageType] = useState("success")
  const [video, setVideo] = useState()

  function handleClick() {
    window.location.href = "/khajrana";
  }

  const uploadVedio = async (e) => {
    const file = e.target?.files[0];
    setVideo(file) 
    const base64 = await convertBase(file);
    // setVedioPreview(base64)
  }
  const convertBase = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);

      fileReader.onload = () => {
        resolve(fileReader.result);
      };

      fileReader.onerror = (error) => {
        reject(error);
      }
    })
  }
	
	const handleSubmit = (e) => {
		e.preventDefault();
		const formData = new FormData();
		formData.append('gallery[temple_video]',video)
    formData.append('gallery[temple_id]',230)

		const res = addVedio(formData)	
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
								<h3 class="breadcrumb-title wt">Add Vedio</h3>
								<ul class="breadcrumb-list">
										<li class="breadcrumb-item"><a onClick={handleClick}>Home</a></li>
										<li class="breadcrumb-item active">Add Vedio</li>
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
							<h5 class="text-center mb-4">Add Vedio</h5>
							<form class="form-card">
                <div class="row justify-content-center">
                  <div class="form-group col-sm-6 flex-column d-flex"> <label class="form-control-label px-3">
                    Temple Vedio <span class="text-danger"> *</span></label> 
                    <input type="file" id="ans" accept="vedio"  name="temple_vedio" placeholder="Enter zipcode"  onChange = {(e)=>uploadVedio(e)} onblur="validate(6)"/> 
                  </div>	
                  {/* <source src={vedioPreview}></source>				 */}
                </div>
								<div class="row justify-content-center">
								<button type="submit" class="btn-block btn-primary back-btn" onClick={(e)=>{history.push('/list')}}>Back</button>
							  <div class="form-group col-sm-6"> <button type="submit" class="btn-block btn-primary" onClick={handleSubmit}>Create Now</button> </div>
								</div>
							</form>
            </div>
          </div>
        </div>
       </div>
    </div>
  );
}

export default AddVedio;