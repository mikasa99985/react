import React, { useEffect, useState } from 'react'
import '../utility/css/Bigcard.css';
import { database, db, auth } from "../../firebase.config";
import { useEffectOnce, urlEncode } from '../utility/js/util'
import {Link} from 'react-router-dom'

export default function Bigcard() {

    // let listDom = [
    //     '2AVRqblT0mRhy7Iu02W7',
    //     '5HWnRxX15RHOFOHEaAUP',
    //     'ICBunVzHsJQNbo67CGGb'
    // ];

    let demo = [1, 2, 3];

    const [bigcardList, setBigcardList] = useState([]);

    useEffectOnce(() => {
        let arr = [];
        database.ref('bigcard').once('value', (snapshot) => {
            let i = 0;
            snapshot.forEach(
                function (Childsnapshot) {
                    // console.log(Childsnapshot.val());
                    // listDom.push(Childsnapshot.val());
                    db.collection("game_collection").doc(Childsnapshot.val()).get().then((doc) => {
                        if (doc.exists) {
                            // console.log(doc.data());
                            // arr.push(doc.data());
                            setBigcardList(oldArray => [...oldArray, doc]);
                            i++;
                        } else {
                            console.log("No such document!");
                        }
                    }).catch((error) => {
                        console.log("Error getting document:", error);
                    });
                });
        }).then(() => {
            setBigcardList(arr);
        });

    }, []);

    return (
        <>
            <div className="d-flex justify-content-center mb-5">
                <h3 className='fw-bolder'>VIBRANT STORE</h3>
            </div>

            <div className="big-card-div">
                {
                    bigcardList.length == 0 ?
                    demo.map((element, index) => {
                        return (
                            <div key={index} className={bigcardList.length == index + 1 ? "big-card" : "big-card mr-5"} style={{ cursor: 'pointer' }}>
                                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5qKfKjuNV4G-aBNAyxODGQxjZKcAi1NP7U0A5b2T9KQ&s' alt="..." />
                                <div className="black-scr"></div>
                                <div className="big-card-text placeholder-glow">
                                    <h3 className='mt-3 w-50'>
                                            <span className="placeholder col-12"></span>
                                    </h3>
                                    <h4 className='placeholder-glow w-50'>
                                            <span className="placeholder col-12"></span>
                                    </h4>
                                </div>
                            </div>
                        )
                    })
                    :
                    bigcardList.map((item, index) => {
                        return (
                            <Link to={`/shop/${urlEncode(item.data().name)}`} key={index} className={bigcardList.length == index + 1 ? "big-card" : "big-card mr-5"} style={{ cursor: 'pointer' }}>
                                <img src={item.data().img} alt="..." />
                                <div className="black-scr"></div>
                                <div className="big-card-text">
                                    <h3 className='mt-3'>{item.data().name}</h3>
                                    <h4>{item.data().type}</h4>
                                </div>
                            </Link>
                        )
                    })
                }
            </div>
        </>
    )

}
