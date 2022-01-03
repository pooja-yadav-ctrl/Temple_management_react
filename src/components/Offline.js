import React from 'react'
import './galleryImage.css'
import Bhim from '../assets/offline-donation/bhim.png' 
import Gpay from '../assets/offline-donation/google-pay.png'
import Payz from '../assets/offline-donation/paytm.png'
import Phonepe from '../assets/offline-donation/payzapp.png'
import Paytm from '../assets/offline-donation/phone-pe.png'
import QRCode from '../assets/offline-donation/QR_CODE_FOR_DONATION.png'
import Sbi from '../assets/offline-donation/sbi-pay.png'
export const Offline = () => {
    function handleClick() {
      window.location.href = "/home";
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
                  <li class="breadcrumb-item active">Offline Donation</li>
              </ul>   
          </div>
        </div>
      </div>
     </div>
      <div className="mb-5 mt-5">
      <h4 class="text-center text-danger font-weight-bold mb-4 mt-5"><b>Offline Donation </b></h4>
      <div class="container">
          <div class="row">
              <div class="col-md-6 text-left border-right">
                  <h5 class="font-weight-bold" style={{color: "brown"}}>Deposit into Bank Account</h5>
                  <p>Bank Account Name- <b>UK Chardham Devasthanam Mgmt Board</b></p>
                  <p>Bank Account number- <b>50200050501308</b></p>
                  <p>Bank Name- <b>HDFC Bank Limited</b></p>
                  <p>Branch Name- <b>Nehru Colony Dehradun</b></p>
                  <p>IFSC Code- <b>HDFC0003784</b></p>
                  <p>MICR Code- <b>248240005</b></p>
              </div>
              <div class="col-md-6 text-left">
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
                      <div class="col-6">
                          <p class="text-center">
                              <img src={QRCode} width="100%"/>
                          </p>
                      </div>
                  </div>

              </div>
          </div>
      </div>
  </div>
    </div>
  )
}
