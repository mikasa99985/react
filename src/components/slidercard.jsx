import React from 'react'
import Card from './card'
import icon from '../assets/right-arrow.png'
import '../utility/css/cardStyle.css'
import '../utility/css/btn_glow.css'
import { useState } from 'react';
import { useEffectOnce, capitalize } from '../utility/js/util';
import { auth, database, db } from '../../firebase.config';
import { useEffect } from 'react'

export default function Slidercard() {

  // const [isHovering, setIsHovering] = useState(false);
  // const handleMouseEnter = () => {
  //   setIsHovering(true);
  // };

  // const handleMouseLeave = () => {
  //   setIsHovering(false);
  // };


  // const [isHoveringongames , mouseishovering] = useState() ;
  // const mouseenter = () => {
  //   mouseishovering(true) ;
  // };

  // const mousequit = () => {
  //   mouseishovering(false);
  // };

  const [list1, setList1] = useState([]);
  const [list2, setList2] = useState([]);
  const [list3, setList3] = useState([]);
  useEffect(() => {
    let arr1 = [];
    let arr2 = [];
    let arr3 = [];

    db.collection("game_collection")
      .orderBy('type')
      .startAt('')
      .endAt('competitive' + '~')
      .limit(9)
      .get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          // doc.data() is never undefined for query doc snapshots
          // console.log(doc.id, " => ", doc.data());
          arr1.push(doc.data());
        });
      }).then(() => {
        setList1(arr1);
      }).catch((error) => {
        console.log("Error ");
      });

    db.collection("game_collection")
      .orderBy('type')
      .startAt('fps')
      .endAt('' + '~')
      .limit(9)
      .get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          // doc.data() is never undefined for query doc snapshots
          // console.log(doc.id, " => ", doc.data());
          arr2.push(doc.data());
        });
      }).then(() => {
        setList2(arr2);
      }).catch((error) => {
        console.log("Error ");
      });

    db.collection("game_collection")
      .orderBy('type')
      .startAt('action')
      .endAt('action' + '~')
      .limit(9)
      .get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          // doc.data() is never undefined for query doc snapshots
          // console.log(doc.id, " => ", doc.data());
          arr3.push(doc.data());
        });
      }).then(() => {
        setList3(arr3);
      }).catch((error) => {
        console.log("Error ");
      });

  }, []);

  return (
    <>
      <div className="d-flex justify-content-center mt-5">
        <h1 className='fw-bolder'>EXPLORE MORE GAMES</h1>
      </div>

      <div id="carouselExampleControls" className="carousel carousel-dark slide" data-bs-ride="carousel">
        <div className="carousel-inner" style={{ paddingTop: '52px', paddingBottom: '52px' }}>

          <div className="carousel-item active">
            <div className="card-wrapper container-sm d-flex justify-content-around w-50" style={{ translate: '-95px' }}>
              {
                list1.map((element, index) => {
                  return (
                    <Card
                      key={'List1'+index}
                      img={element.img}
                      gameTitle={element.name.slice(0, 10)+'...'}
                      gameType={element.type.slice(0, 10)+'...'}
                    />
                  )
                })
              }
            </div>
          </div>

          <div className="carousel-item">
            <div className="card-wrapper container-sm d-flex justify-content-around w-50" style={{ translate: '-95px' }}>
              {
                list2.map((element, index) => {
                  return (
                    <Card
                      key={'List2'+index}
                      img={element.img}
                      gameTitle={element.name.slice(0, 10)+'...'}
                      gameType={element.type.slice(0, 10)+'...'}
                    />
                  )
                })
              }
            </div>
          </div>

          <div className="carousel-item">
            <div className="card-wrapper container-sm d-flex justify-content-around w-50" style={{ translate: '-95px' }}>
              {
                list3.map((element, index) => {
                  return (
                    <Card
                      key={'List3'+index}
                      img={element.img}
                      gameTitle={element.name.slice(0, 10)+'...'}
                      gameType={element.type.slice(0, 10)+'...'}
                    />
                  )
                })
              }
            </div>
          </div>

          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls"
            data-bs-slide="prev">
            {/* <span className="carousel-control-prev-icon" aria-hidden="true"></span> */}
            <img src={icon} className='img-btn-left' width={40} alt="btn" />
            <span className="visually-hidden">Previous</span>
          </button>

          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls"
            data-bs-slide="next">
            {/* <span className="carousel-control-next-icon" aria-hidden="true"></span> */}
            <img src={icon} className='img-btn-right' width={40} alt="btn" />
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>

      <div className="d-flex justify-content-center mb-5" >
        <button className="btn-cus btn-radius btn-blue-glow" >VIEW ALL GAMES</button>
        {/* <button className="btn-cus btn-pink-glow">VIEW ALL GAMES</button> */}
      </div>
    </>

  )
}
