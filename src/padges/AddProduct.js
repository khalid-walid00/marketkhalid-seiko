
import { useRef, useState } from "react";
import imgupload from "../imgs/image.png"
import { faCartArrowDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function AddProduct(){
  let [img,setimg]=useState()
const x = useRef(null)
function uploadimng(){
  x.current.click()

}

const cc =  <img className="rounded-4" src={img ? URL.createObjectURL(img) : imgupload} width={"200px"} height={"200px"}/>


    return(<>
   
      <div className="row bg-purple p-2 border-light border border-1 rounded-4 text-white" style={{width:"800px",height:"max-content"}}>
      <form ><div className="text-white fs-1 text-center my-3 fst-italic fw-bold"><FontAwesomeIcon className="mx-2 active fs-3" icon={faCartArrowDown} />Add product</div>
      <div className="row">
      <div className="col text-center">
        <input type="file" ref={x}  onChange={(e)=>setimg(e.target.files.item(0))} className="input d-none rounded-2 w-100 mt-4 text-center" />
       <span onClick={uploadimng} >{cc}</span>
        
      </div>
      </div>
     <div className="row">
      <div className="col">
        <input type="text" placeholder="name of product" className="input rounded-2 w-100 mt-4 text-center text-white"/>
      </div>
      </div>
      <div className="row">
      <div className="col">
        <input type="number" placeholder="price of product" className="input rounded-2 w-100 mt-4 text-center text-white"/>
      </div>
      <div className="col">
        <input type="number" placeholder="number of product" className="input rounded-2 w-100 mt-4 text-center text-white"/>
      </div>
      </div>
     
      <div className="row form-check form-switch mt-3 mx-4">
  <input className="form-check-input mt-2 check" type="checkbox" role="switch" id="flexSwitchCheckDefault" required/>
  <label className="form-check-label fs-4 text-danger" for="flexSwitchCheckDefault">sale</label>
      </div>

      

      <div className="row my-5 justify-content-center px-3">  
        <button type="submit" className="btn bg-purple btn-outline-primary px-5 py-2">Login</button>
      </div>
      </form>
  
 </div>
   </>) 
}