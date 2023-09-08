import React, { useEffect, useState } from 'react';
import Nav from "../components/Nav";
import { urlEncode, useQuery, useEffectOnce, calculateMean, capitalize, calculateDiscountedPrice } from '../utility/js/util'
import ShopCard from '../components/ShopCard';
import '../utility/css/TempCard.css';
import { db, database, auth } from '../../firebase.config'

export default function Shop() {
    const query = useQuery();

    const [list, setList] = useState([]);
    const [isLogin, setLogin] = useState(false);
    const [loading, setLoading] = useState(true);
    const [loadingface, setLoadingface] = useState(true);

    useEffectOnce(() => {
        let query_db;
        if (query.get('search') != null) {
            // console.log('search =', query.get('search'));
            query_db = db.collection("game_collection")
                .orderBy('name')
                .startAt(capitalize(query.get('search')))
                .endAt(capitalize(query.get('search')) + '~');
        } else {
            query_db = db.collection("game_collection");
        }

        query_db.get().then((querySnapshot) => {
            console.log(querySnapshot);

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
                    setList(oldArray => [...oldArray, { doc: doc, rate: arr }]);
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

            <div className="d-flex flex-wrap justify-content-center mx-auto w-res my-3">
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
            </div>
        </>
    );
}
