import React, { useEffect, useState } from 'react';
import Card from './card';
import { db } from '../../../firebase.config';

export default function Tabcard(props) {

  const [list, setList] = useState([]);

  useEffect(() => {
    let arr = []
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
  }, []);

  return (
    <>
      <div className="mx-auto mt-5 mb-4 w-100">
        <div className="row mb-2">

          {list.map((element, index) => {
            return (
              <Card
                key={index}
                img={element.img}
                time={element.time}
                name={element.name}
                desc={element.desc.slice(0,80)+'...'}
              />
            )
          })}


        </div>
      </div>
    </>
  );
}
