import React from 'react'
import {parseTime} from '../../utility/js/util'

const Card = (props) => {
    return (
        <>
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
                    <div className="col p-4 d-flex flex-column position-static">
                        <strong className="d-inline-block mb-2 text-primary-emphasis">
                            {parseTime(parseInt(props.time), 'date')}
                        </strong>
                        <h3 className="mb-0">{props.name}</h3>

                        <p className="card-text mb-auto">
                            {props.desc}
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
        </>
    )
}

export default Card
