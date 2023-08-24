import React, { useEffect, useState } from 'react';
import Nav from "../components/Nav";
import { urlEncode, useQuery, useEffectOnce, calculateMean, capitalize } from '../utility/js/util'
import ShopCard from '../components/ShopCard';
import '../utility/css/TempCard.css';
import { db, database } from '../../firebase.config'

export default function Shop() {
    const query = useQuery();
    const [list, setList] = useState([])

    useEffectOnce(() => {
        let query_db;
        if (query.get('search') != null) {
            // console.log('search =', query.get('search'));
            query_db = db.collection("game_collection")
                    .orderBy('name')
                    .startAt(capitalize(query.get('search')))
                    .endAt(capitalize(query.get('search')) + '~');
        }else{
            query_db = db.collection("game_collection");
        }

        query_db.get().then((querySnapshot) => {
            querySnapshot.forEach(async (doc) => {
                // let rate = await database.ref(`game_collection/${doc.id}/ratings`).once("value");
                // rate.forEach(element => {
                //     console.log(element.val().rate);
                // });
                let arr = [];
                database.ref(`game_collection/${doc.id}/ratings`).once('value', (snapshot) => {
                    snapshot.forEach(
                        function (Childsnapshot) {
                            arr.push(parseInt(Childsnapshot.val().rate));
                        });
                }).then(()=>{
                    setList(oldArray => [...oldArray, { doc: doc, rate: arr }])
                });

            });
        }).catch((error) => {
            console.log("Error getting documents: ", error);
        });

    }, [])

    return (
        <>
            <Nav shop={true} />

            <div className="d-flex flex-wrap justify-content-center mx-auto w-res my-3">
                {
                    list.map((element, index) => {
                        return (
                            <ShopCard
                                id={element.doc.id}
                                img={element.doc.data().img}
                                title={element.doc.data().name.length >= 25 ? element.doc.data().name.slice(0, 25) + '...' : element.doc.data().name}
                                price={element.doc.data().price == 0 ? 'FREE' : '₹' + element.doc.data().price}
                                rate={calculateMean(element.rate)}
                                key={index}
                                link={`/shop/${urlEncode(element.doc.data().name)}`}
                            />
                        )
                    })
                }
            </div>
        </>
    );
}
