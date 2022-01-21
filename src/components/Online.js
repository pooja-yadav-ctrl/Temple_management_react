import React from 'react';
import './galleryImage.css';
import './online.css'
import Bhim from '../assets/offline-donation/bhim.png' 
import Gpay from '../assets/offline-donation/google-pay.png'
import Payz from '../assets/offline-donation/paytm.png'
import Phonepe from '../assets/offline-donation/payzapp.png'
import Paytm from '../assets/offline-donation/phone-pe.png'
import QRCode from '../assets/offline-donation/QR_CODE_FOR_DONATION.png'
import Sbi from '../assets/offline-donation/sbi-pay.png'

export const Online = () => {
  function handleClick() {
      window.location.href = "/khajrana";
    }
  function handleSubmit(){
    //  e.preventDefault();
  }  

  return (
    <div>
      <div class="breadcrumb-area--bg-two bg-overlay-black-4">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <h3 class="breadcrumb-title wt">Donation</h3>
              <ul class="breadcrumb-list">
                  <li class="breadcrumb-item"><a onClick={handleClick}>Home</a></li>
                  <li class="breadcrumb-item active">Online Donation</li>
              </ul>   
            </div>
          </div>
        </div>
      </div>
      <div class="container-fluid px-1 py-5 mx-auto">
        <div class="row d-flex justify-content-center">
        <div class="col-xl-7 col-lg-8 col-md-9 col-11 text-center">
        <h4 class="text-center text-danger font-weight-bold mt-5"><b>Online Donation </b></h4>
            <div class="card mt-30">
                <div class="col-md-12 text-center">
                  <h5 class="font-weight-bold" style={{color: "brown"}}>UPI Payment</h5>
                  <p>UPI Payment can be made by using any UPI App. Open any below UPI App and just scan this QR Code.</p>
                  <div class="row">
                      <div class="col-6 mt-4 text-center">
                          <div>
                              <img src={Bhim} style={{width: "70px", display: "inline-block"}} className="mr-2" alt="" />
                              <img src={Payz} style={{width: "70px", display: "inline-block"}} className="ml-2" alt=""/>
                          </div>
                          <div>
                              <img src={Sbi} style={{width: "70px", display: "inline-block"}} className="mr-2" alt=""/>
                              <img src={Paytm}style={{width: "70px", display: "inline-block"}} className="ml-2" alt=""/>
                          </div>
                          <div>
                              <img src={Phonepe} style={{width: "70px", display: "inline-block"}} className="mr-2" alt=""/>
                              <img src={Gpay} style={{width: "70px", display: "inline-block"}} className="ml-2" alt=""/>
                          </div>

                      </div>
                      <div class="col-4">
                          <p class="text-center">
                              <img src={QRCode} width="100%"/>
                          </p>
                      </div>
                  </div>

              </div>
                {/* <form class="form-card" onsubmit={handleSubmit()}>
                    <div class="row justify-content-between text-left">
                        <div class="form-group col-sm-6 flex-column d-flex"> <label class="form-control-label px-3">First name
                        <span class="text-danger"> *</span></label> <input type="text" id="fname" name="fname" placeholder="Enter your first name" onblur="validate(1)"/> </div>
                        <div class="form-group col-sm-6 flex-column d-flex"> <label class="form-control-label px-3">Last name
                        <span class="text-danger"> *</span></label> <input type="text" id="lname" name="lname" placeholder="Enter your last name" onblur="validate(2)"/> </div>
                    </div>
                    <div class="row justify-content-between text-left">
                        <div class="form-group col-sm-6 flex-column d-flex"> <label class="form-control-label px-3">
                         Address <span class="text-danger"> *</span></label>
                         <input type="text" id="email" name="email" placeholder="" onblur="validate(3)"/> </div>
                        <div class="form-group col-sm-6 flex-column d-flex"> <label class="form-control-label px-3">
                          City<span class="text-danger"> *</span></label> 
                        <input type="text" id="mob" name="mob" placeholder="" onblur="validate(4)"/> </div>
                    </div>
                    <div class="row justify-content-between text-left">
                        <div class="form-group col-sm-6 flex-column d-flex"> <label class="form-control-label px-3">
                           Pin/Zip code <span class="text-danger"> *</span></label> 
                           <input type="text" id="job" name="job" placeholder="" onblur="validate(5)"/> 
                        </div>
                         <div class="form-group col-sm-6 flex-column d-flex"> <label class="form-control-label px-3">
                           State <span class="text-danger"> *</span></label> 
                           <input type="text" id="job" name="job" placeholder="" onblur="validate(5)"/> 
                        </div>
                    </div>
                    <div class="row justify-content-between text-left">
                        <div class="form-group col-sm-6 flex-column d-flex"> <label class="form-control-label px-3">
                          Phone number<span class="text-danger"> *</span></label> 
                          <input type="text" id="ans" name="ans" placeholder="" onblur="validate(6)"/> 
                        </div>
                         <div class="form-group col-sm-6 flex-column d-flex"> <label class="form-control-label px-3">
                           Email <span class="text-danger"> *</span></label> 
                           <input type="text" id="job" name="job" placeholder="" onblur="validate(5)"/> 
                        </div>
                    </div>
                     <div class="row justify-content-between text-left">
                        <div class="form-group col-sm-6 flex-column d-flex"> <label class="form-control-label px-3">
                          PAN card number <span class="text-danger"> *</span></label> 
                          <input type="text" id="ans" name="ans" placeholder="" onblur="validate(6)"/> 
                        </div>
                         <div class="form-group col-sm-6 flex-column d-flex"> <label class="form-control-label px-3">
                           Donate Amount <span class="text-danger"> *</span></label> 
                           <input type="text" id="job" name="job" placeholder="" onblur="validate(5)"/> 
                        </div>
                    </div>
                    <div class="row justify-content-center">
                        <div class="form-group col-sm-6"> <button type="submit" class="btn-block btn-primary">Donate Now</button> </div>
                    </div>
                </form> */}
            </div>
          </div>
        </div>
       </div>
    </div>
  )
}
