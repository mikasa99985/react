import React, { useEffect, useState } from 'react'
import '../utility/css/ourteam.css'
import { db } from '../../firebase.config';
import {Link} from 'react-router-dom'

const Ourteam = () => {

  const [arrData, setArr] = useState([]);
  useEffect(() => {
    let arr = [];
    db.collection("teams").get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        arr.push(doc.data())
      });
    }).then(() => {
      setArr(arr);
    }).catch((error) => {
      console.log("Error getting documents: ", error);
    });
  }, []);

  return (
    <>

      <section className="text-gray-600 body-font">
        <div className="container px-lg-5 py-lg-24 mx-auto">
          <div className="flex flex-column text-center w-full mb-20">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Our Team</h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
              gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them.</p>
          </div>
          <div className="row">
            {
              arrData.map((element, index) => {
                return (
                  <Link to='/ourteam' key={index} className="col-lg-3 col-md-6 mb-4 our-link">
                    <div className="h-full flex align-content-center border border-gray-200 p-3 rounded-lg">
                      <img alt="team" style={{ width: '65px', height: '65px' }} className="bg-gray-100 object-cover object-center flex-shrink-0 mr-4 rounded-full" src={element.img}></img>
                      <div className="flex flex-column justify-content-center ms-3">
                        <h6 className="text-gray-900 mb-1 title-font font-medium">{element.name}</h6>
                        <p className="text-gray-500 mb-0">{element.work}</p>
                      </div>
                    </div>
                  </Link>
                )
              })
            }
          </div>
        </div>
      </section>
    </>
  )
}

export default Ourteam;
