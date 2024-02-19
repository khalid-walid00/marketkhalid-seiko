import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebookF, faInstagram, faTiktok, faYoutube } from '@fortawesome/free-brands-svg-icons';
import {motion } from "framer-motion"
import { faKipSign } from "@fortawesome/free-solid-svg-icons";

export default function Footer(){

    return(<div className='footer text-white'>
    <div className='upfooter row justify-content-center'>
      <motion.img initial={{opacity:0.1}} whileInView={{opacity:1}} transition={{duration:2}} whileDrag={{scale:1.1}} drag="x" dragConstraints={{left:0,right:100}} className='w-75 imgfooter move' src='https://static.wixstatic.com/media/c837a6_120b654bf8214699a68e61aedba60fdd~mv2.png/v1/fill/w_1321,h_425,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/Games%20stack%20copy.png'/>
    </div>
    <div className='row mt-5 pt-5'>
      <div className='col align-self-center text-center fs-1'><FontAwesomeIcon className='mx-3 fs-15 w-100' icon={faKipSign} style={{color: "#ffffff",}} />khalid</div>
      <div className='col'>
        <div className='fs-5 fw-bold'>Products</div>
        <div className='fs-6 mt-5'>Games</div>
        <div className='fs-6 mt-4'>Consoles</div>
        <div className='fs-6 mt-4'>Controllers</div>
        <div className='fs-6 mt-4'>Accessories</div>
      </div>
      <div className='col'>
        <div className='fs-5 fw-bold'>Store</div>
        <div className='fs-6 mt-5'>500 Terry Francine Street San Francisco, CA 94158</div>
        <div className='fs-6 mt-4'>Mon - Fri: 9am - 9pm</div>
        <div className='fs-6 mt-4'>info@mysite.com</div>
        <div className='fs-6 mt-4'>123-456-7890</div>
        </div>
      <div className='col'>
      <div className='fs-5 fw-bold'>Policy</div>
      <div className='fs-6 mt-5'>Terms & Conditions</div>
        <div className='fs-6 mt-4'>Shipping Policy</div>
        <div className='fs-6 mt-4'>Refund Policy</div>
        <div className='fs-6 mt-4'>Privacy Policy</div> 
        <div className='fs-6 mt-4'>Cookie Policy</div>
        <div className='fs-6 mt-4'>FAQ</div>
      </div>
    </div>
    <div className='row mt-5 mb-4 justify-content-center'><hr className='w-75'></hr></div>
    <div className='row fw-bold fs-5 px-5'>
      <div className='col'>
        <div className='row fs-5 sw-bold'>         
Payment Methods
        </div>
        <div className='row my-3 d-flex'>
          <a style={{width:"max-content"}}><img src='https://static.wixstatic.com/media/c837a6_e0547a35fd3b42eb8fc45f9f73b77246~mv2.png/v1/fill/w_61,h_39,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Visa.png'></img></a>
          <a style={{width:"max-content"}}><img src='https://static.wixstatic.com/media/c837a6_ad29ff701fee45629d63f3e4f3f2894b~mv2.png/v1/fill/w_69,h_39,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Master%20Card.png'></img></a>
          <a style={{width:"max-content"}}><img src='https://static.wixstatic.com/media/c837a6_f73858b81fdb40388c28ec8a78c7d69f~mv2.png/v1/fill/w_61,h_39,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/American%20Express.png'></img></a>
          <a style={{width:"max-content"}}><img src='https://static.wixstatic.com/media/c837a6_1947c7dbf840480ea8638b9b0c29c030~mv2.png/v1/fill/w_51,h_39,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/JCB.png'></img></a>
          <a style={{width:"max-content"}}><img src='https://static.wixstatic.com/media/c837a6_0164b1a8ce80423890095a8b3d8a62eb~mv2.png/v1/crop/x_0,y_0,w_176,h_109/fill/w_62,h_39,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Discover.png'></img></a>
          <a style={{width:"max-content"}}><img src='https://static.wixstatic.com/media/c837a6_bbd810de83bc447f96dc4bb0addbfaed~mv2.png/v1/crop/x_1,y_1,w_149,h_109/fill/w_52,h_39,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Diners.png'></img></a>
          <a style={{width:"max-content"}}><img src='https://static.wixstatic.com/media/c837a6_e0d5f0c365864fda9b7d65df15eecaf5~mv2.png/v1/fill/w_61,h_39,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/PayPal.png'></img></a>

        </div>
      </div>
      <div className='col'>
        <div className='row justify-content-center fs-5 sw-bold'>         
Join the Community
        </div>
        <div className='row justify-content-center my-3 d-flex'>
        <FontAwesomeIcon icon={faFacebookF} style={{color: "#ffffff",width:"max-content"}} />
        <FontAwesomeIcon icon={faInstagram} style={{color: "#ffffff",width:"max-content"}} />
        <FontAwesomeIcon icon={faTiktok} style={{color: "#ffffff",width:"max-content"}} />
        <FontAwesomeIcon icon={faYoutube} style={{color: "#ffffff",width:"max-content"}} />
        </div>
      </div>
    </div>
    <div className='row my-4 justify-content-center bg-black'>
© 2035 by ARCADE. Powered and secured by khalid</div>
   </div>)
}