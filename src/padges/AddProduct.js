
import { useRef, useState } from "react";
import imgupload from "../imgs/image.png"
import { faCartArrowDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Axios } from "../Axios";
import { color } from "framer-motion";
import axios from "axios";
export default function AddProduct(){
    const [img,setimg]=useState()
    const [name,setname] =useState("")
    const [discription,setdiscription] =useState("")
    const [price,setprice] =useState("")
    const [discount,setdiscount] =useState("")
    const [status,setstatus] =useState("")
    const [count,setcount] =useState("") 
    const [sale,setsale] =useState(false) 
const x = useRef(null)
function uploadimng(){
  x.current.click()
}
const cc =  <img className="rounded-4" src={img ? URL.createObjectURL(img) : imgupload} width={"200px"} height={"190px"}/>

async function Form(e){  
  e.preventDefault()
  try {
    var x= await Axios.postForm("products/create/",{
   title:name,
   img:img,
   discription:discription,
   price:price,
   discount:discount,
   status:status,  
   count:count,
   sale:sale,
})

console.log(x);
 }catch (error) {  console.log(error)}

 

}
function toggle(){
  setsale((v)=>(setsale(!v)))
}

console.log(name)
console.log(price)
console.log(discount)
console.log(discription)
console.log(status)
console.log(count)
console.log(sale)
    return(<>
   
      <div className="row bg-purple p-2 border-light border border-1 rounded-4 text-white" style={{width:"800px",height:"max-content"}}>
      <form onSubmit={Form}><div className="text-white fs-1 text-center my-3 fst-italic fw-bold"><FontAwesomeIcon className="mx-2 active fs-3" icon={faCartArrowDown} />Add product</div>
      <div className="row">
      <div className="col text-center">
        <input type="file" ref={x}  onChange={(e)=>setimg(e.target.files.item(0))} className="input d-none rounded-2 w-100 mt-4 text-center" />
       <span onClick={uploadimng} >{cc}</span>
        
      </div>
      </div>
     <div className="row">
      <div className="col">
        <input type="text" value={name} onChange={(e)=>setname(e.target.value)} placeholder="name of product" className="input rounded-2 w-100 mt-3 text-center text-white"/>
      </div>
      </div>
      <div className="row">
      <div className="col">
        <input type="number" value={price} onChange={(e)=>setprice(e.target.value)} placeholder="price of product" className="input rounded-2 w-100 mt-3 text-center text-white"/>
      </div>
      <div className="col">
        <input type="number" value={discount} onChange={(e)=>setdiscount(e.target.value)} placeholder="discount of product" className="input rounded-2 w-100 mt-3 text-center text-white"/>
      </div>
      <div className="col">
        <input type="number" value={count} onChange={(e)=>setcount(e.target.value)} placeholder="number of product" className="input rounded-2 w-100 mt-3 text-center text-white"/>
      </div>
      </div>
      <div className="row">
      <div className="col">
        <textarea type="text"  value={discription} onChange={(e)=>setdiscription(e.target.value)} placeholder="discription" className="input rounded-2 w-100 mt-4 text-center text-white"/>
      </div>
      </div>
      <div className="row form-switch mt-3 mx-4">
        <div className="col form-check">
          <input className="form-check-input mt-2 check" onClick={toggle}  type="checkbox" role="switch" id="flexSwitchCheckDefault" />
  <label className="form-check-label fs-4"style={{color:sale?"red":"green"}} for="flexSwitchCheckDefault">sale</label>
  </div>
  <div className="col">
  <select type="text" className="select form-select rounded-2 w-100 text-center" placeholder="id" value={status} onChange={(e)=>setstatus(e.target.value)}>
   <option selected>select type </option>
  <option value="games">games</option>
  <option value="consoles">consoles</option>
  <option value="controllers">controllers</option>
  <option value="accessories">accessories</option>
        </select>
      </div>
</div>
      

      <div className="row my-2 justify-content-center px-3">  
        <button type="submit" className="btn bg-purple btn-outline-primary px-5 py-2">add</button>
      </div>
      </form>
  
 </div>
   </>) 
}