import React from 'react'

const Specification = (props) => {
  return (
    <>
      <h3>Specification</h3>
      <div className="row m-3">
        <div className="col-md-6">
          <h5>Minimum Requirements</h5>
          <div className="row">
            <div className="col-12 ">
              <span style={{ color: 'red' }}>OS:</span><br/><div className="mx-3">{props.spec.minimum.os}</div></div>
          </div>
          <div className="row">
            <div className="col-12">
              <span style={{ color: 'red' }}>CPU:</span><br /><div className="mx-3">{props.spec.minimum.processor}</div></div>
          </div>
          <div className="row">
            <div className="col-12">
              <span style={{ color: 'red' }}>GPU:</span><br /><div className="mx-3">{props.spec.minimum.graphics}</div></div>
          </div>
          <div className="row">
            <div className="col-12">
              <span style={{ color: 'red' }}> Memory:</span><br /><div className="mx-3">{props.spec.minimum.memory}</div></div>
          </div>
        </div>

        <div className="col-md-6 ">
          <h5>Recommended</h5>
          <div className="row">
            <div className="col-12 ">
              <span style={{ color: 'red' }}>OS:</span><br/><div className="mx-3">{props.spec.recommended.os}</div></div>
          </div>
          <div className="row">
            <div className="col-12">
              <span style={{ color: 'red' }}>CPU:</span><br /><div className="mx-3">{props.spec.recommended.processor}</div></div>
          </div>
          <div className="row">
            <div className="col-12">
              <span style={{ color: 'red' }}>GPU:</span><br /><div className="mx-3">{props.spec.recommended.graphics}</div></div>
          </div>
          <div className="row">
            <div className="col-12">
              <span style={{ color: 'red' }}> Memory:</span><br /><div className="mx-3">{props.spec.recommended.memory}</div></div>
          </div>
        </div>
      </div>



    </>
  )
}

export default Specification
