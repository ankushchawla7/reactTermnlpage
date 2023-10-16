import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import FooterLogo from '../images/png/logo-img.png'
import { Message, Call, Loco } from './Icons'


const Footer = () => {
    return (
        <>
            <section className='bg_light_black mt-5'>
                <Container>
                    <Row className='py-5 align-items-center'>
                        <Col lg={8} md={6}>
                            <img src={FooterLogo} alt="footer-log" className='logo-property' />
                            <p className='fs-16 ff-poppins fw-normal text-white op8'>
                                Dolor lacus nisl at elementum, aliquet ac. <span className="d-md-block"></span> Consectetur viverra ornare vel morbi ut in <span className="d-md-block"></span> tincidunt viverra.
                            </p>
                        </Col>
                        <Col lg={4} md={6}>
                            <div className='d-flex align-items-center'>
                                <a href="http://gmail.com" target='blank'> <Message /></a>
                                <p className='mb-0 ms-3 text-white line-166 op8'>termnl@gmail.com</p>

                            </div>
                            <div className='d-flex align-items-center'>
                                <a href="tel:+123456789" target='blank'><Call /></a>
                                <p className=' ms-3 mb-0 text-white line-166 op8'>1234567890</p>
                            </div>
                            <div className='d-flex align-items-center'>

                                <a href="https://www.google.com/maps" target='blank'><Loco /></a>
                                <p className=' ms-3 text-white ff-poppins fs-16 fw-normal op8 mb-0'>Ultrices condimentum non, ac</p>

                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className='copyright_bg'>
                <p className='fs-16 fw-normal ff-poppins text-white op8 line-166 mb-0 py-4 text-center'>Copyright @ 2021</p>

            </section>

        </>
    )
}

export default Footer