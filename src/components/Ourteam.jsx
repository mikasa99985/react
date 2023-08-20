import React, { useEffect, useState } from 'react'
import '../utility/css/ourteam.css'
import { db } from '../../firebase.config';

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

      <section class="text-gray-600 body-font">
        <div class="container px-lg-5 py-lg-24 mx-auto">
          <div class="flex flex-column text-center w-full mb-20">
            <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Our Team</h1>
            <p class="lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
              gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them.</p>
          </div>
          <div class="row">
            {
              arrData.map((element, index) => {
                return (
                  <div key={index} class="col-lg-3 col-md-6  mb-4">
                    <div class="h-full flex align-content-center border border-gray-200 p-3 rounded-lg">
                      <img alt="team" style={{ width: '65px', height: '65px' }} class="bg-gray-100 object-cover object-center flex-shrink-0 mr-4 rounded-full" src={element.img}></img>
                      <div class="flex flex-column justify-content-center ms-3">
                        <h6 class="text-gray-900 mb-1 title-font font-medium">{element.name}</h6>
                        <p class="text-gray-500 mb-0">{element.work}</p>
                      </div>
                    </div>
                  </div>
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
