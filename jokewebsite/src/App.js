import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Content from './components/Content';
import {useState,useEffect} from "react";
import Mod from "../src/components/Mod";
import Footer from './components/Footer';
import './App.css';

function App() {
  const [data,setData]=useState([])
  const[renderModal,setRenderModal]=useState(false)
  
  useEffect(()=>{
    fetch("http://localhost:3000/data")
    .then(res=>res.json())
    .then(data=>setData(data))
  },[])
  
 const handleNext=(val)=>{
   if(val>data.length){
    setRenderModal(true)
  }
 }
 
  return (
   <div className='app'>
        <Header/>
        <Content value={data} handle={handleNext}  />
        {renderModal&&<Mod show={renderModal} setShow={setRenderModal}/>}
        <Footer/>
   </div>
  );
}

export default App;