import React from "react";

import Pano from "./Pano";

function HeroX(){
  return  <section id="hero" className="hero" >

    <div className="info d-flex align-items-center">
      <div className="container" >
        <div className="row justify-content-center">
          <div className="col-lg-6 text-center">
            <h2 data-aos="fade-down">Welcome to <span>getXsetR</span></h2>
            <p data-aos="fade-up">Let's make XR & AI work for you  </p>
            <a data-aos="fade-up" data-aos-delay="200" href="#get-started" className="primary-btn btn-get-started">Get Started</a>
          </div>
        </div>
      </div>
    </div>



<div id="carouselExampleCaptions" className="carousel slide carousel-fade" data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
    <Pano 
        name="/image/potw2137a.jpg"
      />
     
    </div>
    <div className="carousel-item">
    <Pano 
        name="/image/back1.jpg"
      />
     
    </div>
    <div className="carousel-item">
    <Pano 
        name="/image/file_2.jpg"
      />
      
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span className="primary-btn p-2" aria-hidden="true"> <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32"  className="bi bi-chevron-bar-left" viewBox="0 0 16 16">
  <path fillRule="evenodd" d="M11.854 3.646a.5.5 0 0 1 0 .708L8.207 8l3.647 3.646a.5.5 0 0 1-.708.708l-4-4a.5.5 0 0 1 0-.708l4-4a.5.5 0 0 1 .708 0zM4.5 1a.5.5 0 0 0-.5.5v13a.5.5 0 0 0 1 0v-13a.5.5 0 0 0-.5-.5z"/>
</svg> </span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span className="primary-btn p-2" aria-hidden="true"> <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32"  className="bi bi-chevron-bar-right" viewBox="0 0 16 16">
  <path fillRule="evenodd" d="M4.146 3.646a.5.5 0 0 0 0 .708L7.793 8l-3.647 3.646a.5.5 0 0 0 .708.708l4-4a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708 0zM11.5 1a.5.5 0 0 1 .5.5v13a.5.5 0 0 1-1 0v-13a.5.5 0 0 1 .5-.5z"/>
</svg></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
<div className="carousel-overlay"></div>
  </section>

}

export default HeroX;
{/*
<button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="primary-btn p-2" aria-hidden="true" > <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi bi-chevron-bar-left" viewBox="0 0 16 16">
  <path fillRule="evenodd" d="M11.854 3.646a.5.5 0 0 1 0 .708L8.207 8l3.647 3.646a.5.5 0 0 1-.708.708l-4-4a.5.5 0 0 1 0-.708l4-4a.5.5 0 0 1 .708 0zM4.5 1a.5.5 0 0 0-.5.5v13a.5.5 0 0 0 1 0v-13a.5.5 0 0 0-.5-.5z"/>
</svg> </span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className=" primary-btn p-2" aria-hidden="true" > <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi bi-chevron-bar-right" viewBox="0 0 16 16">
  <path fillRule="evenodd" d="M4.146 3.646a.5.5 0 0 0 0 .708L7.793 8l-3.647 3.646a.5.5 0 0 0 .708.708l4-4a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708 0zM11.5 1a.5.5 0 0 1 .5.5v13a.5.5 0 0 1-1 0v-13a.5.5 0 0 1 .5-.5z"/>
</svg></span>
    <span className="visually-hidden">Next</span>
  </button>
  */}