import React from 'react'
import Card from './card'
import icon from '../assets/right-arrow.png'
import '../utility/css/cardStyle.css'
import '../utility/css/btn_glow.css'
import { useState } from 'react' ;

export default function Slidercard() {
  const [isHovering, setIsHovering] = useState(false);
  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  return (
    <>

      <div className="d-flex justify-content-center mt-5">
        <h1 className='fw-bolder' style={{color:'white', transform:isHovering?'scale(1.2)': 'scale(1)' , transition:isHovering?'0.5s': {transition:'0.5s'} } }  onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}>EXPLORE MORE GAMES</h1>
      </div>

      <div id="carouselExampleControls" className="carousel carousel-dark slide" data-bs-ride="carousel">
        <div className="carousel-inner" style={{ paddingTop: '52px', paddingBottom: '52px' }}>

          <div className="carousel-item active">
            <div className="card-wrapper container-sm d-flex justify-content-around w-50" style={{ translate: '-95px' }}>
              <Card img="https://source.unsplash.com/collection/190727/900x1100?game" />
              <Card img="https://source.unsplash.com/collection/190727/900x1100?product" />
              <Card img="https://source.unsplash.com/collection/190727/900x1100?vidoe game" />
              <Card img="https://source.unsplash.com/collection/190727/900x1100?laptop" />
              <Card img="https://source.unsplash.com/collection/190727/900x1100?codeing" />
              <Card img="https://source.unsplash.com/collection/190727/900x1100?game" />
              <Card img="https://source.unsplash.com/collection/190727/900x1100?game" />
              <Card img="https://source.unsplash.com/collection/190727/900x1100?game" />
              <Card img="https://source.unsplash.com/collection/190727/900x1100?game" />

            </div>
          </div>

          <div className="carousel-item">
            <div className="card-wrapper container-sm d-flex justify-content-around w-50" style={{ translate: '-95px' }}>
              <Card img="https://source.unsplash.com/collection/190727/900x1100?game" />
              <Card img="https://source.unsplash.com/collection/190727/900x1100?product" />
              <Card img="https://source.unsplash.com/collection/190727/900x1100?vidoe game" />
              <Card img="https://source.unsplash.com/collection/190727/900x1100?laptop" />
              <Card img="https://source.unsplash.com/collection/190727/900x1100?codeing" />
              <Card img="https://source.unsplash.com/collection/190727/900x1100?game" />
              <Card img="https://source.unsplash.com/collection/190727/900x1100?game" />
              <Card img="https://source.unsplash.com/collection/190727/900x1100?game" />
              <Card img="https://source.unsplash.com/collection/190727/900x1100?game" />
            </div>
          </div>

          <div className="carousel-item">
            <div className="card-wrapper container-sm d-flex justify-content-around w-50" style={{ translate: '-95px' }}>
              <Card img="https://source.unsplash.com/collection/190727/900x1100?game" />
              <Card img="https://source.unsplash.com/collection/190727/900x1100?product" />
              <Card img="https://source.unsplash.com/collection/190727/900x1100?vidoe game" />
              <Card img="https://source.unsplash.com/collection/190727/900x1100?laptop" />
              <Card img="https://source.unsplash.com/collection/190727/900x1100?codeing" />
              <Card img="https://source.unsplash.com/collection/190727/900x1100?game" />
              <Card img="https://source.unsplash.com/collection/190727/900x1100?game" />
              <Card img="https://source.unsplash.com/collection/190727/900x1100?game" />
              <Card img="https://source.unsplash.com/collection/190727/900x1100?game" />
            </div>
          </div>

          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls"
            data-bs-slide="prev">
            {/* <span className="carousel-control-prev-icon" aria-hidden="true"></span> */}
            <img src={icon} className='img-btn-left' width={40} alt="btn" />
            <span className="visually-hidden">Previous</span>
          </button>

          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls"
            data-bs-slide="next">
            {/* <span className="carousel-control-next-icon" aria-hidden="true"></span> */}
            <img src={icon} className='img-btn-right' width={40} alt="btn" />
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>

      <div className="d-flex justify-content-center mb-5">
        <button class="btn-cus btn-blue-glow">VIEW ALL GAMES</button>
        {/* <button class="btn-cus btn-pink-glow">VIEW ALL GAMES</button> */}
      </div>
    </>

  )
}
