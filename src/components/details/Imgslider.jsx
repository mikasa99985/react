import React from 'react'
import icon from '../../assets/right-arrow.png'

const Imgslider = (props) => {
  // console.log(props.element);
  return (
    <>
      <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators details-indicators">
          {
            props.element.map((element, index) => {
              if (index == 0) {
                return (<img key={index} src={element} data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="details-img-slider-indi active" aria-current="true" aria-label="Slide 1"></img>)
              } else {
                return (<img key={index} src={element} data-bs-target="#carouselExampleIndicators" data-bs-slide-to={index} className='details-img-slider-indi' aria-label={`Slide ${index + 1}`}></img>)
              }
            })
          }
          {/* 
          <img src="https://assets-prd.ignimgs.com/2022/09/23/top25modernpcgames-blogroll-1663951042311.jpg" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="details-img-slider-indi active" aria-current="true" aria-label="Slide 1"></img>
          <img src="https://www.androidguys.com/wp-content/uploads/2016/02/vzRN4in.jpg" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" className='details-img-slider-indi' aria-label="Slide 2"></img>
          <img src="https://www.wallpapertip.com/wmimgs/173-1736452_wallpaper-51g293s-4k-wallpaper-samurai.jpg" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" className='details-img-slider-indi' aria-label="Slide 3"></img> 
          */}
        </div>
        <div className="carousel-inner">

          {
            props.element.map((element, index) => {
              if (index == 0) {
                return (
                  <div key={index} className="carousel-item active">
                    <img src={element} className="d-block w-100 img-slider" alt="..." />
                  </div>
                )
              } else {
                return (
                  <div key={index} className="carousel-item">
                    <img src={element} className="d-block w-100 img-slider" alt="..." />
                  </div>
                )
              }
            })
          }

          {/* <div className="carousel-item active">
            <img src="https://assets-prd.ignimgs.com/2022/09/23/top25modernpcgames-blogroll-1663951042311.jpg" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="https://www.androidguys.com/wp-content/uploads/2016/02/vzRN4in.jpg" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="https://www.wallpapertip.com/wmimgs/173-1736452_wallpaper-51g293s-4k-wallpaper-samurai.jpg" className="d-block w-100" alt="..." />
          </div> */}

        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          {/* <span className="carousel-control-prev-icon" aria-hidden="true"></span> */}
          <img src={icon} style={{ rotate: "180deg" }} width={40} alt="btn" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          {/* <span className="carousel-control-next-icon" aria-hidden="true"></span> */}
          <img src={icon} style={{ rotate: "0deg" }} width={40} alt="btn" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  )
}

export default Imgslider
