import {  Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import { faCameraRetro, faCartArrowDown, faFeather, faRightToBracket, faWarehouse } from "@fortawesome/free-solid-svg-icons";
import { faRegistered, faUser } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Particlsback from "../particls/Particls";
export default function Dashbord(){
   const id = window.location.pathname.slice(10)
   const c = window.location.pathname
   console.log(id)
   console.log(c)
      
    return(
        <>
        <Navbar/>
       
        <div className="w-100 bg-dark" style={{height:"1000vh"}}>
         <div className="pe-4 pt-4 pb-4 my-4 dashbord rounded-5">
            <div className="row">
                    <a href="dashbord/login" className="border-5  mt-2 btndash btn border-start-0 border-white border text-white px-5 rounded-end-4"><FontAwesomeIcon className="mx-2 active fs-3" icon={faRightToBracket} />Login</a>
                    <a href="dashbord/register" className="border-5  mt-4 btndash btn border-start-0 border-white border text-white px-5 rounded-end-4"><FontAwesomeIcon className="mx-2 active fs-3" icon={faRegistered} />Register</a>
                    <a href="dashbord/users" className="border-5 mt-4 btndash btn border-start-0 border-white border text-white px-5 rounded-end-4"><FontAwesomeIcon className="mx-2 active fs-3" icon={faUser} />Users</a>
                    <a href="dashbord/store" className="border-5 mt-4 btndash btn border-start-0 border-white border text-white px-5 rounded-end-4"><FontAwesomeIcon className="mx-2 active fs-3" icon={faWarehouse} style={{color: "#ffffff",}} />The store</a>
                    <a href="dashbord/addproduct" className="border-5 mt-4 btndash btn border-start-0 border-white border text-white px-5 rounded-end-4"><FontAwesomeIcon className="mx-2 active fs-3" icon={faCartArrowDown} />Add product </a>
                    <a href="dashbord/photos" className="border-5 mt-4 btndash btn border-start-0 border-white border text-white px-5 rounded-end-4"><FontAwesomeIcon className="mx-2 active fs-3" icon={faCameraRetro} />upload photos</a>
          
            </div>
         </div>
         <div className="row w-100 h-100 m-4 mt-0 pt-4">
             {id!="register"&&id!="login" &&id !==""&&<div className="col-lg-3">
       <div className="card shadow-lg position-fixed infoadmin  h-75" style={{width:"350px"}}>
            <div className="trangle"></div>
           <div className="row justify-content-center p-5">
            <div className="rounded-circle border-2  border-seg p-4" style={{width:"max-content"}}>
           <FontAwesomeIcon className="fs-10 text-seg" icon={faUser}  />
           <img></img> 
           </div>
           </div>
           <div className="row justify-content-center text-white fs-1">
            welcome mr:khaled
            <div className="fs-5 mt-5">are you ready to edit</div>
           </div>
         </div></div>}
     <div className="col">
        <div><Outlet/> <Particlsback/></div>
        
        
        </div>
</div>
      
     </div> </>)
}
