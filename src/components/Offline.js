import React from 'react'
import './galleryImage.css'

export const Offline = () => {
    function handleClick() {
      window.location.href = "/khajrana";
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
            <div class="card text-center mt-30">
              <div class="col-md-12 ">
                  <h5 class="font-weight-bold" style={{color: "brown"}}>Deposit into Bank Account</h5>
                  <p>Bank Account Name- <b>UK Chardham Devasthanam Mgmt Board</b></p>
                  <p>Bank Account number- <b>50200050501308</b></p>
                  <p>Bank Name- <b>HDFC Bank Limited</b></p>
                  <p>Branch Name- <b>Nehru Colony Dehradun</b></p>
                  <p>IFSC Code- <b>HDFC0003784</b></p>
                  <p>MICR Code- <b>248240005</b></p>
              </div>
              </div>
      </div>
  </div>
    </div>
  )
}
