import React from 'react'
import '../utility/css/features.css'
import Anthem from '../assets/Anthem.jpg'

const Features = () => {
    return (
        <>
            <div className="features">
                <h4>Features</h4>
                <div className="d-flex flex-row">
                    <div className="feature-card" style={{ width: "20rem" }}>
                        <h5>Feature I</h5>
                        <div><img src={Anthem} alt="..." /></div>
                        
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea consectetur quos dolorum.</p>
                        <a href="#" class="icon-link">Learn more-</a>

                    </div>
                    <div className="d-flex flex-row">
                        <div className="feature-card" style={{ width: "20rem" }}>
                            <h5>Feature II</h5>
                            <img src=".." alt="..." />
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut consequuntur nihil ipsum amet!
                            </p>
                            <a href="#" class="icon-link">Learn more-</a>

                        </div>
                        <div className="d-flex flex-row">
                            <div className="feature-card" style={{ width: "20rem" }}>
                                <h5>Feature III</h5>
                                <img src=".." alt="..." />
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima distinctio ea quaerat!</p>
                                <a href="#" class="icon-link">Learn more-</a>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Features
