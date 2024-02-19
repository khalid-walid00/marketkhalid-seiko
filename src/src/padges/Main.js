import { faCircleUser } from '@fortawesome/free-regular-svg-icons';
import { faBars, faKipSign } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import OwlCarousel from 'react-owl-carousel';
import "owl.carousel/dist/assets/owl.carousel.min.css"
import "owl.carousel/dist/assets/owl.theme.default.min.css"
import ReactOwlCarousel from 'react-owl-carousel';
import Navbar from './Navbar';
import { animate, motion, scroll, useMotionValueEvent, useScroll } from "framer-motion"
import $ from 'jquery'
import { useEffect, useState } from 'react';
import Footer from './Footer';
import { Axios } from '../Axios';


  export default function Main() {
    const [width,setwidth]=useState(100)
    const [show,setshow]=useState(false)
  const [dataa1,setdataa1]=useState("")
  const [dataa2,setdataa2]=useState("")
  const [dataa3,setdataa3]=useState("")

   const {scrollY} =useScroll()
   useMotionValueEvent(scrollY,"change",(x)=>(setwidth(x/2)))
   $(window).on("scroll",()=>{
    if(window.scrollY>3000){
      console.log(scrollY)
   setshow(true)
    }else{
      setshow(false)

    }
   })

   useEffect(() => {  
    try{

  Axios.get(`http://127.0.0.1:8000/api/products/`)
  .then((res)=>(setdataa1(res.data.results.filter((item) => { 
    return item.status =="games"
    
    }).map((item,key) => { 
      return (
        <div key={key} className='item'>
        <div className='card bg-transparent text-center text-white' >
          {item.is_sale &&<div className='position-absolute bg-segliner top-25 bg-segliner z-3 rounded-end-4'>sale</div>}
         <div className='overflow-hidden' style={{height:"300px"}}>
          <img src={item.image} className='card-img zoom w-100 h-100'/>
          </div>
          <div className='card-body'>
            <div className='card-title fs-4 fw-bold'>
            {item.name}
            </div>
          {item.is_sale? <div className='card-text fs-5'>$ <span className='bg-danger text-decoration-line-through'>{item.price}</span> {(item.price - item.discount)}</div>:
          <div className='card-text fs-5'>$ {item.price}</div>
          }
          

            <a className='text-decoration-none btn text-white px-5 fs-4 fw-bold rounded-5 bg-seg'>add to card</a> 
             <div className='card-text fs-6'>remaining number: {item.count}</div>
          </div>
        </div>
        </div> 
    )
    })),setdataa2(res.data.results.filter((item) => { 
      return item.status =="consoles"
      }).map((item,key) => { 
        return (
          <div key={key} className='item'>
          <div className='card bg-transparent text-center text-white' >
            {item.is_sale &&<div className='position-absolute top-25 bg-segliner z-3 rounded-end-4'>sale</div>}
           <div className='overflow-hidden' style={{height:"300px"}}>
            <img src={item.image} className='card-img zoom w-100 h-100'/>
            </div>
            <div className='card-body'>
              <div className='card-title fs-4 fw-bold'>
              {item.name}
              </div>
            {item.is_sale? <div className='card-text fs-5'>$ <span className='bg-danger text-decoration-line-through'>{item.price}</span> {(item.price - item.discount)}</div>:
            <div className='card-text fs-5'>$ {item.price}</div>
            }
              <div className='card-text fs-6'>remaining number: {item.count}</div>

              <a className='text-decoration-none btn text-white px-5 fs-4 fw-bold rounded-5 bg-seg'>add to card</a>
            </div>
          </div>
          </div> 
      )})),setdataa3(res.data.results.filter((item) => { 
        return item.status =="controllers"
        }).map((item,key) => { 
          return (
            <div key={key} className='item'>
            <div className='card bg-transparent text-center text-white' >
              {item.is_sale &&<div className='position-absolute top-25 bg-segliner z-3 rounded-end-4'>sale</div>}
             <div className='overflow-hidden' style={{height:"300px"}}>
              <img src={item.image} className='card-img zoom w-100 h-100'/>
              </div>
              <div className='card-body'>
                <div className='card-title fs-4 fw-bold'>
                {item.name}
                </div>
              {item.is_sale? <div className='card-text fs-5'>$ <span className='bg-danger text-decoration-line-through'>{item.price}</span> {(item.price - item.discount)}</div>:
              <div className='card-text fs-5'>$ {item.price}</div>
              }
                <div className='card-text fs-6'>remaining number: {item.count}</div>

                <a className='text-decoration-none btn text-white px-5 fs-4 fw-bold rounded-5 bg-seg'>add to card</a>
              </div>
            </div>
            </div> 
        )}))
    )).catch((err)=>(err.response.status==401?window.location.pathname="/dashbord/login":console.log(err)))
    }catch(error){
     console.log(error)
    }

     }, [0])
    
    return (<>
    <Navbar/>
     <div className='row m-0 py-5'>
     <div className='top-0 z-n1' id='main'></div>
       <div className='card rounded-4 m-5 text-white p-5 z-2 'id='card1'>
        <div className='card-body'>
            <div className='card-title fs-4'>Power up your game</div>
            <div className='card-text fw-bold' style={{fontSize:"400%"}}>CYBER KID INFINITE</div>
            <div className='card-title fs-5 my-2'>Now Available on PC & Console</div>
            <div className='card-title'><button className='btn btn-light fs-4 rounded-5 text-seg'>buy now</button></div>
        </div>
       </div>
        <img className='m-5 rounded-5'  id='cardimg' src='https://static.wixstatic.com/media/c837a6_7c7101b9ee5e4c8da4855ceb9b513a14~mv2.jpg/v1/crop/x_90,y_0,w_1361,h_1759/fill/w_737,h_947,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Cyber%20copy.jpg'/>
     </div>
   <div className='postion-fixed overflow-hidden fs-1' id='body'>
    <div className='row container mx-5'>
    <div className='row my-5 m-5 fs-1 fw-bold ' >
            <motion.div initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration:2}} className='col' style={{marginTop:"200px"}}>BEST SELLERS</motion.div>
            <motion.div initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration:2}} className='col text-end' style={{marginTop:"200px"}}><a className='btnn text-decoration-none p-1'>view all</a></motion.div>
        </div>
        <div className='row mt-5 ms-lg-5'>
        <OwlCarousel className='owl-theme firstowl' items={4} dots nav loop margin={40}>  
       {dataa1}
         </OwlCarousel> 
        </div>


    </div>
 <div className='bg-dark py-5'>
  <div className='container'>
  <motion.div initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration:2}} className='fs-1 fw-bold py-5motion.'>SHOP BY CATEGORY</motion.div>
  <div className='row'>
    <div className='col'>
      <div className='text-center text-white' style={{width:"max-content"}}>
      <div className='overflow-hidden rounded-4 bg-transparent ' style={{width:"max-content"}}>
      <div className='card1 zoom-card1 border-0  rounded-4'></div>
      </div> <div className='card-title fs-5 my-2'>Consoles</div>
       </div>
    </div>
    <div className='col'>
      <div className='text-center text-white' style={{width:"max-content"}}>
      <div className='overflow-hidden rounded-4 bg-transparent ' style={{width:"max-content"}}>
      <div className='card2 zoom-card2 border-0  rounded-4'></div>
      </div> <div className='card-title fs-5 my-2'>Accessories</div>
       </div>
    </div>
    <div className='col'>
      <div className='text-center text-white' style={{width:"max-content"}}>
      <div className='overflow-hidden rounded-4 bg-transparent ' style={{width:"max-content"}}>
      <div className='card3 zoom-card3 border-0  rounded-4'></div>
      </div> <div className='card-title fs-5 my-2'>Controllers</div>
       </div>
    </div>
  </div>
 </div>
</div>
<div className='container ' id='c-cardimg'>
  <motion.div initial={{x:-100,y:50,opacity:0.1}} whileInView={{x:178,y:0,opacity:1}} transition={{duration:1.1}} className='card px-5 py-5 pb-3 card21 text-center rounded-5 text-white'>
    <div className='card-body'>
      <div className='card-title fs-5'>
THIS WEEK'S DEALS
</div>
  <div className='card-text fs-12 fw-bold'>
  10%
  </div>
  <div className='card-text fs-2 fw-bold'>
  off all games
  </div>
  <div className='card-text my-3'><a className='btnn text-decoration-none p-1 px-3'>view all</a></div>
    </div>
  </motion.div>
<motion.div initial={{x:100,y:112,opacity:0.1}} whileInView={{x:120,y:112,opacity:1}} transition={{duration:1.2}} className='card-img'>
  <img className='rounded-5 cardimg1' src='https://static.wixstatic.com/media/c837a6_e07b7f0bd83545608cf2cfce23b9b22f~mv2.jpg/v1/crop/x_151,y_74,w_1180,h_1597/fill/w_527,h_714,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Kira.jpg'/>
</motion.div>
<motion.div initial={{x:1000,y:20,opacity:0.1}} whileInView={{x:500,y:174,opacity:1}} transition={{duration:1.2}} className='card-img'>
  <img className='rounded-5 cardimg2' src='https://static.wixstatic.com/media/c837a6_e93c705ac75d4b1695316ad1e73dafd8~mv2.jpg/v1/fill/w_528,h_719,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Dead%20at%20Last.jpg'/>
</motion.div>
<motion.div initial={{x:1000,y:30,opacity:0.1}} whileInView={{x:850,y:196,opacity:1}} transition={{duration:1.2}} className='card-img'>
  <img className='rounded-5 cardimg3' src='https://static.wixstatic.com/media/c837a6_f1507c37d4234fe3b6847f4ab805d86d~mv2.jpg/v1/fill/w_534,h_719,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Chronosplit.jpg'/>
</motion.div>
</div>
<div className='row container mx-5'>
<div className='row my-5 m-5 fs-1 fw-bold ' >
            <motion.div initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration:2}} className='col' style={{marginTop:"200px"}}>BEST SELLERS</motion.div>
            <motion.div initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration:2}} className='col text-end' style={{marginTop:"200px"}}><a className='btnn text-decoration-none p-1'>view all</a></motion.div>
        </div>
        <div className='row mt-5 ms-lg-5'>
        <OwlCarousel className='owl-theme firstowl' items={4} dots nav loop margin={40}> 
         {dataa2}
         </OwlCarousel> 
        </div>


    </div>
<div className='w-100 overflow-hidden' style={{height:"600px"}}> 
 <motion.div initial={{opacity:0.2}} transition={{duration:2}} whileInView={{opacity:1}} className=' position-absolute z-3 w-100 text-center h-100 align-items-center d-flex justify-content-center fw-bold'>
  <div className='fs-9'>SPEND & SAVE  <div className='fs-2 fw-bold my-3'>Save 20% when you spend more than $125</div>
  <a className='btnnn rounded-5 px-3 text-decoration-none fs-3 p-1'>shop now</a>
  </div>

 </motion.div>
  <div className='w-100 h-100 position-absolute opacity-25 text-center d-flex justify-content-center align-items-center' style={{backgroundColor:'black'}}>
  
  </div>
  <motion.img initial={{width:"100%",opacity:0.2}} animate={{width:width}} whileInView={{opacity:1}} transition={{duration:1}}  src='https://static.wixstatic.com/media/c837a6_678a6092e54043ed9b4081c2463ed428~mv2.jpg/v1/fill/w_1381,h_509,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/c837a6_678a6092e54043ed9b4081c2463ed428~mv2.jpg'/>
</div>
<div className='row container mx-5'>
        <div className='row my-5 m-5 fs-1 fw-bold ' >
            <motion.div initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration:2}} className='col' style={{marginTop:"200px"}}>BEST SELLERS</motion.div>
            <motion.div initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration:2}} className='col text-end' style={{marginTop:"200px"}}><a className='btnn text-decoration-none p-1'>view all</a></motion.div>
        </div>
        <div className='row mt-5 ms-lg-5'>
        <OwlCarousel className='owl-theme firstowl' items={4} dots nav loop margin={40}> 
           {dataa3}
         </OwlCarousel> 
        </div>


    </div>
   </div>



  <div className='row m-0 py-5 text-white' style={{height:"705px"}}>
    {show &&<div className='top-0 z-n1' id='main2'></div>}
  <div className='fs-8 text-center fw-bold'>NEWSLETTER 
   <div className='fs-5 text-center fw-normal'>
    Sign up to receive updates on new<br/> products and special offers
    </div>
  <div className='text-center fs-6 fw-normal mt-5'>email *</div>
      <div className='row '>
        <motion.form initial={{opacity:0.1}} whileInView={{opacity:1}} transition={{duration:2}} className='d-flex justify-content-center'>
        <div className='w-50'>
          <div className='row'><input type='email' className='form-control text-center rounded-bottom-0 rounded-top-5 border-danger bg-transparent text-white' placeholder='email' required/>
</div>
         <div className='row'> <button className='btnn w-100 rounded-top-0 fs-5'>Submit</button></div>
        </div>
        </motion.form>
      </div>
    </div>

     </div>
     <Footer/>
    </>);
  }
  

  