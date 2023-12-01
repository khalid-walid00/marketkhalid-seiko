import { useState } from "react"
import axios from "axios";
import { Axios } from "../Axios";
export default function Login2(){
    
  let [username,setusername] =useState("")
  let [password,setpassword] =useState("")
   
  async function Form(e){
    e.preventDefault()
      let data=new FormData()
      data.append("username","seiko")
      data.append("password","123456")
      try{
          var x=await axios.post(`http://127.0.0.1:8000/api/token/`,data)
          console.log(x)
      }catch(error){
          console.log(x)
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