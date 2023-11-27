import { useState } from "react"
import { Loginn } from "../Api"
import { Axios } from "../Axios"
import Particlsback from "../particls/Particls";
export default function Login2(){
    
  let [email,setemail] =useState("")
  let [password,setpassword] =useState("")
   
  async function Form(e){
    e.preventDefault()
    try{
       let x=await Axios.post(`${Loginn}`,{

      email: email,
      password: password,
  })
  console.log(x)
    }catch(err){
     console.log(err)
    }
   
}
    return(<>
    <div className="row bg-purple border-light border border-1 rounded-4 text-white" style={{width:"800px",height:"80vh"}}>
    
      <form onSubmit={Form}><Particlsback/> <div className="text-white fs-1 text-center my-5 fst-italic fw-bold">Login</div>
     <div className="row">
      <div className="col">
        <input type="email" className="input rounded-2 w-100 text-center" placeholder="email" value={email} onChange={(e)=>setemail(e.target.value)}/>
      </div>
      </div>
      <div className="row">
      <div className="col">
        <input type="password" className="input rounded-2 w-100 mt-4 text-center" placeholder="password" value={password} onChange={(e)=>setpassword(e.target.value)}/>
      </div>
      </div>
      <div className="row mt-5 justify-content-center px-3">  
        <button type="submit" className="btn bg-purple btn-outline-primary px-5 py-2">Login</button>
      </div>
      </form>
     </div>
  
    </>)
}