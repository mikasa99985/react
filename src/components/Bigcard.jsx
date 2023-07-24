import React from 'react'
import '../utility/css/Bigcard.css';
import Anthem from '../assets/Anthem.jpg'
export default function Bigcard() {
    return (
        <>
            <div className="d-flex justify-content-center mb-5">
                <h3 className='fw-bolder'>VIBRANT STORE</h3>
            </div>

            <div className="big-card-div">

                <div className="big-card mr-5" style={{cursor: 'pointer'}}>
                    <img src="https://firebasestorage.googleapis.com/v0/b/vibrant-games.appspot.com/o/GameCollectionImg%2F1689866524816?alt=media&token=f5944b75-7705-4834-bc38-bbd110540d43" alt="..." />
                    <div className="black-scr"></div>
                    <div className="big-card-text">
                        <h3 className='mt-3'>Asphault</h3>
                        <h4>Racing Game</h4>
                    </div>
                </div>

                <div className="big-card mr-5" style={{cursor: 'pointer'}}>
                    <img src="https://firebasestorage.googleapis.com/v0/b/vibrant-games.appspot.com/o/GameCollectionImg%2F1689866524816?alt=media&token=f5944b75-7705-4834-bc38-bbd110540d43" alt="..." />
                    <div className="black-scr"></div>
                    <div className="big-card-text">
                        <h3 className='mt-3'>Asphault</h3>
                        <h4>Racing Game</h4>
                    </div>

                </div>

                <div className="big-card" style={{cursor: 'pointer'}}>
                    <img src="https://firebasestorage.googleapis.com/v0/b/vibrant-games.appspot.com/o/GameCollectionImg%2F1689866524816?alt=media&token=f5944b75-7705-4834-bc38-bbd110540d43" alt="..." />
                    <div className="black-scr"></div>
                    <div className="big-card-text">
                        <h3 className='mt-3'>Asphault</h3>
                        <h4>Racing Game</h4>
                    </div>
                </div>

            </div>
        </>
    )

}
