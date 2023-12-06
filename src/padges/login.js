import { useState } from "react"
import axios from "axios";
import { Axios } from "../Axios";
import Cookie from "cookie-universal"
import { useNavigate } from "react-router-dom";
export default function Login2(){
    
  let [username,setusername] =useState("")
  let [password,setpassword] =useState("")
   const cookie =Cookie()
   const nav=useNavigate()
  async function Form(e){
    e.preventDefault()
      let data=new FormData()
      data.append("username",username)
      data.append("password",password)
     try{
     let x=await axios.post("http://127.0.0.1:8000/api/token/",data);
     let token=x.data.access
     let refresh=x.data.refresh
     console.log(token)
    cookie.set("play",token)
    cookie.set("refresh",refresh)
    nav("/")
     }
     catch(err){
    
     }


  
   

}
    return(<>
    <div className="row position-fixed bg-purple border-light border border-1 rounded-4 text-white" style={{width:"75%",height:"max-content"}}>
    
      <form onSubmit={Form}><div className="text-white fs-1 text-center my-5 fst-italic fw-bold">Login</div>
     <div className="row">
      <div className="col">
        <input type="text" className="input rounded-2 w-100 text-center" placeholder="email" value={username} onChange={(e)=>setusername(e.target.value)}/>
      </div>
      </div>
      <div className="row">
      <div className="col">
        <input type="text" className="input rounded-2 w-100 mt-4 text-center" placeholder="password" value={password} onChange={(e)=>setpassword(e.target.value)}/>
      </div>
      </div>
      <div className="row mt-5 justify-content-center px-3">  
        <button type="submit" className="btn bg-purple btn-outline-primary px-5 py-2 mb-5">Login</button>
      </div>
      </form>
     </div>
  
    </>)
}