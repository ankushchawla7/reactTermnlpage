import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Container } from 'react-bootstrap';
import PageLogo from '../images/png/logo-img.png'

const Header = () => {
  const settings = {
    dots: true,
    infinite: true,
    arrows: false,
    autoplay: true,
    speed: 1500,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <>
      <div className='header min-xl-vh-100 d-flex flex-column h-675'>
        <section className='nav_bg '>
          <Container className='py-2 py-xxl-4 '>
            <img src={PageLogo} alt="page-logo" className='logo-property'/>

          </Container>

        </section>
        <section className='hero-bg flex-grow-1 d-flex align-items-center'>
          <Container className='pb-XL-100'>
            <Slider {...settings}>

              <div className='d-flex justify-content-center flex-column align-items-center'>
                <h1 className='text-white fs-96 ff-josphins fw-bold mb-4'>Et dictumst <span className='blue_text'> diam</span> <span className='d-block'><span className='blue_text'> pharetra </span>volutpat.</span></h1>
                <p className='text-white text-center fs-22 ff-poppins fw-semibold mb-5'>Dolor lacus nisl at elementum, aliquet ac. Consectetur viverra ornare vel morbi<span className='d-lg-block'></span> ut in tincidunt viverra. Aenean feugiat malesuada nunc aliquet vitae, commodo,<span className='d-lg-block'></span> pellentesque laoreet amet.</p>
                <button className='butn ff-roboto fs-22 fw-bold text-white'>GET STARTED</button>

              </div>

              <div className='d-flex justify-content-center flex-column align-items-center'>
                <h1 className='text-white fs-96 ff-josphins fw-bold mb-4'>Et dictumst <span className='blue_text'> diam</span> <span className='d-block'><span className='blue_text'> pharetra </span>volutpat.</span></h1>
                <p className='text-white text-center fs-22 ff-poppins fw-semibold mb-5'>Dolor lacus nisl at elementum, aliquet ac. Consectetur viverra ornare vel morbi<span className='d-lg-block'></span> ut in tincidunt viverra. Aenean feugiat malesuada nunc aliquet vitae, commodo,<span className='d-lg-block'></span> pellentesque laoreet amet.</p>
                <button className='butn ff-roboto fs-22 fw-bold text-white'>GET STARTED</button>

              </div>
              <div className='d-flex justify-content-center flex-column align-items-center'>
                <h1 className='text-white fs-96 ff-josphins fw-bold mb-4'>Et dictumst <span className='blue_text'> diam</span> <span className='d-block'><span className='blue_text'> pharetra </span>volutpat.</span></h1>
                <p className='text-white text-center fs-22 ff-poppins fw-semibold mb-5'>Dolor lacus nisl at elementum, aliquet ac. Consectetur viverra ornare vel morbi<span className='d-lg-block'></span> ut in tincidunt viverra. Aenean feugiat malesuada nunc aliquet vitae, commodo,<span className='d-lg-block'></span> pellentesque laoreet amet.</p>
                <button className='butn ff-roboto fs-22 fw-bold text-white'>GET STARTED</button>

              </div>
              <div className='d-flex justify-content-center flex-column align-items-center'>
                <h1 className='text-white fs-96 ff-josphins fw-bold mb-4'>Et dictumst <span className='blue_text'> diam</span> <span className='d-block'><span className='blue_text'> pharetra </span>volutpat.</span></h1>
                <p className='text-white text-center fs-22 ff-poppins fw-semibold mb-5'>Dolor lacus nisl at elementum, aliquet ac. Consectetur viverra ornare vel morbi<span className='d-lg-block'></span> ut in tincidunt viverra. Aenean feugiat malesuada nunc aliquet vitae, commodo,<span className='d-lg-block'></span> pellentesque laoreet amet.</p>
                <button className='butn ff-roboto fs-22 fw-bold text-white'>GET STARTED</button>

              </div>
            </Slider>
          </Container>
        </section>
      </div>
    </>
  )
}

export default Header