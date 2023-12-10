import { faProductHunt, faSearchengin } from "@fortawesome/free-brands-svg-icons";
import { faCircleUser } from "@fortawesome/free-regular-svg-icons";
import { faArrowRight, faBars, faCartShopping, faCommentDots, faDatabase, faHandHoldingDollar, faKipSign, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
export default function Navbar(){
    const id = window.location.pathname.slice(10)
    const [card,setcard]=useState("")
    const [number,setnumber]=useState()
    const [sum,setsum]=useState()
    const arr = JSON.parse(localStorage.getItem("card")) ||[]  
    useEffect(() => {
      const cardElements = arr.map((item, index) => (
        <div className="row my-4 h-100" key={index}>
          <div className="col-lg-3">
            <img style={{ width: "80px" }} src={item.image} alt={`Product ${index}`} />
          </div>
          <div className="col">
            <div className=""><span>name: {item.name}</span></div>setimg
            <div className="my-1"><span>price: {item.price}</span></div>
            <div className=""><input className="card-number bg-transparent text-white border border-1 border-white"
             min={1} step={1} placeholder={1} onChange={(e) =>(item.number=e.target.value,totals())} type="number" style={{width:"max-content"}}/></div>
          </div>
        </div>
      ));
      const alltotal = arr.map((item) => item.price);
      setcard(cardElements);
      setnumber(arr.length) 

    }, [arr.length00]);
    
    function totals(t){
     const f=  arr.map((item, index) => {
         return item.price*item.number  
      });
      console.log(f)
      setsum(f.reduce((accumulator, currentValue) => accumulator + currentValue, 0)) 
    }

    return( <>
        <nav className="nav navbar-expand-lg bg-dark  position-sticky  top-0">
        <Link href="#nav" data-bs-toggle="collapse" className="navbar-toggler">
        <FontAwesomeIcon icon={faBars} style={{color: "#ffffff",}} />
        </Link>
        <div id='nav' className='collapse navbar-collapse text-white justify-content-between container'>
            <Link className='navbar-brand text-uppercase fs-1 fw-bold m-4'><FontAwesomeIcon className='mx-3' icon={faKipSign} style={{color: "#ffffff",}} />Khalid</Link>
            <ul className='navbar-nav fs-5'>
            <Link to="/" className='mx-3 nav-link pointer'>Poducts<FontAwesomeIcon className="mx-2" icon={faProductHunt} /></Link>
            <Link to="/search" className='mx-3 nav-link pointer'>SEARCH<FontAwesomeIcon className="mx-2" icon={faSearchengin} /></Link>
               <Link to="/onsale" className='mx-3 nav-link pointer'>on Sale<FontAwesomeIcon className="mx-2" icon={faHandHoldingDollar} /></Link>
               <Link to="/conactus" className='mx-3 nav-link pointer'>Conact US<FontAwesomeIcon className="mx-2" icon={faCommentDots} /></Link>
                { id==""   && <Link to="/dashbord/login" className='mx-3 nav-link pointer'>Login<FontAwesomeIcon className='mx-2 fa-beat fs-5' icon={faCircleUser} style={{"--fa-primary-color": "#ffffff", "--fa-secondary-color": "#000000", "--fa-secondary-opacity": "1",}} /></Link>
}
            <Link data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight"  className='btn mx-3 nav-link pointer'><FontAwesomeIcon icon={faCartShopping} className="fs-2"/><span className="number">{number}</span></Link>
            <Link to="/dashbord/login" className='mx-3 nav-link pointer'><FontAwesomeIcon icon={faDatabase} /></Link>
            
            </ul>
        </div>
     </nav>
<div class="offcanvas offcanvas-end"  id="offcanvasRight">
  <div class="offcanvas-header fs-1 ">
    <h5 class="offcanvas-title fs-1" id="offcanvasRightLabel">card</h5>
    <FontAwesomeIcon icon={faXmark} className="pointer" data-bs-dismiss="offcanvas"  />
  </div>
  <div class="offcanvas-body bg-black text-white overflow-y-scroll">
    
    <div className="row">
      {card}
      <div>
        <div className="fs-1 fw-bolder">total</div>
        <div className="fs-3">${sum}</div>
      </div>
    </div>
  </div>
  <Link to="card" class="offcanvas-header fs-1 nav-link">
    <h5 class="offcanvas-title fs-1" id="offcanvasRightLabel">go to card</h5>
    <FontAwesomeIcon icon={faArrowRight} className="pointer" data-bs-dismiss="offcanvas"  />
  </Link>
</div>
   </>)
}