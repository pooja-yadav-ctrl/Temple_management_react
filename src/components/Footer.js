import React from 'react'
import './footer.css';
import PinterestIcon from '@material-ui/icons/Pinterest';
import TelegramIcon from '@material-ui/icons/Telegram';
import YouTubeIcon from '@material-ui/icons/YouTube';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import ArrowUpwardOutlinedIcon from '@material-ui/icons/ArrowUpwardOutlined';
import { useHistory } from "react-router-dom";

export const Footer = () => {
	let history = useHistory();
  return (
    <div>
        <footer class="footer-area bg-footer">
        <div class="footer-top section-space--ptb_80 section-pb wt">
          <div class="container">
            <div class="row">
               <div class="col-lg-3 col-md-6 col-sm-6">
                        <div class="widget-footer mt-30">
                            <div class="footer-title">
                                <h6>Address</h6>
                            </div>
                            <div class="footer-contents">
                                <ul>
                                    <li>Baba Ra Devra, Bhilatdev,
                                    Tehsil- Seoni Malwa, Dist. Hoshangabad, M.P. 461221</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-2 col-md-6 col-sm-6">
                        <div class="widget-footer mt-30">
                            <div class="footer-title">
                                <h6>Related Links</h6>
                            </div>
                            <div class="footer-contents">
                                <ul>
                                    <li onClick={()=>history.push('/babaradevra')}><a >Home</a></li>
                                    <li onClick={()=>history.push('gallery-image')}><a >Gallery</a></li>
																		<li onClick={()=>history.push('/pooja')}><a >Pooja</a></li>
																		<li onClick={()=>history.push('/history')}><a >History</a></li>
                                    <li onClick={()=>history.push('/events')}><a >Event</a></li>
                                    <li onClick={()=>history.push('/online-donation')}><a >Donate</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                      <div class="col-lg-3 col-md-6 col-sm-6">
                        <div class="widget-footer mt-30">
                            <div class="footer-title">
                                <h6>Information</h6>
                            </div>
                            <div class="footer-contents">
                                <ul>
                                    <li>Start Time: 9:00 am</li>
                                    <li>End Time: 10:00 pm</li>
                                    <li>Aarti Time: 9:00 am</li>
                                    <li>Aarti Time: 7:30 pm</li>
                                    
                                </ul>
                            </div>
                        </div>
                    </div>
                      <div class="col-lg-4 col-md-6 col-sm-6">
                        <div class="widget-footer mt-30">
                            <div class="footer-title">
                                <h6>Contact Us</h6>
                            </div>
                            <div class="footer-contents">
																<ul>
                                    <li>Shri Sanjay Madhukar Jori	: 910283213299</li>
                                    <li>Shri Sanjay Madhukar Jori	: 910283213299</li>        
                                </ul>
                                    <ul class="footer-social-share mt-3 ">
                                    <li ><a href="#"><FacebookIcon className="footer-icon" /></a></li>
                                    <li><a href="#"><TwitterIcon className="footer-icon"/></a></li>
                                    <li><a href="#"><PinterestIcon className="footer-icon"/></a></li>
                                    <li><a href="#"><YouTubeIcon className="footer-icon"/></a></li>
                                </ul>

                            </div>
                        </div>
                    </div>
                   </div>   
            </div>
         </div>
        </footer>
				<div class="container">
					<div class="copyright">
						&copy; Copyright <strong><span>webkorps</span></strong>. All Rights Reserved
					</div>   
   			 </div>
    </div>        
  )
}
