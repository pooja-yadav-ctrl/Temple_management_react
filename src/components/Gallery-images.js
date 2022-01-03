import React,{useState} from 'react';
import './galleryImage.css';
import { Modal } from 'react-bootstrap';
import image from '../assets/Surya_mandhir.jpg'
import image1 from '../assets/gallery-image/gallery-01.png'
import image2 from '../assets/gallery-image/gallery2.jpg'
import image3 from '../assets/gallery-image/gallery1.jpg'
import image4 from '../assets/gallery-image/gallery-04.png'
import image5 from '../assets/gallery-image/gallery-05.png'
import image6 from '../assets/gallery-image/gallery3.jpg'
import image7 from '../assets/gallery-image/gallery-02.png'
import image8 from '../assets/gallery-image/gallery-08.png'
import image9 from '../assets/gallery-image/gallery-09.png'


export const GalleryImages = () => {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
   
   
  function handleClick() {
      window.location.href = "/home";
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
                 <div class="col-lg-4 col-md-6 col-sm-6">
                        <div class="single-gallery-wrap" onClick={handleShow}>  
                         <img src={image} class="img-fluid " alt="Gallery Image"  />
                         <Modal show={show} onHide={handleClose} >
                            <img src={image} className="justify-content-center image-show" /> 
                            </Modal> 
                        </div>
                  </div>
                  <div class="col-lg-4 col-md-6 col-sm-6">
                        <div class="single-gallery-wrap" onClick={handleShow} >
                            <img src={image1} class="img-fluid " alt="Gallery Image"  />
                           
                        </div>
                  </div>
                  <div class="col-lg-4 col-md-6 col-sm-6">
                        <div class="single-gallery-wrap">
                           <img src={image5} class="img-fluid " alt="Gallery Image" onClick={handleShow}  />
                            
                        </div>
                  </div>
                  <div class="col-lg-4 col-md-6 col-sm-6">
                        <div class="single-gallery-wrap">
                          <img src={image4} class="img-fluid " alt="Gallery Image" onClick={handleShow} />
                            
                        </div>
                  </div>
                  <div class="col-lg-4 col-md-6 col-sm-6">
                        <div class="single-gallery-wrap">
                          <img src={image7} class="img-fluid " alt="Gallery Image" onClick={handleShow}  />
                        </div>
                  </div>
                  <div class="col-lg-4 col-md-6 col-sm-6">
                        <div class="single-gallery-wrap">
                          <img src={image} class="img-fluid " alt="Gallery Image" onClick={handleShow}  />
                        </div>
                  </div>
                  <div class="col-lg-4 col-md-6 col-sm-6">
                        <div class="single-gallery-wrap">
                         <img src={image1} class="img-fluid " alt="Gallery Image" onClick={handleShow} />
                            
                        </div>
                  </div>
                  <div class="col-lg-4 col-md-6 col-sm-6">
                        <div class="single-gallery-wrap">
                          <img src={image5} class="img-fluid " alt="Gallery Image" onClick={handleShow}  />
                            
                        </div>
                  </div>
                  <div class="col-lg-4 col-md-6 col-sm-6">
                        <div class="single-gallery-wrap">
                            <img src={image4} class="img-fluid " alt="Gallery Image"   onClick={handleShow}  />
                            
                        </div>
                  </div>
              </div>
            </div>
        </div>
      </div> 
       <Modal show={show} onHide={handleClose} >
          <img src={image} className="justify-content-center image-show" /> 
        </Modal> 
    </div>
  )
}
