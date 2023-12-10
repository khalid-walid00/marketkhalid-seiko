import {  NavLink, Outlet, useParams } from "react-router-dom";
import Navbar from "./Navbar";
import { faCameraRetro, faCartArrowDown, faFeather, faRightToBracket, faWarehouse } from "@fortawesome/free-solid-svg-icons";
import { faRegistered, faUser } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Particlsback from "../particls/Particls";
import { useEffect, useState } from "react";
import { Axios } from "../Axios";
export default function Dashbord(){
   const id = window.location.pathname.slice(10)
   const [click,setclick]=useState("")
   const [img,setimg]=useState("")
   const [username,setusername]=useState("")
   const [first,setfirst]=useState("")
   const [second,setsecond]=useState("")
   const [email,setemail]=useState("")
   useEffect(()=>{
      try{
        Axios.get("http://127.0.0.1:8000/api/profile/").then((res)=>(setimg(res.data.image),setusername(res.data.user.username),
        setfirst(res.data.user.first_name),setsecond(res.data.user.last_name),setemail(res.data.user.email)))
      }catch(err){
      console.log(err)
      }
    },[1])
   return(
        <>
        <Navbar/>
       
        <div className="w-100 bg-dark overflow-hidden" style={{height:"600vh"}}>
         <div className="pe-4 pt-4 pb-4 my-4 dashbord rounded-5">
            <div className="row">
                    <NavLink to="login" name="login" onClick={(e)=>setclick("login")} className="border-5  mt-2 btndash btn border-start-0 border-white border text-white px-5 rounded-end-4"><FontAwesomeIcon className="mx-2 active fs-3" icon={faRightToBracket} />Login</NavLink>
                    <NavLink to="register" name="register" onClick={(e)=>setclick("register")} className="border-5  mt-4 btndash btn border-start-0 border-white border text-white px-5 rounded-end-4"><FontAwesomeIcon className="mx-2 active fs-3" icon={faRegistered} />Register</NavLink>
                    <NavLink to="users" name="users" onClick={(e)=>setclick("users")} className="border-5 mt-4 btndash btn border-start-0 border-white border text-white px-5 rounded-end-4"><FontAwesomeIcon className="mx-2 active fs-3" icon={faUser} />Users</NavLink>
                    <NavLink to="store" name="store" onClick={(e)=>setclick("store")} className="border-5 mt-4 btndash btn border-start-0 border-white border text-white px-5 rounded-end-4"><FontAwesomeIcon className="mx-2 active fs-3" icon={faWarehouse} />The store</NavLink>
                    <NavLink to="addproduct" name="addproduct" onClick={(e)=>setclick("addproduct")} className="border-5 mt-4 btndash btn border-start-0 border-white border text-white px-5 rounded-end-4"><FontAwesomeIcon className="mx-2 active fs-3" icon={faCartArrowDown} />Add product </NavLink>
                    <NavLink to="photos" name="photos" onClick={(e)=>setclick("photos")} className="border-5 mt-4 btndash btn border-start-0 border-white border text-white px-5 rounded-end-4"><FontAwesomeIcon className="mx-2 active fs-3" icon={faCameraRetro} />upload photos</NavLink>
          
            </div>
         </div>
         <div className="row w-100 h-100 m-4 mt-0 pt-4">
             {click!="register"&&click!="login" &&click!=""&&click!="store" &&<div className="col-lg-3">
       <div className="card shadow-lg position-fixed  infoadmin" style={{width:"350px"}}>
            <div className="trangle"></div>
           <div className="row justify-content-center p-5">
            <div className="rounded-circle  border-2  border-seg p-4" style={{width:"max-content"}}>
           <img className="rounded-circle" style={{width:"80px"}} src={img}/>
           </div>
           </div>
           <div className="row justify-content-center text-white fs-2 p-2">
            <div >welcome mr: <span className="fs-4 text-color">{username}</span> </div>
            <div>first_name: <span className="fs-4 text-color">{first}</span> </div>
            <div>second_name: <span className="fs-4 text-color">{second}</span> </div>
            <div>email: <span className="fs-4 text-color">{email}</span> </div>
            <div className="fs-5 mt-5">are you ready to edit</div>
           </div>
         </div></div>}
     <div className="col">
        <div><Outlet/><Particlsback/></div>
        
        
        </div>
</div>
      
     </div> </>)
}
