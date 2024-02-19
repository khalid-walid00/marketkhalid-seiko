import { faX } from "@fortawesome/free-solid-svg-icons";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";

export default function Card(){
  const [sum,setsum]=useState(0)
    const [cardElements,setcardElements]=useState()
    const [cardElements2,setcardElements2]=useState(1)
    const arr = JSON.parse(localStorage.getItem("card"))   
    useEffect(() => {
      setcardElements(arr.map((item, index) => (<>
                 <hr></hr>
                <div className="row py-4">
                    <img className="border border-1 border-white" style={{width:"130px"}} src={item.image}/>
                    <div className="col-lg-6 ms-3">
                        <div className="row fs-4">{item.name}</div>
                        <div className="row fs-4">${item.price}</div>
                    </div>
                    <div className="col"><input className="card-number text-center bg-transparent text-white border border-1 border-white"
             min={1} step={1} placeholder={1} max={10000} type="number" onChange={(e) =>(item.number=e.target.value,totals(),all())} style={{width:"80px"}}/>
             </div>
             <div className="col mforone "></div>
             <div className="col"><FontAwesomeIcon icon={faX}  style={{color: "#ffffff",cursor:"pointer"}} /></div>
                </div>
                <hr></hr>
      </>))) 
    
    }, [arr.length,]);
      function totals(n,i){
        setcardElements2(arr.map((item, index) => (<>       
      <div className="col mforone"><span style={{color:"white"}}>total</span> {item.price*item.number} </div>
</>)))} 
  
  function all(t){
    const f=  arr.map((item, index) => {
        return item.price*item.number  
     });
     setsum(f.reduce((accumulator, currentValue) => accumulator + currentValue, 0)) 
   }
    return(<>
    <div className="bg-black overflow-x-hidden">
    <Navbar/>
    <div style={{height:"100vh"}}>
        <div className="row my-5 mx-5">
            <div className="col-lg-9 text-white">
                <div className="row fs-1">My Card</div>
              {cardElements}
             
            </div>
          
            <div className="col text-white totalforone"> {cardElements2}</div>
            <div className="col text-white">
              <div className="row fs-1">Order summary</div>
              <hr></hr>
              <div className="row my-5">
                <div className="col">
                Subtotal
                </div>
                <div className="col">               
                ${sum}
                </div>
              </div>
              <hr></hr>
              <div className="row my-5 fs-4">
                <div className="col">
                TOTAL
                </div>
                <div className="col">               
                  ${sum}
                </div>
              </div>
              <div className="row">
                <button className="btnn">check out</button>
              </div>
            </div>
        </div>
    </div>
    <Footer/>
   </div> </>)
}