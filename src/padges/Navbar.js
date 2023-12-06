import { faCircleUser } from "@fortawesome/free-regular-svg-icons";
import { faArrowRight, faBars, faCartShopping, faDatabase, faKipSign, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
export default function Navbar(){
    const id = window.location.pathname.slice(10)
    return( <>
        <nav className="nav navbar-expand-lg bg-dark  position-sticky  top-0">
        <Link href="#nav" data-bs-toggle="collapse" className="navbar-toggler">
        <FontAwesomeIcon icon={faBars} style={{color: "#ffffff",}} />
        </Link>
        <div id='nav' className='collapse navbar-collapse text-white justify-content-between container'>
            <Link className='navbar-brand text-uppercase fs-1 fw-bold m-4'><FontAwesomeIcon className='mx-3' icon={faKipSign} style={{color: "#ffffff",}} />Khalid</Link>
            <ul className='navbar-nav fs-5'>
               <Link to="/" className='mx-3 nav-link pointer'>Products</Link>
               <Link to="/on Sale " className='mx-3 nav-link pointer'>on Sale</Link>
               <Link to="/conactus" className='mx-3 nav-link pointer'>Conact US</Link>
                { id==""   && <Link to="/dashbord/login" className='mx-3 nav-link pointer'><FontAwesomeIcon className='mx-2 fa-beat fs-5' icon={faCircleUser} style={{"--fa-primary-color": "#ffffff", "--fa-secondary-color": "#000000", "--fa-secondary-opacity": "1",}} />Login</Link>
}
            <button to="/Login"data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight"  className='btn mx-3 nav-link pointer'><FontAwesomeIcon icon={faCartShopping} className="fs-2"/></button>
            <Link to="/dashbord" className='mx-3 nav-link pointer'><FontAwesomeIcon icon={faDatabase} /></Link>
            
            </ul>
        </div>
     </nav>
<div class="offcanvas offcanvas-end"  id="offcanvasRight">
  <div class="offcanvas-header fs-1 ">
    <h5 class="offcanvas-title fs-1" id="offcanvasRightLabel">card</h5>
    <FontAwesomeIcon icon={faXmark} className="pointer" data-bs-dismiss="offcanvas"  />
  </div>
  <div class="offcanvas-body bg-black text-white overflow-y-scroll">
    <div className="row h-75">
      <div className="col-lg-3">
        <img src={require("../imgs/image (1).png")}/>
      </div>
      <div className="col">
        <div className=""><span>name:</span></div>
        <div className=""><span>price:</span></div>
        <div className=""><input type="range"/></div>
      </div>
    </div>
    <div className="row">
      <div>
        <div className="fs-1 fw-bolder">total</div>
        <div className="fs-3">{}100$</div>
      </div>
    </div>
  </div>
  <div class="offcanvas-header fs-1 ">
    <h5 class="offcanvas-title fs-1" id="offcanvasRightLabel">go to card</h5>
    <FontAwesomeIcon icon={faArrowRight} className="pointer" data-bs-dismiss="offcanvas"  />
  </div>
</div>
   </>)
}