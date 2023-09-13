import React from 'react'
import { parseTime } from '../../utility/js/util'
import {Link} from 'react-router-dom'

const Card = (props) => {
    return (
        <>

            {
                props.placeholder ?
                    <div className="col-md-6">
                        <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                            <div className="col-auto d-none d-lg-block">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5qKfKjuNV4G-aBNAyxODGQxjZKcAi1NP7U0A5b2T9KQ&s"
                                    className="bd-placeholder-img"
                                    width="200"
                                    height="250"
                                    xmlns="http://www.w3.org/2000/svg"
                                    role="img"
                                    aria-label="Placeholder: Thumbnail"
                                    preserveAspectRatio="xMidYMid slice"
                                    focusable="false"
                                    alt="" />
                            </div>
                            <div className="col p-4 d-flex flex-column position-static">
                                <strong className="d-inline-block mb-2 text-primary-emphasis">
                                    <p className="placeholder-glow">
                                        <span className="placeholder col-12"></span>
                                    </p>
                                </strong>
                                <h3 className="mb-0">
                                    <p className="placeholder-glow">
                                        <span className="placeholder col-12"></span>
                                    </p>
                                </h3>

                                <p className="card-text mb-auto placeholder-glow">                                
                                        <span className="placeholder col-12" style={{height: '60px'}}></span>
                                </p>
                                <a href="#" className="icon-link gap-1 icon-link-hover stretched-link">
                                    View Details
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-right" viewBox="0 0 16 16">
                                        <path d="M6 12.796V3.204L11.481 8 6 12.796zm.659.753 5.48-4.796a1 1 0 0 0 0-1.506L6.66 2.451C6.011 1.885 5 2.345 5 3.204v9.592a1 1 0 0 0 1.659.753z" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                    :
                    <div className="col-md-6">
                        <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                            <div className="col-auto d-none d-lg-block">
                                <img src={props.img}
                                    className="bd-placeholder-img"
                                    width="200"
                                    height="250"
                                    xmlns="http://www.w3.org/2000/svg"
                                    role="img"
                                    aria-label="Placeholder: Thumbnail"
                                    preserveAspectRatio="xMidYMid slice"
                                    focusable="false"
                                    alt="" />
                            </div>
                            <div style={{
                                position: 'absolute',
                                width: '100%',
                                height: '100%',
                                background: 'black',
                                opacity: '4%',
                            }}></div>
                            <div className="col p-4 d-flex flex-column position-static">
                                <strong className="d-inline-block mb-2 text-primary-emphasis">
                                    {parseTime(parseInt(props.time), 'date')}
                                </strong>
                                <h3 className="mb-0">{props.name}</h3>

                                <p className="card-text mb-auto">
                                    {props.desc}
                                </p>
                                <Link to={props.link} className="icon-link gap-1 icon-link-hover stretched-link">
                                    View Details
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-right" viewBox="0 0 16 16">
                                        <path d="M6 12.796V3.204L11.481 8 6 12.796zm.659.753 5.48-4.796a1 1 0 0 0 0-1.506L6.66 2.451C6.011 1.885 5 2.345 5 3.204v9.592a1 1 0 0 0 1.659.753z" />
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    </div>
            }
        </>
    )
}

export default Card
