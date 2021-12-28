import React from 'react';
import './galleryImage.css';
import './event.css';
import './home.css';
import Event1 from '../assets/events/event-01.png';
import Event2 from '../assets/events/event-02.png';
import Event3 from '../assets/events/event-03.png';
import Event4 from '../assets/events/event-04.png';
import Event5 from '../assets/events/event-05.png';
import Event6 from '../assets/events/event-06.png';
import Event7 from '../assets/events/event-07.png';
import Event8 from '../assets/events/event-08.png';
import Event9 from '../assets/events/event-09.png';

export const Events = () => {
  function handleClick() {
      window.location.href = "/";
    }
  return (
    <div>
      <div class="breadcrumb-area--bg-two bg-overlay-black-4">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <h3 class="breadcrumb-title text-white">Events</h3>
              <ul class="breadcrumb-list">
                  <li class="breadcrumb-item"><a onClick={handleClick}>Home</a></li>
                  <li class="breadcrumb-item active">Events</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="site-wrapper-reveal">
      <div class="events-area section-space--pb_120 section-space--pt_90">
        <div class="container">
          <div class="row">
            <div class="col-lg-4 col-md-6">
              <div class="single-event-wrap mt-40">
                <div class="event-image">
                  <a><img src={Event1} class="img-fluid" alt="Event Image"/></a>
                </div>
                <div class="event-content">
                  <div class="content-title">
                      <a>
                          <h4 class="mb-15">Durga Mahastami</h4>
                      </a>
                      <div class="event-date"><span>3 Feb 2020 </span> <span>@09.00am to 01.00pm</span></div>
                      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                          Ipsum has been standard. </p>
                  </div>
                  <div class="ticket-button-box mt-20">
                      <a href="#" class="btn ticket-btn">Buy Ticket</a>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6">
              <div class="single-event-wrap mt-40">
                <div class="event-image">
                  <a >
                    <img src={Event2} class="img-fluid" alt="Event Image"/>
                  </a>
                </div>
                <div class="event-content">
                  <div class="content-title">
                    <a >
                        <h4 class="mb-15">Vinayaka Chathurthy</h4>
                    </a>
                    <div class="event-date"><span>3 Feb 2020 </span> <span>@09.00am to 01.00pm</span></div>
                      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                          Ipsum has been standard.</p>
                  </div>
                  <div class="ticket-button-box mt-20">
                      <a href="#" class="btn ticket-btn">Buy Ticket</a>
                  </div>
                </div>
              </div>
            </div>
              <div class="col-lg-4 col-md-6">
                  <div class="single-event-wrap mt-40">
                      <div class="event-image">
                          <a >
                              <img src={Event3} class="img-fluid" alt="Event Image"/>
                          </a>
                      </div>
                      <div class="event-content">
                          <div class="content-title">
                              <a >
                                  <h4 class="mb-15">Navarathri Celebrations</h4>
                              </a>
                              <div class="event-date"><span>3 Feb 2020 </span> <span>@09.00am to 01.00pm</span></div>
                              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                  Ipsum has been standard.</p>
                          </div>
                          <div class="ticket-button-box mt-20">
                              <a href="#" class="btn ticket-btn">Buy Ticket</a>
                          </div>
                      </div>
                  </div>
              </div>
              <div class="col-lg-4 col-md-6">
                <div class="single-event-wrap mt-40">
                  <div class="event-image">
                    <a >
                      <img src={Event4} class="img-fluid" alt="Event Image"/>
                    </a>
                  </div>
                  <div class="event-content">
                    <div class="content-title">
                      <a >
                          <h4 class="mb-15">Holi Celebration</h4>
                      </a>
                      <div class="event-date"><span>3 Feb 2020 </span> <span>@09.00am to 01.00pm</span></div>
                      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                          Ipsum has been standard.
                      </p>
                    </div>
                    <div class="ticket-button-box mt-20">
                        <a href="#" class="btn ticket-btn">Buy Ticket</a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 col-md-6">
                <div class="single-event-wrap mt-40">
                  <div class="event-image">
                    <a >
                      <img src={Event5} class="img-fluid" alt="Event Image"/>
                    </a>
                  </div>
                    <div class="event-content">
                      <div class="content-title">
                        <a >
                          <h4 class="mb-15">Vijaya Dasami</h4>
                        </a>
                        <div class="event-date"><span>3 Feb 2020 </span> <span>@09.00am to 01.00pm</span></div>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Ipsum has been standard.
                        </p>
                      </div>
                      <div class="ticket-button-box mt-20">
                        <a href="#" class="btn ticket-btn">Buy Ticket</a>
                      </div>
                    </div>
                </div>
              </div>
              <div class="col-lg-4 col-md-6">
                <div class="single-event-wrap mt-40">
                  <div class="event-image">
                    <a >
                      <img src={Event6} class="img-fluid" alt="Event Image"/>
                    </a>
                  </div>
                  <div class="event-content">
                    <div class="content-title">
                      <a >
                          <h4 class="mb-15">Diwali</h4>
                      </a>
                      <div class="event-date"><span>3 Feb 2020 </span> <span>@09.00am to 01.00pm</span></div>
                      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                          Ipsum has been standard.</p>
                    </div>
                    <div class="ticket-button-box mt-20">
                        <a href="#" class="btn ticket-btn">Buy Ticket</a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 col-md-6">
                <div class="single-event-wrap mt-40">
                  <div class="event-image">
                    <a >
                      <img src={Event7} class="img-fluid" alt="Event Image"/>
                    </a>
                  </div>
                  <div class="event-content">
                    <div class="content-title">
                      <a>
                          <h4 class="mb-15">Ensure child safety & health</h4>
                      </a>
                      <div class="event-date"><span>3 Feb 2020 </span> <span>@09.00am to 01.00pm</span></div>
                      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                          Ipsum has been standard.</p>
                    </div>
                    <div class="ticket-button-box mt-20">
                        <a href="#" class="btn ticket-btn">Buy Ticket</a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 col-md-6">
                <div class="single-event-wrap mt-40">
                  <div class="event-image">
                    <a >
                        <img src={Event8} class="img-fluid" alt="Event Image"/>
                    </a>
                  </div>
                  <div class="event-content">
                    <div class="content-title">
                      <a >
                        <h4 class="mb-15">Ensure child safety & health</h4>
                      </a>
                      <div class="event-date"><span>3 Feb 2020 </span> <span>@09.00am to 01.00pm</span></div>
                      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                          Ipsum has been standard.</p>
                    </div>
                    <div class="ticket-button-box mt-20">
                        <a href="#" class="btn ticket-btn">Buy Ticket</a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 col-md-6">
                <div class="single-event-wrap mt-40">
                  <div class="event-image">
                    <a >
                        <img src={Event9} class="img-fluid" alt="Event Image"/>
                    </a>
                  </div>
                  <div class="event-content">
                    <div class="content-title">
                        <a >
                            <h4 class="mb-15">Ensure child safety & health</h4>
                        </a>
                        <div class="event-date"><span>3 Feb 2020 </span> <span>@09.00am to 01.00pm</span></div>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Ipsum has been standard.</p>
                    </div>
                    <div class="ticket-button-box mt-20">
                        <a href="#" class="btn ticket-btn">Buy Ticket</a>
                    </div>
                  </div>
                </div>
              </div>
          </div>
        </div>
      </div>
    </div>      
    </div>
  )
}
