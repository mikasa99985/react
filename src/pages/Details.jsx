import React, { useEffect, useState } from 'react'
import { db, database } from '../../firebase.config'
import { useParams } from 'react-router-dom'
import { urlDecode } from '../utility/js/util'

const Details = () => {
  const params = useParams();

  const [data, setData] = useState(false);
  const [slider_img, setImg] = useState([]);

  useEffect(() => {

    let query = db.collection("game_collection").where("name", "==", urlDecode(params.name)).limit(1);

    query.get().then((querySnapshot) => {
      if (!querySnapshot.empty) {
        querySnapshot.forEach((doc) => {
          setData({ id: doc.id, data: doc.data() });
          let arr = [];
          database.ref(`game_collection/${doc.id}/img`).once('value', (snapshot) => {
            snapshot.forEach(element => {
              arr.push(element.val());
            });
          }).then(() => {
            setImg(arr);
          });
  
        });
      }else{
        console.log('No data found');
      }
    }).catch((error) => {
      console.log("Error getting documents: ", error);
    });

  }, [])
  return (
    <>
      {/* do not delete this */}
      {
        data ?
          <>
            <h5 className='m-2'>{data.id}</h5>
            <h1 className='m-2'>{data.data.name}</h1>
            <img className='m-2' src={data.data.img} width={300} alt="" />
            <div className="d-flex flex-wrap">
              {
                slider_img.map((element, index) => {
                  return (<img key={index} className='m-2' src={element} width={300} alt="" />)
                })
              }
            </div>
            <p className='m-2'>{data.data.desc.slice(0, 1500)}</p>
          </>
          :
          <></>
      }

    </>
  )
}

export default Details
