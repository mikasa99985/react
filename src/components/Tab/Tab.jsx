import React from 'react'
import Tabcard from './Tabcard'
import '../../utility/css/btn_glow.css'

const Tab = () => {
    return (
        <>
            <div className="mx-auto mb-4" style={{ width: '95%' }}>
                <h3 className='fw-bolder text-center mb-3'>LATEST NEWS</h3>
                <ul className="nav nav-pills flex-column flex-sm-row text-sm font-medium text-center text-gray-500 justify-content-center">
                    <li className="nav-item mr-2">
                        <a href="#" className="nav-link text-dark bg-light">Game1</a>
                    </li>
                    <li className="nav-item mr-2">
                        <a href="#" className="nav-link text-dark">Game2</a>
                    </li>
                    <li className="nav-item mr-2">
                        <a href="#" className="nav-link text-dark">Game3</a>
                    </li>
                    <li className="nav-item mr-2">
                        <a href="#" className="nav-link text-dark">Game4</a>
                    </li>
                </ul>

                <Tabcard />
                <div className="d-flex justify-content-center mb-5" >
                    <button className="btn-cus btn-radius btn-blue-glow" >ALL NEWS</button>
                    {/* <button className="btn-cus btn-pink-glow">VIEW ALL GAMES</button> */}
                </div>
            </div>
        </>
    )
}

export default Tab
