import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import $ from "jquery"
import { Axios } from "../Axios";
import { parse } from "@fortawesome/fontawesome-svg-core";
export default function More(){
const [range,setrange]=useState(10000)
const [dataa1,setdataa1]=useState("")
let [search,setsearch]=useState("all")
const [name,setname]=useState("")
const [price,setprice]=useState("")
const [image,setimage]=useState("")
const [number,setnumber]=useState("")
useEffect(()=>{$(".range").on("click",()=>{
  $(".bonus1").fadeIn(200)
  $(".bonus").fadeOut(200)
  $(".down").slideDown(1000)
  $(".down1").slideUp(1000)
})
$(".range1").on("click",()=>{
  $(".bonus1").fadeOut(200)
  $(".bonus").fadeIn(200)
  $(".down").slideUp(1000)
  $(".down1").slideDown(1000)
})

},[])

useEffect(() => {  
  try{
 
 Axios.get(`http://127.0.0.1:8000/api/products/`)
.then((res)=>(setdataa1(res.data.results.filter((item) => { 
if(search=="all"){

   return item;

}else if(search=="sale"){
  return item.is_sale
}else{
  return item.status== search
}

  }).filter((item) => { 
  
       return item.price<=Number(range)
      
      }).map((item,key) => { 
    return (
      
      <div className="col d-flex justify-content-center mt-3" key={key}>
      <div className='card bg-transparent text-center text-white'style={{width:"300px"}} >
      {item.is_sale &&<div className='position-absolute bg-segliner top-25 bg-segliner z-3 rounded-end-4'>sale</div>}
       <div className='overflow-hidden' style={{height:"300px"}}>
        <img src={item.image} className='card-img zoom w-100 h-100'/>
        </div>
        <div className='card-body'>
          <div className='card-title fs-4 fw-bold'>
          {item.title}
          </div>
          {item.is_sale? <div className='card-text fs-5'>$ <span className='bg-danger text-decoration-line-through'>{item.price}</span> {(item.price - item.discount)}</div>:
          <div className='card-text fs-5'>$ {item.price}</div>
          }
        
        <button  Number="1"  price={item.price} name={item.title} image={item.image} onClick={(e) => {
        setname(e.target.getAttribute("name"));
        setprice(e.target.getAttribute("price"));
        setimage(e.target.getAttribute("image"));
        setnumber(e.target.getAttribute("Number"));
      }} className='text-decoration-none btn text-white px-5 fs-4 fw-bold rounded-5 bg-seg'
        >add to card</button> 
             <div className='card-text fs-6'>remaining number: {item.count}</div>
        </div>
      </div>
      </div> 
    )
  })
  )
  ))

  }catch(error){
   console.log(error)
  }

   }, [range,search]) 
   var arr = localStorage.card ? JSON.parse(localStorage.card) : [];

   let opj = {
     name: name,
     price: price,
     image: image,
     number: number,
   };
   const itemExists = arr.some(
     (item) =>
       item.name === opj.name && item.price === opj.price && item.image === opj.image && item.number === opj.number
   );
   
   if (!itemExists && opj.name !== "" && opj.price !== "" && opj.image !== "") {
     arr.push(opj);
     localStorage.setItem("card", JSON.stringify(arr));
     console.log(JSON.parse(localStorage.getItem("card")));
   }

return(<>  <div className="bg-black">
       <Navbar/>
        
         <div className="container text-white" style={{height:"max-content",marginBottom:"200px"}}>
           <div className=" fs-10 fw-bold" style={{height:"max-content"}}>BEST SELLERS</div>
           <div className="row my-5">
             <div className="col-3">
                <div className="row fs-2">Filter by</div>
                <hr></hr>
                <div className="row fs-5">

                <div className="d-flex range1">
                    <div className="col range1">Category</div>
                    <div className="col  fs-6 text-end"><FontAwesomeIcon className="bonus1" icon={faPlus} style={{color: "#ffffff",}} /></div>
                   </div>  <div className="down1 hidden">
                     
                     <ul className="nav d-block filter">
                      
                       <button value="all" onClick={(e)=>setsearch(e.target.value)} className="navbar-item">
                        ALL
                       </button>
                       <button value="accessories" onClick={(e)=>setsearch(e.target.value)} className="navbar-item">
                       Accessories
                       </button>
                       <button value="sale" onClick={(e)=>setsearch(e.target.value)} className="navbar-item">
                       on sale
                       </button>
                       <button value="controllers" onClick={(e)=>setsearch(e.target.value)} className="navbar-item">
                        Controllers
                       </button>
                       <button value="consoles" onClick={(e)=>setsearch(e.target.value)} className="navbar-item">
                        Consoles
                       </button>
                       <button value="games" onClick={(e)=>setsearch(e.target.value)} className="navbar-item">
                        Games
                       </button>
                      </ul>
                      </div>
                              
                   
                    </div>
                    <hr></hr>
                <div className="row fs-5">
                    <div className="d-flex range">
                    <div className="col range">Price</div>
                    <div className="col range fs-6 text-end"><FontAwesomeIcon className="bonus" icon={faPlus} style={{color: "#ffffff",}} /></div>
                   </div>
                    <div className="down hidden">
                      <div className="col">
                      <input type="range" step={200} min={20} max={10000} id="range" value={range} onChange={(e)=>setrange(e.target.value)}/>
                      </div>
                      <div className="col-1 mb-4 d-flex">
                       <span>$ </span> {range}
                      </div>
                      <hr></hr>
                      </div>
                   
                      
                    </div>
             </div>
             <div className="col">
              <div className="row justify-content-end">
                <select className="dropdown px-4 py-2 border border-secondary border-2 text-capitalize" style={{width:"200px"}}>
                <option className="dropdownoption" selected>SORT BY</option>
                <option className="dropdownoption"><Link to="/bestsellers" className='mx-3 nav-link pointer'>Games</Link></option>
                <option className="dropdownoption"><Link to="/bestsellers" className='mx-3 nav-link pointer'>Consoles</Link></option>
                <option className="dropdownoption"><Link to="/bestsellers" className='mx-3 nav-link pointer'>Controllers</Link></option>
                <option className="dropdownoption"><Link to="/bestsellers" className='mx-3 nav-link pointer'>Accessories</Link></option>
              </select></div>

              <div className="row mt-4">
               {dataa1}
              </div>
             </div>
           </div>
         </div>
       
  <Footer/>
    </div></>)
}