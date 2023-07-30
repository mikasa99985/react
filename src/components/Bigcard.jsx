import React, { useEffect, useState } from 'react'
import '../utility/css/Bigcard.css';
import { database, db, auth } from "../../firebase.config";

export default function Bigcard() {

    // let listDom = [
    //     '2AVRqblT0mRhy7Iu02W7',
    //     '5HWnRxX15RHOFOHEaAUP',
    //     'ICBunVzHsJQNbo67CGGb'
    // ];

    // !!!
    // not try to fix this code this not a bug this incomplete
    // !!!
    
    const [bigcardList, setBigcardList] = useState([]);

    useEffect(() => {
        let arr = [];
        database.ref('bigcard').once('value', (snapshot) => {
            snapshot.forEach(
                function (Childsnapshot) {
                    // console.log(Childsnapshot.val());
                    // listDom.push(Childsnapshot.val());
                    arr.push(Childsnapshot.val());
                });
        }).then(() => {
            let bigarr = [];
            for (let index = 0; index < arr.length; index++) {
                db.collection("game_collection").doc(arr[index]).get().then((doc) => {
                    if (doc.exists) {
                        // console.log(doc.data());
                        bigarr.push(doc.data());
                    } else {
                        console.log("No such document!");
                    }
                }).then(() => {
                    
                }).catch((error) => {
                    console.log("Error getting document:", error);
                });
            }
            console.log('com')
            setBigcardList(bigarr);
        });

    }, []);

    return (
        <>
            {console.log(bigcardList)}
            <div className="d-flex justify-content-center mb-5">
                <h3 className='fw-bolder'>VIBRANT STORE</h3>
            </div>

            <div className="big-card-div">
                {bigcardList.map((item, index) => {
                    console.log(index)
                    return (
                        <div className="big-card mr-5" style={{ cursor: 'pointer' }}>
                            <img src="https://firebasestorage.googleapis.com/v0/b/vibrant-games.appspot.com/o/GameCollectionImg%2F1689866524816?alt=media&token=f5944b75-7705-4834-bc38-bbd110540d43" alt="..." />
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
