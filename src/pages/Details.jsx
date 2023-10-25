import React, { useEffect, useState } from 'react'
import { db, database, auth } from '../../firebase.config'
import { useParams } from 'react-router-dom'
import { urlDecode } from '../utility/js/util'
import '../utility/css/details.css'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import Imgslider from '../components/details/Imgslider'
import Specification from '../components/details/Specification'
import Rating from '../components/details/Rating'
import Ratings from "../components/Rating";
import Comments from '../components/details/Comments'
import Niel from "../assets/Niel.png";


const Details = () => {
  // window.scrollTo(0, 0)
  const params = useParams();

  const [data, setData] = useState(false);
  const [slider_img, setImg] = useState([]);
  const [comments, setComments] = useState([]);
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

          let arr1 = [];
          database.ref(`game_collection/${doc.id}/ratings`).once('value', function (snapshot) {
            setComments([]);
            snapshot.forEach(element => {
              console.log(element.key);
              db.collection('users').doc(element.key).get().then((doc) => {
                // console.log('Document data:', doc.data());
                setComments(oldArray => [...oldArray, { comment: element.val(), user: doc.data() }]);
              }).catch((error) => {
                console.log('Error getting document:', error);
              });
              // arr1.push(element.val());
            });
          }).then(() => {
            // setComments(arr1);
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

      {
        data ?
          <>
            <div className="container my-5">
              <div className="w-100 game-img-slider">
                {/* img Slider */}
                <Imgslider element={slider_img} />
              </div>
            </div>

            {/* Game details */}
            <div className="container my-5">
              <div className="game-header">
                <img src={data.data.img} alt="" />
                <div className="game-details">
                  <h1>{data.data.name}</h1>
                  <h5>{data.data.desc.slice(0, 500)}</h5>
                </div>
              </div>
            </div>

            {/* Full description & Buy */}

            <div className="container my-5">
              <div className="game-desc">
                <div className="game-full-desc">
                  {/* Game description */}
                  {data.data.desc.slice(0, 1500)}
                </div>
                <div className="game-buy">
                  <button className='btn btn-dark'>Buy Now</button>
                  <button className='btn btn-warning'>Add Card</button>
                  <button className='btn btn-info'>Add favorites</button>
                  <div className="game-comm">
                    {/* Game Comments */}
                    <Comments comments={comments.slice(0,3)} />
                  </div>
                </div>
              </div>
            </div>
            {/* Specification */}
            <div className="container my-5">
              <div className="game-spe">
                <Specification spec={data.data.system} />
              </div>
            </div>

            {/* All comments & rate */}
            <div className="container my-5">
              <div className="game-a-c-r">
                <div className="game-all-comm">
                  <h4>All comments</h4>
                  <ul className="list-group list-group-flush comm-scroll border" style={{ height: '368px' }}>
                    {
                      comments.map((element, index) =>
                        <li key={index} className="list-group-item py-3">
                          <div className="d-flex ">
                            <img
                              src={element.user.img}
                              style={{
                                height: "45px",
                                width: "45px",
                                borderRadius: "30px",
                                overflow: "hidden",
                              }}
                              alt=""
                            />
                            <div className="flex-grow-1 align-items-center commentname">
                              <p
                                className="font-weight-medium text-gray-900"
                                style={{ fontWeight: "450" }}
                              >
                                {element.user.name}
                              </p>
                              <p
                                className="text-gray-500"
                                style={{
                                  fontWeight: "300",

                                  marginTop: "-22px",

                                  color: "grey",
                                  fontSize: "small",
                                  fontStyle: "italic",
                                }}
                              >
                                {element.comment.comment}
                              </p>
                            </div>



                            <div className="text-base font-weight-bold text-gray-900"><Ratings rate={parseInt(element.comment.rate)} /></div>
                          </div>
                        </li>
                      )
                    }

                  </ul>
                </div>
                <div className="game-rate">
                  {/* Game Rating */}
                  <Rating />
                </div>
              </div>
            </div>
          </>
          :
          <></>
      }


      {/* Demo Image:- https://emle.org/wp-content/uploads/revslider/news/demo-img-2-3.png */}
      <Footer />
    </>
  )
}

export default Details
