import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const Whatwe = () => {
  return (
      <>
          <section className='what-bg'>
          <Container>
              <Row className='align-items-center py-122'>
                  <Col lg={3}>
                      <h2 className='black_light_text ff-josphins fw-bold fs-48 mb-0'>
                          <span className='blue_text'>What 
                          </span> we do?
                      </h2>
                      
                  </Col>
                  <Col lg={9}>
                      <p className='black_op8 mb-0 fs-16 line-179 ff-poppins fw-normal'>
                          We believe in developing useful software instead of just fulfilling initial requirements. During the past 10 years, with an agile mindset, we have delivered 100+ different projects, ranging from startups to enterprises.
                          
                      </p>
                  </Col>
              </Row>
              </Container>
              </section>
      </>
  )
}

export default Whatwe