import React, { useEffect } from 'react'
import { database, db } from '../../firebase.config';
import Slidercard from '../components/slidercard';
import Card from '../components/card';
import Nav from '../components/nav';


const Home = () => {

  return (
    <>
    
      <Nav/>
      <Slidercard/> 
      <div className="container mt-4">
        <h1>Test text</h1>
        <button className='btn btn-success'>Add datas</button>
      </div>
    </>
  )
}

export default Home