import { useRef, useState } from "react"
import { useNavigate } from "react-router-dom";
import axios from "axios";
import imgupload from "../imgs/user.png"
import { Axios } from "../Axios";
export default function Register2(){
   let nav = useNavigate()
    let [firstuser,setfirstuser] =useState("")
    let [seconduser,setseconduser] =useState("")
    let [user,setuser] =useState("")
    let [email,setemail] =useState("")
    let [password,setpassword] =useState("")
    let [passwordc,setpasswordc] =useState("") 
    let [img,setimg]=useState()
    const p = useRef(null)
    function uploadimng(){
      p.current.click()
    
    }
    
    const cc =  <img className="rounded-4 my-2" src={img ? URL.createObjectURL(img) : imgupload} width={"100px"} height={"100px"}/>
    
    async function Form(e){  
      e.preventDefault()
      try {
        var x= await Axios.postForm("register/",{
       username:user,
    email:email,
    first_name:firstuser,
    last_name:seconduser,
    password:password,
    password2:passwordc
  })

  console.log(x);
     }catch (error) {  console.log(error)}

     

}
    return(<>
    <div className="row position-fixed bg-purple border-light border border-1 rounded-4 text-white" style={{width:"75%",height:"80vh"}}>
    
      <form onSubmit={Form}><div className="text-white fs-1 text-center mt-2 fst-italic fw-bold">Register</div>
      <div className="row">
      <div className="col text-center">
        <input  type="file" ref={p}  onChange={(e)=>setimg(e.target.files.item(0))} className="input d-none rounded-2 w-100 mt-4 text-center" />
       <span onClick={uploadimng} >{cc}</span>
        
      </div>
      </div>
      <div className="row">
      <div className="col">
        <input required type="text" className="input rounded-2 w-100 text-center" placeholder="first_name" value={firstuser} onChange={(e)=>setfirstuser(e.target.value)}/>
      </div>
      <div className="col">
        <input required type="text" className="input rounded-2 w-100 text-center" placeholder="second_name" value={seconduser} onChange={(e)=>setseconduser(e.target.value)}/>
      </div>
      </div>
      <div className="row">
      <div className="col">
        <input required type="text" className="input rounded-2 w-100 mt-4 text-center" placeholder="username" value={user} onChange={(e)=>setuser(e.target.value)}/>
      </div>
      </div>
     <div className="row">
      <div className="col">
        <input required type="email" className="input rounded-2 w-100 mt-4 text-center" placeholder="email" value={email} onChange={(e)=>setemail(e.target.value)}/>
      </div>
      </div>
      <div className="row">
      <div className="col">
        <input required type="text" className="input rounded-2 w-100 mt-4 text-center" placeholder="password" value={password} onChange={(e)=>setpassword(e.target.value)}/>
      </div>
      </div>
      <div className="row">
      <div className="col">
        <input required type="text" className="input rounded-2 w-100 mt-4 text-center" placeholder="confirm_password" value={passwordc} onChange={(e)=>setpasswordc(e.target.value)}/>
      </div>
      </div>
      <div className="row mt-5 justify-content-center px-3">  
        <button type="submit" className="btn bg-purple btn-outline-primary px-5 py-2">register</button>
      </div>
      </form>
     </div>
  
    </>)
}