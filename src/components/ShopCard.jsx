import React from 'react'
import Nav from "../components/Nav";
import '../utility/css/TempCard.css';
import '../utility/css/btn_glow.css';
import {Link} from 'react-router-dom'
import Rating from './Rating';

const ShopCard = (props) => {
    return (
        <>
            <div className="product-card">
                <Link to={props.link}>
                    <img className="product-image" src={props.img} alt="product image" />
                </Link>
                <div className="product-details">
                    <Link className='link-offset-2 link-underline link-underline-opacity-0' to={props.link}>
                        <h5 className="product-title">{props.title}</h5>
                    </Link>
                    <Rating rate={props.rate}/>
                    <div className="product-price">
                        <span className="price">{props.price}</span>
                        <Link to={props.link} className="btn-cus btn-blue-glow add-to-cart-button">Add to cart</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ShopCard
