import { faCircleUser } from "@fortawesome/free-regular-svg-icons";
import { faBars, faCartShopping, faDatabase, faKipSign } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
export default function Navbar(){

    return(
        <nav className="nav navbar-expand-lg bg-dark  position-sticky  top-0">
        <Link href="#nav" data-bs-toggle="collapse" className="navbar-toggler">
        <FontAwesomeIcon icon={faBars} style={{color: "#ffffff",}} />
        </Link>
        <div id='nav' className='collapse navbar-collapse text-white justify-content-between container'>
            <Link className='navbar-brand text-uppercase fs-1 fw-bold m-4'><FontAwesomeIcon className='mx-3' icon={faKipSign} style={{color: "#ffffff",}} />Khalid</Link>
            <ul className='navbar-nav fs-5'>
               <Link to="/" className='mx-3 nav-link pointer'>Products</Link>
               <Link to="/on Sale " className='mx-3 nav-link pointer'>on Sale</Link>
               <Link to="/Conact US " className='mx-3 nav-link pointer'>Conact US</Link>
               <a href="/login" className='mx-3 nav-link pointer'><FontAwesomeIcon className='mx-2 fa-beat fs-5' icon={faCircleUser} style={{"--fa-primary-color": "#ffffff", "--fa-secondary-color": "#000000", "--fa-secondary-opacity": "1",}} />Login</a>
            <Link to="/Login" className='mx-3 nav-link pointer'><FontAwesomeIcon icon={faCartShopping} className="fs-2"/></Link>
            <Link to="/dashbord" className='mx-3 nav-link pointer'><FontAwesomeIcon icon={faDatabase} /></Link>
            
            </ul>
        </div>
     </nav>
    )
}