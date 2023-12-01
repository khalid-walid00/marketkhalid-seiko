import { useRef, useState } from "react"
import axios from "axios";
import imgupload from "../imgs/image.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCameraRetro } from "@fortawesome/free-solid-svg-icons";
export default function Login2(){
    
  let [id,setid] =useState("1")
  let [img,setimg]=useState()
  let [name,setname]=useState()
   
  async function Form(e){
    e.preventDefault()
      let data=new FormData()
      data.append("img",img)
      data.append("title",name)
      try{
     let x=await axios.post(`http://127.0.0.1:8000/api/images/${id}/`,data)
  console.log(x)
      }catch(error){
        console.log(error)
      }
  
}
const x = useRef(null)
function uploadimng(){
  x.current.click()

}

const cc =  <img className="rounded-4" src={img ? URL.createObjectURL(img) : imgupload} width={"270px"} height={"270px"}/>

    return(<>
    <div className="row position-fixed bg-purple border-light border border-1 rounded-4 text-white" style={{width:"800px",height:"max-content"}}>
    
      <form onSubmit={Form}><div className="text-white fs-1 text-center my-2 fst-italic fw-bold"><FontAwesomeIcon className="mx-2 active fs-3" icon={faCameraRetro} />upload photos</div>
     <div className="row">
      <div className="col">
        <select type="text" className="select form-select rounded-2 w-100 text-center" placeholder="id" value={id} onChange={(e)=>setid(e.target.value)}>
           <option selected>select id of photos </option>
  <option value="1">1</option>
  <option value="2">2</option>
  <option value="3">3</option>
  <option value="4">4</option>
  <option value="5">5</option>
  <option value="6">6</option>
  <option value="7">7</option>
  <option value="8">8</option>
  <option value="9">9</option>
  <option value="10">10</option>

        </select>
      </div>
      </div>
      <div className="row">
      <div className="col text-center">
      <input type="file" ref={x}  onChange={(e)=>setimg(e.target.files.item(0))} className="input d-none rounded-2 w-100 mt-4 text-center" />
       <span onClick={uploadimng} >{cc}</span>
       </div>
      </div>
      <div className="row">
      <div className="col text-center">
        <input type="text" className="input rounded-2  mt-4 text-white text-center" placeholder="The name if it exists" value={name} onChange={(e)=>setname(e.target.value)}/>
      </div>
      </div>
      <div className="row mt-5 justify-content-center px-3">  
        <button type="submit" className="btn bg-purple btn-outline-primary px-5 py-2 mb-5">up</button>
      </div>
      </form>
     </div>
  
    </>)
}