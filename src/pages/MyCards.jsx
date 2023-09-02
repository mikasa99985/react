import React, { useState } from 'react'
import '../utility/my_card.css'
import {Link} from 'react-router-dom'

const MyCards = () => {
    const [imageUrl, setImageUrl] = useState('https://firebasestorage.googleapis.com/v0/b/online-app-a440d.appspot.com/o/empty-profile.png?alt=media&token=9d884c2e-e9ab-4ac0-9d28-cd7ec5ba917f');

    return (
        <>

            <div className="container d-flex justify-content-center align-items-center" style={{height:'100vh'}}>
                <div className="w-100 max-w-md p-4 bg-white border border-gray-200 rounded-lg shadow-sm p-8 dark:bg-gray-800 dark:border-gray-700 w-card">
                    <div className="d-flex justify-content-between align-items-center mb-4">
                        <h5 className="h5 text-xl font-bold mb-0 text-gray-900 dark:text-white">Latest Customers</h5>
                        <a href="#" className="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">
                            View all
                        </a>
                    </div>
                    <div className="flow-root">
                        <ul className="list-unstyled divide-y divide-gray-200 dark:divide-gray-700">

                            <li className="py-3 sm:py-4 ">
                                <div className="d-flex flex-column flex-sm-row align-items-center space-x-4">
                                    <div className="flex-shrink-0" >
                                        <img className="w-8 h-8 rounded " style={{ width: "110px" }} src={imageUrl} alt="Neil image" />
                                    </div>
                                    <div className="flex-grow-1 my-3 my-sm-0 ms-sm-3">
                                        <p className="h6 mb-1 text-sm font-medium text-gray-900 truncate dark:text-white m-0 ">
                                            Game Name
                                        </p>
                                        <Link to='/' className="text-sm text-gray-500 truncate dark:text-gray-400 m-0">
                                            link
                                        </Link>
                                    </div>
                                    <div className="d-inline-flex align-items-center h5 font-semibold text-gray-900 dark:text-white">
                                    ₹320
                                        <button className='btn btn-dark ms-4'>Buy</button>
                                    </div>
                                </div>
                            </li>

                            
                            
                        </ul>
                    </div>
                </div>
            </div>


        </>
    )
}

export default MyCards
