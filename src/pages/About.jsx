import React from 'react'
import Banner from '../components/banner';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

const About = () => {
  return (
    <>
      {/* <h1>About</h1> */}

      <Nav />

      <Banner height='60vh' img='https://pbs.twimg.com/media/FXMBpDaXoAY8isj?format=jpg&name=4096x4096'>
        <h1 className="fw-bolder mb-5">ABOUT US</h1>
        <h1>Enrich players' lives by creating memorable and meaningful gaming experiences</h1>
      </Banner>

      <div className="container my-5">

        <div class="left row featurette my-5">
          <div class="col-md-5 order-md-2 d-flex flex-column justify-content-center">
            <h1 class="featurette-heading fw-normal lh-1">Oh yeah, it’s that good. <span class="text-body-secondary">See for yourself.</span></h1>
            <p class="lead">Another featurette? Of course. More placeholder content here to give you an idea of how this layout would work with some actual real-world content in place.</p>
          </div>
          <div class="col-md-7 order-md-1">
            <img src="https://emle.org/wp-content/uploads/revslider/news/demo-img-2-3.png" width={670} alt="" />
          </div>
        </div>

        <div class="right row featurette my-5">
          <div class="col-md-5 d-flex flex-column justify-content-center">
            <h1 class="featurette-heading fw-normal lh-1">First featurette heading. <span class="text-body-secondary">It’ll blow your mind.</span></h1>
            <p class="lead">Some great placeholder content for the first featurette here. Imagine some exciting prose here.</p>
          </div>
          <div class="col-md-7">
            <img src="https://emle.org/wp-content/uploads/revslider/news/demo-img-2-3.png" width={670} alt="" />
          </div>
        </div>
        {/* fix */}

        <div class="left row featurette my-5">
          <div class="col-md-5 order-md-2 d-flex flex-column justify-content-center">
            <h1 class="featurette-heading fw-normal lh-1">Oh yeah, it’s that good. <span class="text-body-secondary">See for yourself.</span></h1>
            <p class="lead">Another featurette? Of course. More placeholder content here to give you an idea of how this layout would work with some actual real-world content in place.</p>
          </div>
          <div class="col-md-7 order-md-1">
            <img src="https://emle.org/wp-content/uploads/revslider/news/demo-img-2-3.png" width={670} alt="" />
          </div>
        </div>

        <div class="right row featurette my-5">
          <div class="col-md-5 d-flex flex-column justify-content-center">
            <h1 class="featurette-heading fw-normal lh-1">First featurette heading. <span class="text-body-secondary">It’ll blow your mind.</span></h1>
            <p class="lead">Some great placeholder content for the first featurette here. Imagine some exciting prose here.</p>
          </div>
          <div class="col-md-7">
            <img src="https://emle.org/wp-content/uploads/revslider/news/demo-img-2-3.png" width={670} alt="" />
          </div>
        </div>

        <div class="left row featurette my-5">
          <div class="col-md-5 order-md-2 d-flex flex-column justify-content-center">
            <h1 class="featurette-heading fw-normal lh-1">Oh yeah, it’s that good. <span class="text-body-secondary">See for yourself.</span></h1>
            <p class="lead">Another featurette? Of course. More placeholder content here to give you an idea of how this layout would work with some actual real-world content in place.</p>
          </div>
          <div class="col-md-7 order-md-1">
            <img src="https://emle.org/wp-content/uploads/revslider/news/demo-img-2-3.png" width={670} alt="" />
          </div>
        </div>

        <div class="right row featurette my-5">
          <div class="col-md-5 d-flex flex-column justify-content-center">
            <h1 class="featurette-heading fw-normal lh-1">First featurette heading. <span class="text-body-secondary">It’ll blow your mind.</span></h1>
            <p class="lead">Some great placeholder content for the first featurette here. Imagine some exciting prose here.</p>
          </div>
          <div class="col-md-7">
            <img src="https://emle.org/wp-content/uploads/revslider/news/demo-img-2-3.png" width={670} alt="" />
          </div>
        </div>

      </div>

      <Footer />

    </>


  )
}

export default About
