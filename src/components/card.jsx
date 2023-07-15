import React from 'react'

export default function Card(props) {
  return (
    <>
      <div className="card" style={{ width: "18rem" }} >
        <img src={props.img} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">This title</h5>
          <h5 className="card-title">sub title</h5>
        </div>
      </div>
    </>
  )
}
