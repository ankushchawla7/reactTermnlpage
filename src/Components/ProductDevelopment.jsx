import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Product from '../images/png/productdevlopment.png'

const ProductDevelopment = () => {
    return (
        
        <>
            <section>
                <Container>
                    <Row className='align-items-center'>
                        
                        <Col lg={8} className='order-lg-1 order-2'>
                            <h2 className='fs-48 fw-bold  ff-josphins black_light_text'><span className='blue_text'>Product </span>
                                Development</h2>
                            <p className='line-179 ff-poppins fw-normal light_grey fs_16'>The company’s agile, comprehensive, and future-proof product engineering services <span className="d-xl-block"></span> are providing support for both fresh startups, from the initial idea to post-delivery <span className="d-xl-block"></span> upgrades, and mature companies in need of product development.</p>
                            

                        </Col>
                        <Col lg={4} className='order-lg-2 order-1 mb-4 mb-lg-0'>
                            <img src={Product } alt='product-img' className='w-100' />
                            
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
  )
}

export default ProductDevelopment