
import { useEffect, useRef, useState } from "react";
import imgupload from "../imgs/image.png"
import { faCartArrowDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Axios } from "../Axios";
import { color } from "framer-motion";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
export default function AddProduct(){
    const [img,setimg]=useState(false)
    const [imgshow,setimgshow]=useState()
    const [name,setname] =useState()
    const [description,setdescription] =useState("")
    const [price,setprice] =useState("")
    const [discount,setdiscount] =useState("")
    const [status,setstatus] =useState(false)
    const [count,setcount] =useState("") 
    const [sale,setsale] =useState(false) 
  const [daata,setdaata]=useState("")
  const nav=useNavigate()
  
const x = useRef(null)
let {id} =useParams()
console.log()
const [imguser,setimguser]=useState("")
   const [username,setusername]=useState("")
   const [first,setfirst]=useState("")
   const [second,setsecond]=useState("")
   const [email,setemail]=useState("")
   useEffect(()=>{
      try{
        Axios.get("http://127.0.0.1:8000/api/profile/").then((res)=>(setimguser(res.data.image),setusername(res.data.user.username),
        setfirst(res.data.user.first_name),setsecond(res.data.user.last_name),setemail(res.data.user.email)))
      }catch(err){
      console.log(err)
      }
    },[1])

function uploadimng(){
  x.current.click()
}
const cc = <img className="rounded-4" src={imgshow ? URL.createObjectURL(imgshow) : daata.image} width={"200px"} height={"190px"}/>

async function Form(e){  
  e.preventDefault()
  const data=new FormData()
  data.append("title",name)
  data.append("image",img)
  data.append("description",description)
  data.append("price",price)
  data.append("discount",discount)
  data.append("status",status)
  data.append("count",count)
  data.append("is_sale",sale)
  try {
    var x= await Axios.put(`http://127.0.0.1:8000/api/products/${id}`,data,{
     headers:{
      "Content-Type": "multipart/form-data",
     }
}
)
nav("/store")
 }catch (error) {  console.log(error)}
}

useEffect(() => {  
  try{
Axios.get(`http://127.0.0.1:8000/api/products/${id}`).then((res)=>(setdaata(res.data),setname(res.data.title),setcount(res.data.count),
setprice(res.data.price),setdiscount(res.data.discount),setdescription(res.data.description),setstatus(res.data.status),setsale(res.data.is_sale))) 
  }catch(error){
   console.log(error)
  }
   }, [0])

function toggle(){
  setsale((v)=>((!v)))
}


    return(<>
      <div className="row">
      <div className="col-lg-3">
       <div className="card shadow-lg position-fixed  infoadmin" style={{width:"350px"}}>
            <div className="trangle"></div>
           <div className="row justify-content-center p-5">
            <div className="rounded-circle  border-2  border-seg p-4" style={{width:"max-content"}}>
           <img className="rounded-circle" style={{width:"80px"}} src={imguser}/>
           </div>
           </div>
           <div className="row justify-content-center text-white fs-2 p-2">
            <div >welcome mr: <span className="fs-4 text-color">{username}</span> </div>
            <div>first_name: <span className="fs-4 text-color">{first}</span> </div>
            <div>second_name: <span className="fs-4 text-color">{second}</span> </div>
            <div>email: <span className="fs-4 text-color">{email}</span> </div>
            <div className="fs-5 mt-5">are you ready to edit</div>
           </div>
         </div></div>
      <div className="row bg-purple p-2 border-light border border-1 rounded-4 text-white" style={{width:"800px",height:"max-content"}}>
     
      <form onSubmit={Form}><div className="text-white fs-1 text-center my-3 fst-italic fw-bold"><FontAwesomeIcon className="mx-2 active fs-3" icon={faCartArrowDown} />Add product</div>
      <div className="row">
      <div className="col text-center">
        <input  type="file" ref={x}  onChange={(e)=>(setimgshow(e.target.files.item(0)),setimg(e.target.files[0]))} className="input d-none rounded-2 w-100 mt-4 text-center" />
       <span onClick={uploadimng} >{cc}</span>
        
      </div>
      </div>
     <div className="row">
      <div className="col">
        <input required type="text" value={name} onChange={(e)=>setname(e.target.value)} placeholder="name of product" className="input rounded-2 w-100 mt-3 text-center text-white"/>
      </div>
      </div>
      <div className="row">
      <div className="col">
        <input required type="number" value={price} onChange={(e)=>setprice(e.target.value)} placeholder="price of product" className="input rounded-2 w-100 mt-3 text-center text-white"/>
      </div>
      <div className="col">
        <input required type="number" value={discount} onChange={(e)=>setdiscount(e.target.value)} placeholder="discount of product" className="input rounded-2 w-100 mt-3 text-center text-white"/>
      </div>
      <div className="col">
        <input required type="number" value={count} onChange={(e)=>setcount(e.target.value)} placeholder="number of product" className="input rounded-2 w-100 mt-3 text-center text-white"/>
      </div>
      </div>
      <div className="row">
      <div className="col">
        <textarea required type="text"  value={description} onChange={(e)=>setdescription(e.target.value)} placeholder="discription" className="input rounded-2 w-100 mt-4 text-center text-white"/>
      </div>
      </div>
      <div className="row form-switch mt-3 mx-4">
        <div className="col form-check">
          <input  className="form-check-input mt-2 check" onClick={toggle}  type="checkbox" role="switch" id="flexSwitchCheckDefault" />
  <label className="form-check-label fs-4"style={{color:sale?"green":"red"}} for="flexSwitchCheckDefault">sale</label>
  </div>
  <div className="col">
  <select type="text" required className="select form-select rounded-2 w-100 text-center" placeholder="id" value={status} onChange={(e)=>setstatus(e.target.value)}>
   <option selected value={false}>select type </option>
  <option value="games">games</option>
  <option value="consoles">consoles</option>
  <option value="controllers">controllers</option>
  <option value="accessories">accessories</option>
        </select>
      </div>
</div>
      

      <div className="row my-2 justify-content-center px-3">  
        <button type="submit" disabled={!status||!img||!description||!price|| !discount|| !count||!name} className="btn bg-purple btn-outline-primary px-5 py-2">add</button>
      </div>
      </form>
  
 </div>
   </div></>) 
}