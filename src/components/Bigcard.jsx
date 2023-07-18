import React from 'react'
import '../utility/css/Bigcard.css';

import Anthem from '../assets/Anthem.jpg'
export default function Bigcard() {


    return (

        <div>
            <div class="d-flex flex-row">
                <div className="card-deck">
                    <div className="card"style={{ width: "20rem" }}>
                        <h5>Asphault</h5>
                        <p>Racing Game</p>
                        <img src={Anthem } alt="..." />
                    </div>
                </div>

                <div class="d-flex flex-row">
                    <div className="card" style={{ width: "20rem" }} >
                         <h5>Anthem</h5>
                        <p>Online Multiplayer</p>
                        <img src={Anthem} alt="..." />
                    </div>

                    <div class="d-flex flex-row">
                        <div className="card"style={{ width: "20rem" }}>
                        <h5>HITMAN III</h5>
                        <p>Stealth Game</p>
                            <img src={Anthem} alt="..." />
                        </div>

                       
                    </div>
                </div>
            </div>
        </div>
    )

}
