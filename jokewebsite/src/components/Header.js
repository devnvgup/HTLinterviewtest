import React from 'react';
import {Row,Col} from "react-bootstrap";
import "../css/Header.css"

function Header() {
  return <div className='header'>
      <Row>
          <Col>    
                    <h1 className='header--title'>A joke a day keeps the doctor away</h1>
                    <p className='header--content'>If you joke wrong way, your teeth have to pay.(Serious)</p>
          </Col>
      </Row>
  </div>;
}

export default Header;