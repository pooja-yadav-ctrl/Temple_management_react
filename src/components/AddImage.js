import React,{useState} from 'react';
import { addImage }  from "../api/allApi";
import { useHistory } from "react-router-dom";
import Alert from 'react-bootstrap/Alert';

function AddImage(props) {
  let history = useHistory();
  const [isMessage, setIsMessage] = useState(false)
  const [message, setmessage] = useState(null)
  const [messageType, setmessageType] = useState("success")
	const [image, setImage] = useState()
  const [imagePreview, setImagePreview] = useState()
  const temple_id = localStorage.getItem('temple_id')
  function handleClick() {
    window.location.href = "/babaradevra";
  }

  const uploadImage = async (e) => {
    const file = e.target?.files[0];
    setImage(file) 
    const base64 = await convertBase(file);
    setImagePreview(base64)
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
		formData.append('gallery[temple_photo]', image);
    formData.append('gallery[temple_id]',temple_id)

		const res = addImage(formData)	
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
								<h3 class="breadcrumb-title wt">Add Image</h3>
								<ul class="breadcrumb-list">
										<li class="breadcrumb-item"><a onClick={handleClick}>Home</a></li>
										<li class="breadcrumb-item active">Add Image</li>
								</ul>   
						</div>
					</div>
				</div>
      </div>{isMessage && <Alert className='alert-msg' variant={messageType}>{message}</Alert> }
      <div class="container-fluid px-1 py-5 mx-auto">
        <div class="row d-flex justify-content-center">
        	<div class="col-xl-7 col-lg-8 col-md-9 col-11 text-center">
            <div class="card">
							<h5 class="text-center mb-4">Add Image </h5>
							<form class="form-card">
                <div class="row justify-content-center">
                  <div class="form-group col-sm-6 flex-column d-flex"> <label class="form-control-label px-3">
                  Temple image <span class="text-danger"> *</span></label> 
                    <input type="file" id="ans" accept="image" name="temple_photo" placeholder="Upload image" onChange = {(e)=>uploadImage(e)} onblur="validate(6)"/> 
                  </div> 	
                  <img src={imagePreview} height="100px" /> 				
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

export default AddImage;