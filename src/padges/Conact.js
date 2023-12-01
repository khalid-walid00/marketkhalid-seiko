import Footer from "./Footer";
import Navbar from "./Navbar";

export default function Conact(){

    return(<> <div className="w-100"style={{backgroundColor:"black"}}>
    <Navbar/>
   
    <div className="container mt-5 text-white" >
        <div className="row fs-10 fw-bold">
        NEED A HAND?
        </div>
        <div className="row" style={{height:"800px"}}>
            <div className="col">
                <div>info@mysite.com</div>
                <div>123-456-7890</div>
                <div>500 Terry Francine Street San Francisco, CA 94158</div>
                <div><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13667.155202119178!2d31.602150950524006!3d31.087801266613894!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f77e6533dff507%3A0x84304adcc15cc0cd!2z2K_Zg9ix2YbYs9iMINmF2K_ZitmG2Kkg2K_Zg9ix2YbYs9iMINmF2LHZg9iyINiv2YPYsdmG2LPYjCDZhdit2KfZgdi42Kkg2KfZhNiv2YLZh9mE2YrYqQ!5e0!3m2!1sar!2seg!4v1701354952341!5m2!1sar!2seg" width="600" height="450" style={{border:"0"}} allowfullscreen="" className="bg-dark" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></div>
          
            </div>
            <div className="col">
                <form>
                    <div className="row">
                        <div className="col p-0">
                            <label>FirstName*</label>
                          <input type="text" className="form-control mt-2 btn-rounded-top-left btn-rounded"/>
                        </div>
                        <div className="col p-0">
                            <label>SecondName*</label>
                          <input type="text" className="form-control mt-2 btn-rounded-top-right btn-rounded"/>
                        </div>
                    </div>
                    <div className="row my-4">
                        <div className="col">
                            <label>Email*</label>
                          <input type="text" className="form-control mt-2 btn-rounded"/>
                        </div>
                        <div className="col">
                            <label>Phone*</label>
                          <input type="text" className="form-control mt-2 btn-rounded"/>
                        </div>
                    </div>
                    <div className="row my-5">
                      <textarea className="form-control texteara-rounded"></textarea>
                      <button type="submit" className="rounded-bottom rounded-bottom-4 btn-rounded">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    </div></div>
    <Footer/>
    </>)
}