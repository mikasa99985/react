import React from 'react'
import '../utility/css/features.css'

const Features = () => {
    return (
        <>
            <div className="features">
                <h4>Features</h4>
                <div className="d-flex flex-row">
                    <div className="feature-card" style={{ width: "20rem" }}>
                        <h5>Feature I</h5>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea consectetur quos dolorum.</p>
                        <img src=".." alt="..." />
                    </div>
                    <div className="d-flex flex-row">
                        <div className="feature-card" style={{ width: "20rem" }}>
                            <h5>Feature II</h5>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut consequuntur nihil ipsum amet!
                            </p>
                            <img src=".." alt="..." />
                        </div>
                        <div className="d-flex flex-row">
                            <div className="feature-card" style={{ width: "20rem" }}>
                                <h5>Feature III</h5>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima distinctio ea quaerat!</p>
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
