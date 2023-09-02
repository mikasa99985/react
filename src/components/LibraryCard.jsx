import React, { useState } from 'react'
import Nav from "../components/Nav";
import '../utility/css/TempCard.css';
import '../utility/css/btn_glow.css';
import { Link } from 'react-router-dom'
import Rating from './Rating';

const ShopCard = (props) => {
    const [add, setAdd] = useState(false);
    return (
        <>
            <div className="product-card">
                <Link to={props.link}>
                    <img className="product-image" src={props.img} alt="product image" />
                </Link>
                <div className="product-details d-flex justify-content-between align-items-center">
                    <Link className='link-offset-2 link-underline link-underline-opacity-0' to={props.link}>
                        <h5 className="product-title m-0">{props.title}</h5>
                    </Link>

                    <button className="btn-cus btn-blue-glow add-to-cart-button">
                        Download
                    </button>
                </div>
            </div>
        </>
    )
}

export default ShopCard
