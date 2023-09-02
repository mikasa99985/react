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
                <div className="product-details">
                    <Link className='link-offset-2 link-underline link-underline-opacity-0' to={props.link}>
                        <h5 className="product-title">{props.title}</h5>
                    </Link>
                    <Rating rate={props.rate} />
                    <div className="product-price">
                        <div className=" d-flex flex-column ">
                            <span><del>{props.row_price==0||'₹'+props.row_price==props.price?'':'₹'+props.row_price}</del><span className='text-success fw-bold'>{props.offers==0?'':'  '+props.offers+'%'}</span></span>
                            <span className="price">{props.price.slice(0,8)}</span>
                        </div>
                        <button onClick={()=>{setAdd(props.addCard(props.id, props.name, props.row_price, props.img, props.offers))}} className="btn-cus btn-blue-glow add-to-cart-button">
                            {
                                !add ?
                                    'Add to cart'
                                    :
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-cart-check-fill" viewBox="0 0 16 16">
                                        <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-1.646-7.646-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L8 8.293l2.646-2.647a.5.5 0 0 1 .708.708z" />
                                    </svg>

                            }
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ShopCard
