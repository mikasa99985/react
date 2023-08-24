import React, { useEffect, useState } from 'react'
import { db, database, auth } from '../../firebase.config'
import { useParams } from 'react-router-dom'
import { urlDecode } from '../utility/js/util'

const Details = () => {
  const params = useParams();

  const [data, setData] = useState(false);
  const [slider_img, setImg] = useState([]);
  const [isLogin, setLogin] = useState(false);
  const [rateing, setRate] = useState({
    rate: '0',
    comment: ''
  });

  let name, value;
  const getData = (even) => {
    name = even.target.name
    value = even.target.value

    setRate({ ...rateing, [name]: value })
  }

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
      } else {
        console.log('No data found');
      }
    }).catch((error) => {
      console.log("Error getting documents: ", error);
    });

    auth.onAuthStateChanged((user) => {
      if (user) {
        setLogin(true);
      } else {
        setLogin(false);
      }
    });

  }, [])

  function submit(e) {
    e.preventDefault();
    console.log(auth.currentUser.uid,data.id, isLogin);

    if (isLogin) {
      database.ref(`game_collection/${data.id}/ratings/${auth.currentUser.uid}`).set(rateing).then(() => {
        console.log("done");
      });
    } else {
      console.log('You are not login');
    }


  }

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

      <div className="container w-75">
        <form className='my-5' onSubmit={submit}>

          <div className="mb-3">
            <label htmlFor="rate" className="form-label">Rate us {rateing.rate}</label>
            <input type="range" className="form-range" min="0" max="5" id="rate" name='rate' value={rateing.rate} onChange={getData} />
          </div>

          <div className="mb-3">
            <label htmlFor="comment" className="form-label">Comment</label>
            <textarea className="form-control" id="comment" name='comment' value={rateing.desc} onChange={getData} rows="4"></textarea>
          </div>

          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>

    </>
  )
}

export default Details
