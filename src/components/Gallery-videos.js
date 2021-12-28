import React from 'react';
import './galleryImage.css';
// import MyVideo1 from "../assets/gallery-videos/second.mp4";
// import MyVideo2 from "../assets/gallery-videos/third.mp4";
// import MyVideo3 from "../assets/gallery-videos/fourth.mp4";
// import MyVideo4 from "../assets/gallery-videos/fifth.mp4";

export const GalleryVideos = () => {

   function handleClick() {
      window.location.href = "/";
    }

  return (
    <div>
      <div class="breadcrumb-area--bg-two bg-overlay-black-4">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
              <h3 class="breadcrumb-title wt">Gallery</h3>
              <ul class="breadcrumb-list">
                  <li class="breadcrumb-item"><a onClick={handleClick}>Home</a></li>
                  <li class="breadcrumb-item ">Gallery</li>
                  <li class="breadcrumb-item active">Videos</li>
              </ul>   
          </div>
        </div>
      </div>
     </div>
     {/* <div class="site-wrapper-reveal">
        <div class="gallery-area section-space--pb_120 section-space--pt_90">
            <div class="container">
              <div class="row">
                <div class="col-lg-4 col-md-6 col-sm-6">
                  <div class="single-gallery-wrap">
                    <a href={MyVideo4} class="img-popup">
                    <video width="100%" height="100%" preload="auto">
                        <source src={MyVideo4} type="video/mp4" class="img-fluid " />
                        Your browser does not support HTML5 video.
                    </video>
                    </a>
                  </div>
                  </div>
                   <div class="col-lg-4 col-md-6 col-sm-6">
                  <div class="single-gallery-wrap">
                    <a href={MyVideo1} class="img-popup">
                    <video width="100%" height="100%" preload="auto">
                        <source src={MyVideo1} type="video/mp4" class="img-fluid " />
                        Your browser does not support HTML5 video.
                    </video>
                    </a>
                  </div>
                  </div>
                  <div class="col-lg-4 col-md-6 col-sm-6">
                  <div class="single-gallery-wrap">
                    <a href={MyVideo2} class="img-popup">
                    <video width="100%" height="100%" preload="auto">
                        <source src={MyVideo2} type="video/mp4" class="img-fluid " />
                        Your browser does not support HTML5 video.
                    </video>
                    </a>
                  </div>
                  </div>
                  <div class="col-lg-4 col-md-6 col-sm-6">
                  <div class="single-gallery-wrap">
                    <a href={MyVideo3} class="img-popup">
                    <video width="100%" height="100%" preload="auto">
                        <source src={MyVideo3} type="video/mp4" class="img-fluid " />
                        Your browser does not support HTML5 video.
                    </video>
                    </a>
                  </div>
                  </div>
                  <div class="col-lg-4 col-md-6 col-sm-6">
                  <div class="single-gallery-wrap">
                    <a href={MyVideo4} class="img-popup">
                    <video width="100%" height="100%" preload="auto">
                        <source src={MyVideo4} type="video/mp4" class="img-fluid " />
                        Your browser does not support HTML5 video.
                    </video>
                    </a>
                  </div>
                  </div>
                  <div class="col-lg-4 col-md-6 col-sm-6">
                  <div class="single-gallery-wrap">
                    <a href={MyVideo1} class="img-popup">
                    <video width="100%" height="100%" preload="auto">
                        <source src={MyVideo1} type="video/mp4" class="img-fluid " />
                        Your browser does not support HTML5 video.
                    </video>
                    </a>
                  </div>
                  </div>
              </div>
            </div>
        </div>
     </div> */}
   </div>  
  )
}
