import React,{useEffect, useState} from 'react';
import './galleryImage.css';
import { getTempleImage}  from "../api/allApi";

export const GalleryVideos = () => {
  const [image, setImage] = useState([])
   function handleClick() {
      window.location.href = "/khajrana";
    }
    useEffect(() => {
      const res = getTempleImage()
        res.then((result) => {
          setImage(result.data)
        })
    },[])
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
     <div class="site-wrapper-reveal">
        <div class="gallery-area section-space--pb_120 section-space--pt_90">
            <div class="container">
              <div class="row">
              <div class="col-lg-4 col-md-6 col-sm-6">
              {image?.photo_video_gallerys?.map((row)=>{
                  return(
                  <>
                    <div class="single-gallery-wrap">
                      {row?.gallery_video!=null && 
                        <a href={row?.gallery_video} class="img-popup">
                        <video width="100%" height="100%" preload="auto">
                            <source src={row?.gallery_video} type="video" class="img-fluid " />
                            Your browser does not support HTML5 video.
                        </video>
                          </a>
                      }  
                    </div>     
                  </>)})}
                  </div>
              </div>
            </div>
        </div>
     </div>
   </div>  
  )
}
