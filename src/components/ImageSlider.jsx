import React from 'react'
import icon from '../assets/right-arrow.png'
import Slidercard from './imgslider/Slidercard'
export const ImageSlider = () => {
  return (

    <>
      <div id="carouselExampleCaptions" className="carousel slide carousel-fade" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <img src="https://wallpaperaccess.com/full/459704.jpg" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="img-slider-indi active" aria-current="true" aria-label="Slide 1"></img>
          <img src="https://static1.thegamerimages.com/wordpress/wp-content/uploads/2022/07/Spider-Man-Remastered-PC.jpg" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" className='img-slider-indi' aria-label="Slide 2"></img>
          <img src="https://wallpapercave.com/wp/wp9351526.jpg" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" className='img-slider-indi' aria-label="Slide 3"></img>
          <img src="https://images7.alphacoders.com/128/1281832.jpg" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" className='img-slider-indi' aria-label="Slide 4"></img>
        </div>
        <div className="carousel-inner">

          <Slidercard active='active' img='https://wallpaperaccess.com/full/459704.jpg'>
            <div className="s-text">
              <h1>JOIN THE CLOSED BETA!</h1>
              <h5>Enter the perilous paradise of Skull and Bones during the Closed Beta running from August 25th to August 28th</h5>
            </div>
            <div className="s-button mt-2 mt-sm-3 mt-lg-5">
              <button className="btn-cus btn-radius btn-blue-glow s-btn-cus me-md-5 mb-1 mb-sm-4 mb-md-0" >VISIT WEBSITE</button>
              <button className="btn-cus btn-radius btn-blue-glow s-btn-cus" >BUY NOW</button>
            </div>
          </Slidercard>

          <Slidercard active='' img='https://static1.thegamerimages.com/wordpress/wp-content/uploads/2022/07/Spider-Man-Remastered-PC.jpg'>
            <div className="s-text">
              <h1>OPERATION HEAVY METTLE</h1>
              <h5>Our newest Attacker, Ram, comes to us from South Korea and is ready to join the ranks of Redhammer.</h5>
            </div>
            <div className="s-button mt-2 mt-sm-3 mt-lg-5">
              <button className="btn-cus btn-radius btn-blue-glow s-btn-cus me-md-5 mb-1 mb-sm-4 mb-md-0" >VISIT WEBSITE</button>
              <button className="btn-cus btn-radius btn-blue-glow s-btn-cus" >BUY NOW</button>
            </div>
          </Slidercard>
  
          <Slidercard active='' img='https://wallpapercave.com/wp/wp9351526.jpg'>
            <div className="s-text">
              <h1>AUTUMN SALE - UP TO 75% OFF!</h1>
              <h5>Embark on the gaming season ahead.</h5>
            </div>
            <div className="s-button mt-2 mt-sm-3 mt-lg-5">
              <button className="btn-cus btn-radius btn-blue-glow s-btn-cus me-md-5 mb-1 mb-sm-4 mb-md-0" >VISIT WEBSITE</button>
              <button className="btn-cus btn-radius btn-blue-glow s-btn-cus" >BUY NOW</button>
            </div>
          </Slidercard>

          <Slidercard active='' img='https://images7.alphacoders.com/128/1281832.jpg'>
            <div className="s-text">
              <h1>AUTUMN SALE - UP TO 75% OFF!</h1>
              <h5>Embark on the gaming season ahead.</h5>
            </div>
            <div className="s-button mt-2 mt-sm-3 mt-lg-5">
              <button className="btn-cus btn-radius btn-blue-glow s-btn-cus me-md-5 mb-1 mb-sm-4 mb-md-0" >VISIT WEBSITE</button>
              <button className="btn-cus btn-radius btn-blue-glow s-btn-cus" >BUY NOW</button>
            </div>
          </Slidercard>

        </div>
        <button className="carousel-control-prev" style={{ top: 'unset', bottom: '80px', zIndex: '10' }} type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          {/* <span className="carousel-control-prev-icon" aria-hidden="true"></span> */}
          <img src={icon} style={{ rotate: "180deg" }} width={40} alt="btn" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" style={{ top: 'unset', bottom: '80px', zIndex: '10' }} type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          {/* <span className="carousel-control-next-icon" aria-hidden="true"></span> */}
          <img src={icon} style={{ rotate: "0deg" }} width={40} alt="btn" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>

    </>
  )
}
