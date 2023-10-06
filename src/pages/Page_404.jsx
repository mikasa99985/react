import React from 'react'
import {Link} from 'react-router-dom'

const Page_404 = () => {
    window.scrollTo(0, 0)
    return (
        <div>
            <div className="container d-flex align-items-center justify-content-center min-vh-100 bg-white px-4 py-5 py-sm-5">
                <div className="text-center">
                    <p className="text-base fw-bolder text-danger" style={{fontSize: "30px"}}>404</p>
                    <h1 className="mt-4 fw-bolder" style={{fontSize: "40px"}}>Page not found</h1>
                    <p className="mt-4 fw-bolder text-secondary">Sorry, we couldn’t find the page you’re looking for.</p>
                    <div className="mt-5 d-flex flex-column flex-sm-row justify-content-center gap-3">
                        <Link to="/" className=" fw-medium btn btn-dark px-3.5 py-2.5 shadow-sm hover:bg-primary-dark focus-visible-shadow focus-visible-outline focus-visible-outline-offset-2 focus-visible-outline-primary">
                            Go back home
                        </Link>
                        <Link to="/contact" className="btn btn-link text-sm font-weight-semibold text-dark">
                            Contact support <span aria-hidden="true">&rarr;</span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Page_404
