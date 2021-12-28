import React from 'react';
import './home.css';
import Hindu1  from '../assets/hindu-01.png'
import Hindu2  from '../assets/hindu-02.png'
import Hindu3 from '../assets/hindu-03.png'
import Hindu4  from '../assets/hindu-04.png'
import Taiabout from '../assets/tai-about.png'
import HinduActivity1  from '../assets/hindu-activities-01.png'
import HinduActivity2  from '../assets/hindu-activities-02.png'
import HinduActivity3  from '../assets/hindu-activities-03.png'

export const Home = () => {
   function handleEvents(){
      window.location.href = "/events"
    }
  return (
    <div>
       <div class="hero-area bg-overlay-black  hero-style-01 hindu-hero-bg">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="hero-content text-center">
                            <h1 class="text-white">Amazing Bridge Between<br/>
                         The Divine & Mankind</h1>
                                <div class="ht-btn-area hero-boder-top">
                                    <a onClick={handleEvents} class="hero-btn">Explore Events</a>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
      </div>
      <div>   
      </div>
      <div class="feature-area section-space--pt_90">
            <div class="container">
                <div class="row">
                   <div class="col-lg-3 col-md-6">
                        <div class="single-feature-wrap text-center">
                            <div class="feature-icon ">
                                <img src={Hindu1} alt=""/>
                            </div>
                            <div class="feature-content">
                                <h5 class="feature-title">Temple</h5>
                            </div>
                        </div>
                    </div>
                     <div class="col-lg-3 col-md-6"> 
                        <div class="single-feature-wrap text-center">
                            <div class="feature-icon ">
                                <img src={Hindu2} alt=""/>
                            </div>
                            <div class="feature-content">
                                <h5 class="feature-title">Puja</h5>
                            </div>
                        </div>
                      </div>
                          <div class="col-lg-3 col-md-6">
                        
                        <div class="single-feature-wrap text-center">
                            <div class="feature-icon ">
                                <img src={Hindu3} alt=""/>
                            </div>
                            <div class="feature-content">
                                <h5 class="feature-title">Donation</h5>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-3 col-md-6">
                       <div class="single-feature-wrap text-center">
                            <div class="feature-icon ">
                                <img src={Hindu4} alt="" />
                            </div>
                            <div class="feature-content">
                                <h5 class="feature-title">Education</h5>
                            </div>
                        </div>
                     </div>
                </div>
            </div>
      </div>
     
        <div class="tai-about-area section-space--ptb_120" >
            <div class="container-fluid pl-0 pr-0">
                <div class="row no-gutters align-items-center">
                    <div class="col-lg-6 pr-lg-5">
                        <div class="about-tai-image">
                            <img src={Taiabout} class="img-fluid" alt="Tai Images"/>
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div class="about-tai-content col-06__right tablet-mt__30 small-mt__30">
                            <div class="section-title-wrap">
                                <h3 class="section-title left-style">Taj Temple</h3>
                            </div>
                            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.</p>
                            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.</p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
     
      <div class="service-area section-space--pb_120">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="section-title-wrap text-center">
                            <h3 class="section-title center-style">What we do</h3>
                        </div>
                    </div>
                </div>
                <div className="row" >
                  <div class="col-lg-4 col-md-6 col-12">
                        <div class="single-activities-wrap">
                            <a href="#" class="activities-imgaes">
                                <img src={HinduActivity1} class="img-fluid" alt=""/>
                            </a>
                            <div class="activities-content text-center">
                                <div class="widget-metadata"><span>South Temple</span></div>
                                <a href="#">
                                    <h4 class="activities-title">Spiritual Service</h4>
                                </a>
                            </div>
                        </div>
                    </div> 
                    <div class="col-lg-4 col-md-6 col-12">
                        <div class="single-activities-wrap">
                            <a href="#" class="activities-imgaes">
                                <img src={HinduActivity2} class="img-fluid" alt=""/>
                            </a>
                            <div class="activities-content text-center">
                                <div class="widget-metadata"><span>South Temple</span></div>
                                <a href="#">
                                    <h4 class="activities-title">Relief Service</h4>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 col-12">
                        <div class="single-activities-wrap">
                            <a href="#" class="activities-imgaes">
                                <img src={HinduActivity3} class="img-fluid" alt=""/>
                            </a>
                            <div class="activities-content text-center">
                                <div class="widget-metadata"><span>South Temple</span></div>
                                <a href="#">
                                    <h4 class="activities-title">Medical Service</h4>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                         
            </div>
      </div>  
              
    </div>
  )
}
