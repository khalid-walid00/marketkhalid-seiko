import { NavLink, Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import { faCameraRetro, faCartArrowDown, faDollarSign, faFeather, faRightToBracket } from "@fortawesome/free-solid-svg-icons";
import { faRegistered, faUser } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Dashbord(){
    return(
        <>
        <Navbar/>
        <div className="w-100 bg-dark" style={{height:"1000vh"}}>
         <div className="pe-4 pt-4 pb-4 my-4 dashbord rounded-5">
            <div className="row">
                    <NavLink to="login" className="border-5  mt-2 btndash btn border-start-0 border-white border text-white px-5 rounded-end-4"><FontAwesomeIcon className="mx-2 active fs-3" icon={faRightToBracket} />Login</NavLink>
                    <NavLink to="register" className="border-5  mt-4 btndash btn border-start-0 border-white border text-white px-5 rounded-end-4"><FontAwesomeIcon className="mx-2 active fs-3" icon={faRegistered} />Register</NavLink>
                    <NavLink to="/" className="border-5 mt-4 btndash btn border-start-0 border-white border text-white px-5 rounded-end-4"><FontAwesomeIcon className="mx-2 active fs-3" icon={faUser} />Users</NavLink>
                    <NavLink to="/" className="border-5 mt-4 btndash btn border-start-0 border-white border text-white px-5 rounded-end-4"><FontAwesomeIcon className="mx-2 active fs-3"icon={faFeather} />writer</NavLink>
                    <NavLink to="/" className="border-5 mt-4 btndash btn border-start-0 border-white border text-white px-5 rounded-end-4"><FontAwesomeIcon className="mx-2 active fs-3" icon={faDollarSign} />Profits</NavLink>
                    <NavLink to="/" className="border-5 mt-4 btndash btn border-start-0 border-white border text-white px-5 rounded-end-4"><FontAwesomeIcon className="mx-2 active fs-3" icon={faCartArrowDown} />Add product </NavLink>
                    <NavLink to="/" className="border-5 mt-4 btndash btn border-start-0 border-white border text-white px-5 rounded-end-4"><FontAwesomeIcon className="mx-2 active fs-3" icon={faCameraRetro} />upload photos</NavLink>
          
            </div>
         </div>
         <div className="row w-100 h-100 m-4 mt-0 pt-4">
            <div className="col-lg-3">
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
         </div></div>
     <div className="col">
        <div className="position-fixed"><Outlet/></div>
        
        
        </div>
</div>
      
     </div> </>)
}