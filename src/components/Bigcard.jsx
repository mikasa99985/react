import React from 'react'
import '../utility/css/Bigcard.css';

import Anthem from '../assets/Anthem.jpg'
export default function Bigcard() {


    return (

        <div>
            <div class="d-flex flex-row">
                <div className="card-deck">
                    <div className="card"style={{ width: "15rem" }}>
                        <h4>Asphault</h4>
                        <p>Racing Game</p>
                        <img src={Anthem } alt="..." />
                        <div className="card-body">
                            <a href="">PRICE:$500</a>
                        </div>
                    </div>
                </div>

                <div class="d-flex flex-row">
                    <div className="card" style={{ width: "15rem" }} >
                         <h4>Anthem</h4>
                        <p>Online Multiplayer</p>
                        <img src={Anthem} alt="..." />
                        <div class="card-body">


                            <a href="">PRICE:$450</a>
                        </div>
                    </div>

                    <div class="d-flex flex-row">
                        <div className="card"style={{ width: "15rem" }}>
                        <h4>HITMAN III</h4>
                        <p>Stealth Game</p>
                            <img src={Anthem} alt="..." />
                            <div className="card-body">

                                <a href="">PRICE:$300</a>
                            </div>
                        </div>

                        <div class="d-flex flex-row">
                            <div className="card"style={{ width: "15rem" }}>
                            <h4>BattleField</h4>
                        <p> First person shooter game </p>
                                <img src={Anthem} alt="..." />
                                <div className="card-body">

                                    <a href="" >PRICE:$390</a>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )

}
