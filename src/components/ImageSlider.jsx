import React from 'react'
import icon from '../assets/right-arrow.png'
export const ImageSlider = () => {
  return (

<>
  <div id="carouselExampleCaptions" class="carousel slide carousel-fade" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <img src="https://cdn.sanity.io/images/6znhzi10/production/e58fe693e62a07c633b48885817b374c1e047078-2400x1350.jpg?w=1600" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="img-slider-indi active" aria-current="true" aria-label="Slide 1"></img>
    <img src="https://static1.thegamerimages.com/wordpress/wp-content/uploads/2022/07/Spider-Man-Remastered-PC.jpg" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" className='img-slider-indi' aria-label="Slide 2"></img>
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrg85UaJB1LbsSBZW4mOGAB7k1mZUA21UwBg&usqp=CAU" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" className='img-slider-indi' aria-label="Slide 3"></img>
  </div>
  <div class="carousel-inner">

    <div class="carousel-item d-flex justify-content-center active">
      <img src="https://cdn.sanity.io/images/6znhzi10/production/e58fe693e62a07c633b48885817b374c1e047078-2400x1350.jpg?w=1600" class="d-block slider-img-size" alt="..."/>
      
      <div class="img-slider-text-container">
        <div className="img-slider-text">
          <div className="s-text">
            <h1>JOIN THE CLOSED BETA!</h1>
            <h5>Enter the perilous paradise of Skull and Bones during the Closed Beta running from August 25th to August 28th</h5>
          </div>
          <div className="s-button mt-2 mt-sm-3 mt-lg-5">
            <button className="btn-cus btn-radius btn-blue-glow s-btn-cus me-md-5 mb-1 mb-sm-4 mb-md-0" >VISIT WEBSITE</button>
            <button className="btn-cus btn-radius btn-blue-glow s-btn-cus" >BUY NOW</button>
          </div>
        </div>
      </div>

    </div>

    <div class="carousel-item d-flex justify-content-center">
      <img src="https://static1.thegamerimages.com/wordpress/wp-content/uploads/2022/07/Spider-Man-Remastered-PC.jpg" class="d-block slider-img-size" alt="..."/>
      
      <div class="img-slider-text-container">
        <div className="img-slider-text">
          <div className="s-text">
            <h1>OPERATION HEAVY METTLE</h1>
            <h5>Our newest Attacker, Ram, comes to us from South Korea and is ready to join the ranks of Redhammer.</h5>
          </div>
          <div className="s-button mt-2 mt-sm-3 mt-lg-5">
            <button className="btn-cus btn-radius btn-blue-glow s-btn-cus me-md-5 mb-1 mb-sm-4 mb-md-0" >VISIT WEBSITE</button>
            <button className="btn-cus btn-radius btn-blue-glow s-btn-cus" >BUY NOW</button>
          </div>
        </div>
      </div>

    </div>

    <div class="carousel-item d-flex justify-content-center">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrg85UaJB1LbsSBZW4mOGAB7k1mZUA21UwBg&usqp=CAU" class="d-block slider-img-size" alt="..."/>
      
      <div class="img-slider-text-container">
        <div className="img-slider-text">
          <div className="s-text">
            <h1>AUTUMN SALE - UP TO 75% OFF!</h1>
            <h5>Embark on the gaming season ahead.</h5>
          </div>
          <div className="s-button mt-2 mt-sm-3 mt-lg-5">
            <button className="btn-cus btn-radius btn-blue-glow s-btn-cus me-md-5 mb-1 mb-sm-4 mb-md-0" >VISIT WEBSITE</button>
            <button className="btn-cus btn-radius btn-blue-glow s-btn-cus" >BUY NOW</button>
          </div>
        </div>
      </div>

    </div>
    

  </div>
  <button class="carousel-control-prev" style={{top:'unset',bottom:'80px'}} type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    {/* <span class="carousel-control-prev-icon" aria-hidden="true"></span> */}
    <img src={icon} style={{rotate: "180deg"}} width={40} alt="btn" />
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" style={{top:'unset',bottom:'80px'}} type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    {/* <span class="carousel-control-next-icon" aria-hidden="true"></span> */}
    <img src={icon} style={{rotate: "0deg"}} width={40} alt="btn" />
    <span class="visually-hidden">Next</span>
  </button>
</div>

    </>
  )
}
