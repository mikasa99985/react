import React, { useEffect, useState } from 'react'
import { db, database, auth } from '../../firebase.config'
import { useParams } from 'react-router-dom'
import { urlDecode } from '../utility/js/util'
import '../utility/css/details.css'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

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
    console.log(auth.currentUser.uid, data.id, isLogin);

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
      {/* {
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
      </div> */}

      <Nav />

      <div className="container my-5">
        <div className="w-100 game-img-slider">
          {/* img Slider */}
          <h4>Img Slider</h4>
        </div>
      </div>

      {/* Game details */}
      <div className="container my-5">
        <div className="game-header">
          <img src="https://emle.org/wp-content/uploads/revslider/news/demo-img-2-3.png" alt="" />
          <div className="game-details">
            <h1>Game Name</h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio ratione iste repellat, tempore quos id facere consectetur, delectus cumque, ut placeat expedita? Tenetur et quia cupiditate, reprehenderit neque possimus porro? Blanditiis officia laborum laboriosam?</p>
          </div>
        </div>
      </div>

      {/* Full description & Buy */}

      <div className="container my-5">
        <div className="game-desc">
          <div className="game-full-desc">
            {/* Game description */}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae dolorem totam perferendis beatae repudiandae nam fuga, mollitia molestias animi ipsam placeat sint quas at quod natus nulla omnis. Ab itaque sapiente inventore dignissimos, obcaecati consequatur dolores recusandae, totam tenetur qui mollitia rerum molestiae. Officiis debitis architecto, autem vitae vero obcaecati earum est aperiam sed rerum adipisci illo magnam placeat laboriosam tempore error soluta fugiat nihil incidunt. Mollitia hic alias voluptatibus dolore quis aliquid numquam tempora, minima maiores ut deserunt molestias. Quia nisi dolores animi quis natus! Iure, totam accusantium illo reiciendis amet ut expedita soluta cum sit recusandae tempore? Quis?
          </div>
          <div className="game-buy">
            <button className='btn btn-dark'>Buy Now</button>
            <button className='btn btn-warning'>Add Card</button>
            <button className='btn btn-info'>Add favorites</button>
            <div className="game-comm">
              {/* Game Comments */}
              <h4>Game Comments</h4>
            </div>
          </div>
        </div>
      </div>

      {/* Specification */}
      <div className="container my-5">
        <div className="game-spe">
          <h4>Specification</h4>
        </div>
      </div>

      {/* All comments & rate */}
      <div className="container my-5">
        <div className="game-a-c-r">
          <div className="game-all-comm">
            {/* All comments */}
            <h4>All comments</h4>
          </div>
          <div className="game-rate">
            {/* Game Rating */}
            <h4>Game Rating</h4>
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}

export default Details
