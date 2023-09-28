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
            <img src="https://img.freepik.com/premium-photo/gaming-desktop-pc-computer-setup-gamer-illustration_691560-5795.jpg" width={670} alt="" />
          </div>
        </div>

        <div class="right row featurette my-5">
          <div class="col-md-5 d-flex flex-column justify-content-center">
            <h1 class="featurette-heading fw-normal lh-1">First featurette heading. <span class="text-body-secondary">It’ll blow your mind.</span></h1>
            <p class="lead">Some great placeholder content for the first featurette here. Imagine some exciting prose here.</p>
          </div>
          <div class="col-md-7">
            <img src="https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTA4L3Jhd3BpeGVsX29mZmljZV8yN19waG90b19vZl9idXNpbmVzc3dvbWFuX3dpdGhfaGVhZHBob25lc19zbWlsaV84ZmUwOWM5OS05NjhmLTRmNDEtOWRkMC1kMjMwNWFkMDFkMzNfMi5qcGc.jpg" width={670} alt="" />
          </div>
        </div>
        {/* fix */}

        <div class="left row featurette my-5">
          <div class="col-md-5 order-md-2 d-flex flex-column justify-content-center">
            <h1 class="featurette-heading fw-normal lh-1">Oh yeah, it’s that good. <span class="text-body-secondary">See for yourself.</span></h1>
            <p class="lead">Another featurette? Of course. More placeholder content here to give you an idea of how this layout would work with some actual real-world content in place.</p>
          </div>
          <div class="col-md-7 order-md-1">
            <img src="https://previews.123rf.com/images/parilovv/parilovv2001/parilovv200100875/138472206-professional-gamers-cafe-room-with-powerful-personal-computer-game-chair-blue-color-concept-cyber.jpg" width={670} alt="" />
          </div>
        </div>

        <div class="right row featurette my-5">
          <div class="col-md-5 d-flex flex-column justify-content-center">
            <h1 class="featurette-heading fw-normal lh-1">First featurette heading. <span class="text-body-secondary">It’ll blow your mind.</span></h1>
            <p class="lead">Some great placeholder content for the first featurette here. Imagine some exciting prose here.</p>
          </div>
          <div class="col-md-7">
            <img src="https://thumbs.dreamstime.com/b/happy-professional-cyber-sport-gamer-playing-online-computer-game-headphones-blurred-red-blue-background-196931002.jpg" width={670} alt="" />
          </div>
        </div>

        <div class="left row featurette my-5">
          <div class="col-md-5 order-md-2 d-flex flex-column justify-content-center">
            <h1 class="featurette-heading fw-normal lh-1">Oh yeah, it’s that good. <span class="text-body-secondary">See for yourself.</span></h1>
            <p class="lead">Another featurette? Of course. More placeholder content here to give you an idea of how this layout would work with some actual real-world content in place.</p>
          </div>
          <div class="col-md-7 order-md-1">
            <img src="https://c4.wallpaperflare.com/wallpaper/162/894/557/neon-keyboards-computer-pc-gaming-wallpaper-preview.jpg" width={670} alt="" />
          </div>
        </div>

        <div class="right row featurette my-5">
          <div class="col-md-5 d-flex flex-column justify-content-center">
            <h1 class="featurette-heading fw-normal lh-1">First featurette heading. <span class="text-body-secondary">It’ll blow your mind.</span></h1>
            <p class="lead">Some great placeholder content for the first featurette here. Imagine some exciting prose here.</p>
          </div>
          <div class="col-md-7">
            <img src="https://media.istockphoto.com/id/1387529248/photo/portrait-of-a-teenage-boy-playing-on-the-computer-at-home.jpg?s=612x612&w=0&k=20&c=WpQge8N6xINYshRZZMWTIf8a44fPBqMou4FG-nOaBMo=" width={670} alt="" />
          </div>
        </div>

      </div>

      <Footer />

    </>


  )
}

export default About
