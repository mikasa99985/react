import React, { useEffect } from 'react'
import { database, db } from '../../firebase.config';
import Slidercard from '../components/slidercard';
import Card from '../components/card';
const Home = () => {

  return (
    <>
    
      <Slidercard/>
      <Card/>
    </>
  )
}

export default Home
