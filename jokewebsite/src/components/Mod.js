import React from 'react';
import {Modal,Button} from "react-bootstrap";


function Mod({show,setShow}) {
  
  const handleClose=()=>{
     setShow(false)

  }
  return <div>
      <Modal show={show}>
        <Modal.Body>That's all the jokes for today! Come back another day!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Back
          </Button>
        </Modal.Footer>
      </Modal>
    
  </div>;
}

export default Mod;