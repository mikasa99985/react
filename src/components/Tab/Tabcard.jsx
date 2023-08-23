import React, { useEffect, useState } from 'react';
import Card from './card';
import { db } from '../../../firebase.config';

export default function Tabcard(props) {

  let demo = [1, 2, 3, 4, 5, 6];
  const [list, setList] = useState([]);

  useEffect(() => {
    let arr = []
    if (!props.placeholder) {
      db.collection("game_collection")
        .orderBy('type')
        .startAt(props.type)
        .endAt(props.type + '~')
        .limit(6)
        .get().then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            arr.push(doc.data())
          });
        }).then(() => {
          // console.log(arr);
          setList(arr);
        }).catch((error) => {
          console.log("Error ");
        });
    }

  }, []);

  return (
    <>
      <div className="mx-auto mt-5 mb-4 w-75">
        <div className="row mb-2">

          {
            props.placeholder ?
              demo.map(element => {
                return (
                  <Card key={element} placeholder={true} />
                )
              })
              :
              list.length == 0 ?
                demo.map(element => {
                  return (
                    <Card key={element} placeholder={true} />
                  )
                })
                :
                list.map((element, index) => {
                  return (
                    <Card
                      key={index}
                      img={element.img}
                      time={element.time}
                      name={element.name}
                      desc={element.desc.slice(0, 80) + '...'}
                    />
                  )
                })
          }


        </div>
      </div>
    </>
  );
}
