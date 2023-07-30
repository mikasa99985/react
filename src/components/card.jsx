import React from 'react'
import '../utility/css/cardStyle.css'

export default function Card(props) {
  return (
    <>
      <div className="card pop-card" style={{ width: "13rem", cursor: 'pointer' }} >
        <img src={props.img} className="card-img" alt="..." />
        <div className="card-t">
          <h4>{props.gameTitle}</h4>
          <h5 className='mb-3'>{props.gameType}</h5>
        </div>
      </div>
    </>
  )
}
