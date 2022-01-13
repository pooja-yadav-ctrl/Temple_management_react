import React,{useEffect, useState} from 'react';
import { getTempleHistory}  from "../api/allApi";
import image from '../assets/khajrana3.jpeg'
import image2 from '../assets/khajrana7.jpeg'

function TempleHistory(props) {
  const [history, setHistory] = useState([])
  const TempleId = localStorage.getItem('id')
  function handleClick() {
    window.location.href = "/khajrana";
  }
    useEffect(() => {
    const res = getTempleHistory(7)
			res.then((result) => {
				setHistory(result.data)
			})
	},[])
  
  console.log('history',history);
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
          <div class="col-xl-7 col-lg-8 col-md-9 col-11">
            <div class="col span_2_of_8 history-image">
              <img src={image}/>
              <br/>
              <br/>
              <img src={image2}/>
            </div>
            <div class="card history-card">
              <h6 className='red'>ABOUT THE TEMPLE</h6>
              <p className='history'>{history?.temple_history_detail?.temple_history}</p>
              <p className='history'>{history?.temple_history_detail?.temple_structure}</p>
              <p className='history'>{history?.temple_history_detail?.inside_temple_theertham}</p>
              <p className='history'>{history?.temple_history_detail?.outside_temple_theertham}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TempleHistory;