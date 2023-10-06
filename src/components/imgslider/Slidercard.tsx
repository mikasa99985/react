import React, { ReactNode } from 'react'

interface Props {
  children: ReactNode;
  img: string;
  active: string;
}

const Slidercard = (props: Props) => {
  return (
    <>
      <div className={`carousel-item d-flex justify-content-center ${props.active}`}>
        <img src={`${props.img}`} className="d-block slider-img-size" alt="..." />
        <div className="img-slider-text-container">
          <div className="img-slider-text">
            {props.children}
          </div>
        </div>
      </div>
    </>
  )
}

export default Slidercard
