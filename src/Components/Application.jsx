import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import AppliImg from '../images/png/Application-img.png'


const Application = () => {
    return (
        <>
            <section className='py-4'>
                <Container>
                    <Row className='align-items-center'>
                        <Col lg={5} className='mb-4 mb-lg-0'>
                            <img src={AppliImg} alt='Application-img' className='w-100' />
                        </Col>
                        <Col lg={7}>
                            <h2 className='fs-48 ff-josphins fw-bold mb-4 '>Application
                                <span className='blue_text'> Modernization</span></h2>
                            <p className='fs-16  ff-poppins fw-normal line-179'>
                                AgileCube has 10 years of experience in consulting, to enable a continuous usage of past IT investments and support clients to avoid unnecessary project restarts and costs. AgileCube has 10 years of experience in consulting, to enable Modernizing or reengineering an application includes code assessment, preparation for cloud migration under a refreshed, up-to-date infrastructure and software environment, and application containerization for faster loading times.
                            </p>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default Application