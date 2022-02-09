import React from 'react';
import {Row,Col,Button} from "react-bootstrap";
import "../css/Content.css"
import {useState} from "react";

function Content({value,handle}) {
    var [val,setVal]=useState(1)
    
    const handleNext=()=>{
        
        setVal(val+1)
        handle(val+1)
    }
    const handlePrev=()=>{
        if(val<2){
            val=2
        }
        setVal(val-1)
        
    }
    var likeCount=0
    var dislikeCount=0
   
    
    const handleLike=()=>{
        likeCount++
        
            
        fetch(`http://localhost:3000/data/${val}`,{
            method:"PATCH",
            body: JSON.stringify({
                
                like: likeCount,
              }),
              headers: {
                'Content-type': 'application/json; charset=UTF-8',
              }
            
        })
    }
    const handleDislike=()=>{
        dislikeCount++
    fetch(`http://localhost:3000/data/${val}`,{
        method:"PATCH",
        body: JSON.stringify({
            dislike: dislikeCount,
          }),
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
          }
        
    })
}

  return <div>
      <Row>
          <Col className='content--body'>
            {value.map((item,index)=>(
                    <div>
                        {item.id===val&&<p className='content--text' key={index}>{item.content}</p>}
                    </div>
                    
                    
            ))}
            <Button variant="outline-secondary" className='mt-4 btn--prev' onClick={handlePrev} >Prev song</Button>
             <Button variant="outline-secondary" className='mt-4 btn' onClick={handleNext}>Next story</Button>
            
             <hr></hr>
            
                    <Button variant="primary" className='fnbtn' onClick={()=>handleLike()}>This is Funny!</Button>
                
                 
                    <Button variant="success" className='notfnbtn' onClick={()=>handleDislike()}>This is not Funny</Button>
               
          </Col>
      </Row>
      <hr></hr>
  </div>;
}

export default Content;