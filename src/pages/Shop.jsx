import React, { useEffect, useState } from 'react';
import Nav from "../components/Nav";
import { urlEncode, useQuery } from '../utility/js/util'
import ShopCard from '../components/ShopCard';
import '../utility/css/TempCard.css';
import { db, database } from '../../firebase.config'

export default function Shop() {
    const query = useQuery();
    const [list, setList] = useState([])

    if (query.get('search') != null) {
        console.log('search =', query.get('search'));
    }

    useEffect(() => {
        let arr = [];
        db.collection("game_collection").get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                arr.push(doc);
            });
        }).then(() => {
            setList(arr);
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
                                id={element.id}
                                img={element.data().img}
                                title={element.data().name.length>=25?element.data().name.slice(0,25)+'...':element.data().name}
                                price={element.data().price==0?'FREE':'₹'+element.data().price}
                                rate=""
                                key={index}
                                link={`/shop/${urlEncode(element.data().name)}`}
                            />
                        )
                    })
                }

                {/* <ShopCard
                    id=""
                    img="https://firebasestorage.googleapis.com/v0/b/vibrant-games.appspot.com/o/GameCollectionImg%2F1689866524816?alt=media&token=f5944b75-7705-4834-bc38-bbd110540d43"
                    title="Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport"
                    price="599"
                    rate=""
                    link={`/shop/name`}
                /> */}
            </div>
        </>
    );
}
