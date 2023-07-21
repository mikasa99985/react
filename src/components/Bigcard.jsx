import React from 'react'
import '../utility/css/Bigcard.css';
import Anthem from '../assets/Anthem.jpg'
export default function Bigcard() {


    return (

        <div>


            <div className="d-flex flex-row">
                <div className="big-card" style={{ width: "20rem" }} >
                    <h5>Asphault</h5>
                    <p>Racing game</p>
                    <img src={Anthem} alt="..." />
                </div>


                <div className="d-flex flex-row">
                    <div className="big-card" style={{ width: "20rem" }}>
                        <h5>Anthem</h5>
                        <p>Online Multiplayer</p>
                        <img src={Anthem} alt="..." />
                    </div>


                    <div className="d-flex flex-row">
                        <div className="big-card" style={{ width: "20rem" }}>
                            <h5>HITMAN III</h5>
                            <p>Stealth Game</p>
                            <img src={Anthem} alt="..." />
                        </div>
                    </div>

                </div>


            </div>
            <div className="features">
                    <h4>Features</h4>
                    <div className="d-flex flex-row">
                        <div className="feature-card" style={{ width: "20rem" }}>
                            <h5>HITMAN III</h5>
                            <p>Stealth Game</p>
                            <img src=".." alt="..." />
                        </div>
                        <div className="d-flex flex-row">
                        <div className="feature-card" style={{ width: "20rem" }}>
                            <h5>HITMAN III</h5>
                            <p>Stealth Game</p>
                            <img src=".." alt="..." />
                        </div>
                        <div className="d-flex flex-row">
                        <div className="feature-card" style={{ width: "20rem" }}>
                            <h5>HITMAN III</h5>
                            <p>Stealth Game</p>
                            <img src=".." alt="..." />
                        </div>
                    </div>
                    </div>
                    </div>
                    
                </div>
            
        </div>
    )

}
