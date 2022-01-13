import React,{useState,useEffect} from 'react';
import './galleryImage.css';
import { Modal } from 'react-bootstrap';
import image from '../assets/Surya_mandhir.jpg'
import { getTempleImage}  from "../api/allApi";

export const GalleryImages = () => {

  const [show, setShow] = useState(false);
  const [image, setImage] = useState([])

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  useEffect(() => {
    const res = getTempleImage()
			res.then((result) => {
				setImage(result.data)
			})
	},[])
   console.log('image...',image);
  function handleClick() {
      window.location.href = "/khajrana";
    }
 
  return (
    <div >
      <div class="breadcrumb-area--bg-two bg-overlay-black-4">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
              <h3 class="breadcrumb-title wt">Gallery</h3>
              <ul class="breadcrumb-list">
                  <li class="breadcrumb-item"><a onClick={handleClick}>Home</a></li>
                  <li class="breadcrumb-item ">Gallery</li>
                  <li class="breadcrumb-item active">Images</li>
              </ul>   
          </div>
        </div>
      </div>
    </div>
     <div class="site-wrapper-reveal">
        <div class="gallery-area section-space--pb_120 section-space--pt_90">
            <div class="container">
              <div class="row">
                {image?.photo_video_gallerys?.map((row)=>{
                  return(
                  <>
                    { row.gallery_photo!= null &&
                      <div class="col-lg-4 col-md-6 col-sm-6">
                        <div class="single-gallery-wrap">
                          <img src={row?.gallery_photo} class="img-fluid gallery-img" alt="Gallery Image"  />     
                        </div>
                      </div>
                    }
                  </>)
                })}
              </div>
            </div>
        </div>
      </div> 
    </div>
  )
}
