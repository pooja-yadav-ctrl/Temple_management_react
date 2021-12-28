import React from 'react'
import './footer.css';
import PinterestIcon from '@material-ui/icons/Pinterest';
import TelegramIcon from '@material-ui/icons/Telegram';
import YouTubeIcon from '@material-ui/icons/YouTube';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import ArrowUpwardOutlinedIcon from '@material-ui/icons/ArrowUpwardOutlined';

export const Footer = () => {
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
                                    <li><span>Temple 1: </span> 777/ed Ipum Road Venu
                                        Demon Ipsum. 28400</li>
                                    <li><span>Temple 2: </span> 577/ed Ipum Road Venu
                                        Demon Ipsum. 15400</li>
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
                                    <li><a >Home</a></li>
                                    <li><a >Gallery</a></li>
                                    <li><a >Event</a></li>
                                    <li><a >Donate</a></li>
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
                                    <li>End Time: 11.00 pm</li>
                                    <li>Aarti Time: 9:00 am</li>
                                    <li>Aarti Time: 7:30 pm</li>
                                    
                                </ul>
                            </div>
                        </div>
                    </div>
                      <div class="col-lg-4 col-md-6 col-sm-6">
                        <div class="widget-footer mt-30">
                            <div class="footer-title">
                                <h6>Related Links</h6>
                            </div>
                            <div class="footer-logo mb-15">
                                <a href="index.html"><img src="assets/images/logo/footer-logo.png" alt=""/></a>
                            </div>
                            <div class="footer-contents">
                                <p> Subscribe to our Newsletter & stay update. </p>
                                <div class="newsletter-box">
                                    <input type="text" placeholder="Enter your mail address"/>
                                    <button>
                                      <TelegramIcon/>
                                    </button>
                                </div>
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
    </div>        
  )
}
