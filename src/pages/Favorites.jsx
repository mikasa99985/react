import React from 'react'
import Nav from '../components/Nav'

const Favorites = () => {

    let img = 'https://firebasestorage.googleapis.com/v0/b/online-app-a440d.appspot.com/o/empty-profile.png?alt=media&token=9d884c2e-e9ab-4ac0-9d28-cd7ec5ba917f';

    return (
        <>
            <Nav />

            <h1 className='text-center my-5'>Favorites list</h1>
            <div className=" container">
                <ul class="list-group">
                    <li class="list-group-item">
                        <div className=" d-flex flex-column flex-md-row justify-content-between align-items-center">
                            <div className=" d-flex flex-column flex-md-row align-items-center">
                                <img className=' rounded' src={img} width={100} alt="" />
                                <div className=" my-3 my-md-0 ms-md-3 d-flex flex-column justify-content-center">
                                    <h5>game demo name</h5>
                                    <p className='m-0'>$100</p>
                                </div>
                            </div>
                            <div className="buttons">
                                <button className='btn btn-dark me-2'>buy now</button>
                                <button className='btn btn-danger'>remove</button>
                            </div>
                        </div>
                    </li>
                    <li class="list-group-item">
                        <div className=" d-flex flex-column flex-md-row justify-content-between align-items-center">
                            <div className=" d-flex flex-column flex-md-row align-items-center">
                                <img className=' rounded' src={img} width={100} alt="" />
                                <div className=" my-3 my-md-0 ms-md-3 d-flex flex-column justify-content-center">
                                    <h5>game demo name</h5>
                                    <p className='m-0'>$100</p>
                                </div>
                            </div>
                            <div className="buttons">
                                <button className='btn btn-dark me-2'>buy now</button>
                                <button className='btn btn-danger'>remove</button>
                            </div>
                        </div>
                    </li>
                    <li class="list-group-item">
                        <div className=" d-flex flex-column flex-md-row justify-content-between align-items-center">
                            <div className=" d-flex flex-column flex-md-row align-items-center">
                                <img className=' rounded' src={img} width={100} alt="" />
                                <div className=" my-3 my-md-0 ms-md-3 d-flex flex-column justify-content-center">
                                    <h5>game demo name</h5>
                                    <p className='m-0'>$100</p>
                                </div>
                            </div>
                            <div className="buttons">
                                <button className='btn btn-dark me-2'>buy now</button>
                                <button className='btn btn-danger'>remove</button>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default Favorites
