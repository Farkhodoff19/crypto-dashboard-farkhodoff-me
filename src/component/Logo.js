import React from 'react';
import logo from './images/logo.png'
import {Container , Row , Col} from 'reactstrap'

const Logo = () => {
  return (
    <>
         <Container>
            <Row>
              <Col className="text-center mt-4"  md="12">
                  <img className='logo' src={logo} alt="logo"/>
              </Col>
            </Row>
          </Container>
    </>
  )
}

export default Logo;