import React from 'react'
import '../utility/css/cardStyle.css'

export default function Card(props) {
  return (
    <>
      <div className="card" style={{ width: "13rem" }} >
        <img src={props.img} className="card-img" alt="..." />
        <div className="card-t">
          <h4>Game Title</h4>
          <h5 className='mb-3'>Game type</h5>
        </div>
      </div>
    </>
  )
}
