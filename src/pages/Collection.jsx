import React, { useEffect, useState } from 'react';
import Banner from '../components/banner'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import { urlEncode, useQuery, useEffectOnce, calculateMean, capitalize, calculateDiscountedPrice, eraseCookie } from '../utility/js/util'
import ShopCard from '../components/ShopCard';
import '../utility/css/TempCard.css';
import { db, database, auth } from '../../firebase.config'
import {Link, useHistory} from 'react-router-dom';

const Collection = () => {
  window.scrollTo(0, 0);
  const query = useQuery();

  const [List, setList] = useState([]);

  const [isLogin, setLogin] = useState(false);
  const [loading, setLoading] = useState(true);
  // const [loadingface, setLoadingface] = useState(true);
  const [lastVisible, setlastVisible] = useState();
  const [fastVisible, setfastVisible] = useState();

  const limit = 10;
  const field = 'time';

  useEffectOnce(() => {

    let query_db = db.collection("game_collection").orderBy(field).limit(limit);
    // let query_db = db.collection("game_collection").orderBy('type').startAt('adventure').endAt('adventure' + '~').limit(4);

    if (query.get('search') != null) {
      // console.log('search =', query.get('search'));
      let str = capitalize(query.get('search'));

      // query_db = db.collection("game_collection")
      //     .orderBy('name')
      //     .startAt("[a-zA-Z0-9]*")
      //     .endAt(str + '\uf8ff');

      query_db = db.collection("game_collection")
              .where('name', '>=', query.get('search'))
              .where('name', '<=', query.get('search') + '\uf8ff');

    }

    query_db.get().then((querySnapshot) => {
      // console.log(querySnapshot);
      if (!querySnapshot.empty) {
        setfastVisible(querySnapshot.docs[0]);
        setlastVisible(querySnapshot.docs[querySnapshot.docs.length - 1]);
      } else {
        setLoading(false);
      }

      querySnapshot.forEach(async (doc) => {
        // let rate = await database.ref(`game_collection/${doc.id}/ratings`).once("value");
        // rate.forEach(element => {
        //     console.log(element.val().rate);
        // });
        let arr = [];
        database.ref(`game_collection/${doc.id}/ratings`).once('value', (snapshot) => {
          // setLoading(false);

          snapshot.forEach(
            function (Childsnapshot) {
              arr.push(parseInt(Childsnapshot.val().rate));
            });
        }).then(() => {
          // setLoadingface(false);
          setList(oldArray => [...oldArray, { doc: doc, rate: arr }]);
          setLoading(false);
        });

      });
      // setLoading(false);
    }).then(() => {

    }).catch((error) => {
      console.log("Error getting documents: ", error);
    });

  }, [])

  function next() {
    setLoading(true);
    setList([]);
    let query_db = db.collection("game_collection").orderBy(field).startAfter(lastVisible).limit(limit);
    query_db.get().then((querySnapshot) => {
      // console.log(querySnapshot);

      if (!querySnapshot.empty) {
        setfastVisible(querySnapshot.docs[0]);
        setlastVisible(querySnapshot.docs[querySnapshot.docs.length - 1]);
      } else {
        setLoading(false);
      }

      querySnapshot.forEach(async (doc) => {
        // let rate = await database.ref(`game_collection/${doc.id}/ratings`).once("value");
        // rate.forEach(element => {
        //     console.log(element.val().rate);
        // });
        let arr = [];
        database.ref(`game_collection/${doc.id}/ratings`).once('value', (snapshot) => {
          // setLoading(false);

          snapshot.forEach(
            function (Childsnapshot) {
              arr.push(parseInt(Childsnapshot.val().rate));
            });
        }).then(() => {
          // setLoadingface(false);
          setList(oldArray => [...oldArray, { doc: doc, rate: arr }]);
          setLoading(false);
        });

      });
      // setLoading(false);
    }).then(() => {
      // setLoading(false);
    }).catch((error) => {
      console.log("Error getting documents: ", error);
    });
  }

  function previous() {
    setLoading(true);
    setList([]);
    let query_db = db.collection("game_collection").orderBy(field).endBefore(fastVisible).limitToLast(limit);
    query_db.get().then((querySnapshot) => {
      // console.log(querySnapshot);

      if (!querySnapshot.empty) {
        setfastVisible(querySnapshot.docs[0]);
        setlastVisible(querySnapshot.docs[querySnapshot.docs.length - 1]);
      } else {
        setLoading(false);
      }

      querySnapshot.forEach(async (doc) => {
        // let rate = await database.ref(`game_collection/${doc.id}/ratings`).once("value");
        // rate.forEach(element => {
        //     console.log(element.val().rate);
        // });
        let arr = [];
        database.ref(`game_collection/${doc.id}/ratings`).once('value', (snapshot) => {
          // setLoading(false);

          snapshot.forEach(
            function (Childsnapshot) {
              arr.push(parseInt(Childsnapshot.val().rate));
            });
        }).then(() => {
          // setLoadingface(false);
          setList(oldArray => [...oldArray, { doc: doc, rate: arr }]);
          setLoading(false);

        });

      });
      // setLoading(false);
    }).then(() => {
      // setLoading(false);
    }).catch((error) => {
      console.log("Error getting documents: ", error);
    });
  }

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setLogin(true);
      } else {
        setLogin(false);
      }
    });
  }, []);

  async function addCard(key, name, price, img, offers) {
    if (isLogin) {
      await database.ref(`users/${auth.currentUser.uid}/my_cards/${key}`).set({ name, price: calculateDiscountedPrice(price, offers), img });
      return true;
    } else {
      return false;
    }
  }

  return (
    <>
      <Nav />

      <Banner height='400px' img='https://pbs.twimg.com/media/FQQb65fXwAcfKnw?format=jpg&name=4096x4096'>
        <div className="s-text">
          <h1>SHOP COLLECTION</h1>
          <h5>Our newest Attacker, Ram, comes to us from South Korea and is ready to join the ranks of Redhammer.</h5>
        </div>
        <div className="s-button mt-2 mt-sm-3 mt-lg-5">
          <button className="btn-cus btn-radius btn-blue-glow banner-shop-btn-cus me-md-5 mb-1 mb-sm-4 mb-md-0" >NEW GAMES</button>
          <button onClick={() => { history.push('/collection') }} className="btn-cus btn-radius btn-blue-glow banner-shop-btn-cus" >More</button>
        </div>
      </Banner>

      <div className="d-flex flex-wrap justify-content-center mx-auto w-res my-3">
        {
          !loading ?
            List.length != 0 ?
              List.map((element, index) => {
                return (
                  <ShopCard
                    id={element.doc.id}
                    img={element.doc.data().img}
                    title={element.doc.data().name.length >= 25 ? element.doc.data().name.slice(0, 25) + '...' : element.doc.data().name}
                    name={element.doc.data().name}
                    price={element.doc.data().price == 0 ? 'FREE' : '₹' + calculateDiscountedPrice(element.doc.data().price, element.doc.data().offers)}
                    row_price={element.doc.data().price}
                    rate={calculateMean(element.rate)}
                    offers={element.doc.data().offers}
                    key={index}
                    link={`/shop/${urlEncode(element.doc.data().name)}`}
                    addCard={addCard}
                  />
                )
              })
              :
              <div className="d-flex justify-content-center align-items-center" style={{ height: 'calc(100vh - 532px)' }}>
                <h1 className=''>No data found</h1>
              </div>
            :
            <div className=" d-flex justify-content-around align-items-center" style={{ height: 'calc(100vh - 532px)' }}>
              <div className="spinner-border" style={{ width: '70px', height: '70px', borderWidth: '8px' }} role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
        }
      </div>

      <div className="d-flex justify-content-between my-5">
        <button onClick={previous} className='btn'>
          <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="currentColor" className="bi bi-arrow-left-circle" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z" />
          </svg>
        </button>
        <button onClick={next} className='btn'>
          <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="currentColor" className="bi bi-arrow-right-circle" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z" />
          </svg>
        </button>
      </div>

      <Footer />
    </>
  )
}

export default Collection
