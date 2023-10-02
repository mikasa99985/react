import React from 'react'

const Imgslider = () => {
  return (
    <>
      {/* Create image slider here */}
      <h4>components/details/Imgslider.jsx</h4>  {/* <--- replace this code */}
      
      <div id="carouselExampleIndicators" className="carousel slide">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="https://assets-prd.ignimgs.com/2022/09/23/top25modernpcgames-blogroll-1663951042311.jpg" className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://www.androidguys.com/wp-content/uploads/2016/02/vzRN4in.jpg" className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://www.wallpapertip.com/wmimgs/173-1736452_wallpaper-51g293s-4k-wallpaper-samurai.jpg" className="d-block w-100" alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
    </>
  )
}

export default Imgslider
