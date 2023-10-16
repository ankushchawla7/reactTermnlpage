import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import ApplicationDevlopmentImg from '../images/png/ApplicationDevlopment-img.png'

const ApplicationDevlopment = () => {
  return (
    <>
      <section className='py-4'>
        <Container>
          <Row className='align-items-center'>
            <Col lg={5} className='mb-lg-0 mb-4'>
              <img src={ApplicationDevlopmentImg} alt="Application-devlopment-img" className='w-100' />
            </Col>
            <Col lg={7}>
              <h2 className='fs-48 fw-bold  ff-josphins black_light_text'><span className='blue_text'> Application </span>
                Development</h2>
              <p className='fs-16 ff-poppins fw-normal line-179 light_grey'>Invent, build, integrate, scale, and upgrade your applications with AgileCube! For more than a decade, we have been harnessing digital technologies for the benefit of Fortune 500 businesses, mid and large enterprises, and startups across a variety of industries.</p>
            </Col>
          </Row>
        </Container>

      </section>
    </>
  )
}

export default ApplicationDevlopment