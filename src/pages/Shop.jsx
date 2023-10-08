import React, { useEffect, useState } from 'react';
import Nav from "../components/Nav";
import { urlEncode, useQuery, useEffectOnce, calculateMean, capitalize, calculateDiscountedPrice } from '../utility/js/util'
import ShopCard from '../components/ShopCard';
import '../utility/css/TempCard.css';
import { db, database, auth } from '../../firebase.config'
import Banner from '../components/banner';

export default function Shop() {
    window.scrollTo(0, 0)
    const query = useQuery();

    // const [list, setList] = useState([]);
    const [AdventureList, setAdventureList] = useState([]);
    const [ActionList, setActionList] = useState([]);
    const [FPSList, setFPSList] = useState([]);
    const [FreeList, setFreeList] = useState([]);

    const [isLogin, setLogin] = useState(false);
    const [loading, setLoading] = useState(true);
    const [loadingface, setLoadingface] = useState(true);


    // let query_db;
    // if (query.get('search') != null) {
    //     // console.log('search =', query.get('search'));
    //     query_db = db.collection("game_collection")
    //         .orderBy('name')
    //         .startAt(capitalize(query.get('search')))
    //         .endAt(capitalize(query.get('search')) + '~');
    // } else {
    //     query_db = db.collection("game_collection");
    // }

    // Adventure
    useEffectOnce(() => {
        let query_db = db.collection("game_collection").orderBy('type').startAt('adventure').endAt('adventure' + '~');

        query_db.get().then((querySnapshot) => {
            // console.log(querySnapshot);

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
                    setAdventureList(oldArray => [...oldArray, { doc: doc, rate: arr }]);
                });

            });
            // setLoading(false);
        }).then(() => {
            setLoading(false);
        }).catch((error) => {
            console.log("Error getting documents: ", error);
        });

    }, [])

    // Action 
    useEffectOnce(() => {
        let query_db = db.collection("game_collection").orderBy('type').startAt('action').endAt('action' + '~');

        query_db.get().then((querySnapshot) => {
            // console.log(querySnapshot);

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
                    setActionList(oldArray => [...oldArray, { doc: doc, rate: arr }]);
                });

            });
            // setLoading(false);
        }).then(() => {
            setLoading(false);
        }).catch((error) => {
            console.log("Error getting documents: ", error);
        });

    }, [])

    // // FPS
    useEffectOnce(() => {
        let query_db = db.collection("game_collection").orderBy('type').startAt('fps').endAt('fps' + '~');

        query_db.get().then((querySnapshot) => {
            // console.log(querySnapshot);

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
                    setFPSList(oldArray => [...oldArray, { doc: doc, rate: arr }]);
                });

            });
            // setLoading(false);
        }).then(() => {
            setLoading(false);
        }).catch((error) => {
            console.log("Error getting documents: ", error);
        });

    }, [])

    // // Free
    useEffectOnce(() => {
        let query_db = db.collection("game_collection").where("price", "==", 0);

        query_db.get().then((querySnapshot) => {
            // console.log(querySnapshot);

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
                    setLoadingface(false);
                    setFreeList(oldArray => [...oldArray, { doc: doc, rate: arr }]);
                });

            });
            // setLoading(false);
        }).then(() => {
            setLoading(false);
        }).catch((error) => {
            console.log("Error getting documents: ", error);
        });

    }, [])

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
            <Nav shop={true} />

            <Banner height='600px' img='https://pbs.twimg.com/media/FQQb65fXwAcfKnw?format=jpg&name=4096x4096'>
                <div className="s-text">
                    <h1>SHOP COLLECTION</h1>
                    <h5>Our newest Attacker, Ram, comes to us from South Korea and is ready to join the ranks of Redhammer.</h5>
                </div>
                <div className="s-button mt-2 mt-sm-3 mt-lg-5">
                    <button className="btn-cus btn-radius btn-blue-glow banner-shop-btn-cus me-md-5 mb-1 mb-sm-4 mb-md-0" >NEW GAMES</button>
                    <button className="btn-cus btn-radius btn-blue-glow banner-shop-btn-cus" >OFFERS !!!</button>
                </div>
            </Banner>

            <h1 className='ms-4 mt-5'>Adventure Games</h1>
            <div className="d-flex flex-wrap  mx-auto w-res my-3">
                {
                    AdventureList.map((element, index) => {
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
                                // addCard={()=>{addCard(element.doc.id, element.doc.data().name, element.doc.data().img)}}
                                addCard={addCard}
                            />
                        )
                    })
                }
            </div>

            <h1 className='ms-4 mt-5'>Action Games</h1>
            <div className="d-flex flex-wrap mx-auto w-res my-3">
                {
                    ActionList.map((element, index) => {
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
                                // addCard={()=>{addCard(element.doc.id, element.doc.data().name, element.doc.data().img)}}
                                addCard={addCard}
                            />
                        )
                    })
                }
            </div>

            <h1 className='ms-4 mt-5'>FPS Games</h1>
            <div className="d-flex flex-wrap mx-auto w-res my-3">
                {
                    FPSList.map((element, index) => {
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
                                // addCard={()=>{addCard(element.doc.id, element.doc.data().name, element.doc.data().img)}}
                                addCard={addCard}
                            />
                        )
                    })
                }
            </div>

            <h1 className='ms-4 mt-5'>Free Games</h1>
            <div className="d-flex flex-wrap mx-auto w-res my-3">
                {
                    FreeList.map((element, index) => {
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
                                // addCard={()=>{addCard(element.doc.id, element.doc.data().name, element.doc.data().img)}}
                                addCard={addCard}
                            />
                        )
                    })
                }
            </div>



            {/* <div className="d-flex flex-wrap justify-content-center mx-auto w-res my-3">
                {
                    loading ?
                        <div className=" d-flex justify-content-around align-items-center" style={{ height: 'calc(100vh - 88px)' }}>
                            <div className="spinner-border" style={{ width: '70px', height: '70px', borderWidth: '8px' }} role="status">
                                <span className="visually-hidden">Loading...</span>
                            </div>
                        </div>
                        :
                        list.length != 0 ?
                            list.map((element, index) => {
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
                                        // addCard={()=>{addCard(element.doc.id, element.doc.data().name, element.doc.data().img)}}
                                        addCard={addCard}
                                    />
                                )
                            })
                            :
                            <div className="d-flex justify-content-center align-items-center" style={{height:'calc(100vh - 90px)'}}>
                                <h1 className=''>No data found</h1>
                            </div>
                }
            </div> */}
        </>
    );
}
