import React from 'react'

const About = () => {
  return (
    <>
      <h1>About</h1>
    
      <section className="container py-10 bg-light">
    <div className="row align-items-center">
        <div className="col-lg-6 mb-4">
            <div className="position-relative">
                <img src="https://i.postimg.cc/QtyYkbxp/pexels-andrea-piacquadio-927022.jpg" alt="" className="img-fluid rounded"/>
                <div className="position-absolute w-100 h-100 bg-primary rounded-bottom-3"></div>
                <div className="position-absolute text-primary translate-middle cursor-pointer top-50 start-50">
                    <svg xmlns="http://www.w3.org/2000/svg" width="72" height="72" fill="currentColor" className="bi bi-play-circle-fill" viewBox="0 0 16 16">
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5z"></path>
                    </svg>
                </div>
            </div>
        </div>
        <div className="col-lg-6 mb-4">
            <div className="position-relative">
                <h1 className="position-absolute top-0 start-0 text-secondary fs-1 d-none d-md-block opacity-50"></h1>
                <h1 className="border-start border-primary ps-2 mb-4 fs-4 fs-lg-1 text-primary fw-bold">Welcome to our site</h1>
            </div>
            <p className="mb-4 fs-5 text-secondary">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniamLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniamLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            </p>
            <a href="#" className="btn btn-primary rounded-pill">Learn more</a>
        </div>
    </div>
</section>

    </>


  )
}

export default About
