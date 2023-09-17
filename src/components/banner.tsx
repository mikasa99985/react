import React, { ReactNode } from 'react'
import '../utility/css/bg.css';

interface Props {
  children: ReactNode;
  img: string;
  height: string;
}

const Banner = (props: Props) => {
  return (
    <>
      <div className=" d-flex justify-content-center align-items-center cus-bg mb-5" style={{ height: `${props.height}`, backgroundImage: `url("${props.img}")` }}>
        <div className="h-100 w-100" style={{ background: 'black', opacity: '50%' }}>
        </div>
        <div className="text-center text-light position-absolute">
            {props.children}
        </div>
      </div>
    </>
  )
}

export default Banner
