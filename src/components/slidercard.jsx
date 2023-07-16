import React from 'react'
import Card from './card'

export default function Slidercard() {
  return (
    <>

      <div id="carouselExampleControls" className="carousel carousel-dark slide mt-5 mb-5 " data-bs-ride="carousel">
        <div className="carousel-inner" style={{paddingTop: '52px', paddingBottom: '52px'}}>

          <div className="carousel-item active">
            <div className="card-wrapper container-sm d-flex justify-content-around w-50" style={{translate: '-95px'}}>
              <Card img="https://source.unsplash.com/collection/190727/900x1100?game"/>
              <Card img="https://source.unsplash.com/collection/190727/900x1100?product"/>
              <Card img="https://source.unsplash.com/collection/190727/900x1100?vidoe game"/>
              <Card img="https://source.unsplash.com/collection/190727/900x1100?laptop"/>
              <Card img="https://source.unsplash.com/collection/190727/900x1100?codeing"/>
              <Card img="https://source.unsplash.com/collection/190727/900x1100?game"/>
              <Card img="https://source.unsplash.com/collection/190727/900x1100?game"/>
              <Card img="https://source.unsplash.com/collection/190727/900x1100?game"/>
              <Card img="https://source.unsplash.com/collection/190727/900x1100?game"/>

            </div>
          </div>

          <div className="carousel-item">
            <div className="card-wrapper container-sm d-flex justify-content-around w-50" style={{translate: '-95px'}}>
              <Card img="https://source.unsplash.com/collection/190727/900x1100?game"/>
              <Card img="https://source.unsplash.com/collection/190727/900x1100?product"/>
              <Card img="https://source.unsplash.com/collection/190727/900x1100?vidoe game"/>
              <Card img="https://source.unsplash.com/collection/190727/900x1100?laptop"/>
              <Card img="https://source.unsplash.com/collection/190727/900x1100?codeing"/>
              <Card img="https://source.unsplash.com/collection/190727/900x1100?game"/>
              <Card img="https://source.unsplash.com/collection/190727/900x1100?game"/>
              <Card img="https://source.unsplash.com/collection/190727/900x1100?game"/>
              <Card img="https://source.unsplash.com/collection/190727/900x1100?game"/>
            </div>
          </div>

          <div className="carousel-item">
            <div className="card-wrapper container-sm d-flex justify-content-around w-50" style={{translate: '-95px'}}>
              <Card img="https://source.unsplash.com/collection/190727/900x1100?game"/>
              <Card img="https://source.unsplash.com/collection/190727/900x1100?product"/>
              <Card img="https://source.unsplash.com/collection/190727/900x1100?vidoe game"/>
              <Card img="https://source.unsplash.com/collection/190727/900x1100?laptop"/>
              <Card img="https://source.unsplash.com/collection/190727/900x1100?codeing"/>
              <Card img="https://source.unsplash.com/collection/190727/900x1100?game"/>
              <Card img="https://source.unsplash.com/collection/190727/900x1100?game"/>
              <Card img="https://source.unsplash.com/collection/190727/900x1100?game"/>
              <Card img="https://source.unsplash.com/collection/190727/900x1100?game"/>
            </div>
          </div>

          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls"
            data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>

          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls"
            data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </>

  )
}
