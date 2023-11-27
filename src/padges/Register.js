import { useState } from "react"
import { Loginn, Registerr } from "../Api"
import { Axios } from "../Axios"
import Particlsback from "../particls/Particls";
export default function Register2(){
    let [firstuser,setfirstuser] =useState("")
    let [seconduser,setseconduser] =useState("")
    let [email,setemail] =useState("")
    let [password,setpassword] =useState("")
    let [passwordc,setpasswordc] =useState("")
     
    async function Form(e){
      e.preventDefault()
      try{
         let x=await Axios.post(`${Registerr}`,{
        first_name: firstuser,
        second_name:seconduser,
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
    
      <form onSubmit={Form}><Particlsback/> <div className="text-white fs-1 text-center my-5 fst-italic fw-bold">Register</div>
      <div className="row">
      <div className="col">
        <input type="text" className="input rounded-2 w-100 text-center" placeholder="first_name" value={firstuser} onChange={(e)=>setfirstuser(e.target.value)}/>
      </div>
      <div className="col">
        <input type="text" className="input rounded-2 w-100 text-center" placeholder="second_name" value={seconduser} onChange={(e)=>setseconduser(e.target.value)}/>
      </div>
      </div>
     <div className="row">
      <div className="col">
        <input type="email" className="input rounded-2 w-100 mt-4 text-center" placeholder="email" value={email} onChange={(e)=>setemail(e.target.value)}/>
      </div>
      </div>
      <div className="row">
      <div className="col">
        <input type="password" className="input rounded-2 w-100 mt-4 text-center" placeholder="password" value={password} onChange={(e)=>setpassword(e.target.value)}/>
      </div>
      </div>
      <div className="row">
      <div className="col">
        <input type="password" className="input rounded-2 w-100 mt-4 text-center" placeholder="confirm_password" value={passwordc} onChange={(e)=>setpasswordc(e.target.value)}/>
      </div>
      </div>
      <div className="row mt-5 justify-content-center px-3">  
        <button type="submit" className="btn bg-purple btn-outline-primary px-5 py-2">Login</button>
      </div>
      </form>
     </div>
  
    </>)
}