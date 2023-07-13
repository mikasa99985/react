import React, { useEffect } from 'react'
import { database, db } from '../../firebase.config';

const Home = () => {

  return (
    <>
      <div className="container mt-4">
        <h1>Test text</h1>
        <button onClick={addData} className='btn btn-success'>Add data</button>
      </div>
    </>
  )
}

export default Home
