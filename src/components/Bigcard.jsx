import React, { useEffect, useState } from 'react'
import '../utility/css/Bigcard.css';
import { database, db, auth } from "../../firebase.config";
import { useEffectOnce } from '../utility/js/util'

export default function Bigcard() {

    // let listDom = [
    //     '2AVRqblT0mRhy7Iu02W7',
    //     '5HWnRxX15RHOFOHEaAUP',
    //     'ICBunVzHsJQNbo67CGGb'
    // ];
    
    
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
                            setBigcardList(oldArray => [...oldArray, doc.data()]);
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
                {bigcardList.map((item, index) => {
                    return (
                        <div key={index} className={bigcardList.length==index+1?"big-card":"big-card mr-5"} style={{ cursor: 'pointer' }}>
                            <img src={item.img} alt="..." />
                            <div className="black-scr"></div>
                            <div className="big-card-text">
                                <h3 className='mt-3'>{item.name}</h3>
                                <h4>{item.type}</h4>
                            </div>
                        </div>
                    )
                })}
            </div>
        </>
    )

}
