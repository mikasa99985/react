import React from 'react'
import '../utility/css/features.css'

const Features = () => {
    return (
        <>
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
        </>
    )
}

export default Features
