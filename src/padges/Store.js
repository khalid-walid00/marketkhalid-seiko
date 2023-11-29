import { faCircle, faImage, faPenToSquare } from "@fortawesome/free-regular-svg-icons";
import { faTrash, faWarehouse } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Users(){

    return(<>
        
        <div className="row position-fixed bg-purple p-2 border-light border border-1 rounded-4 text-white" style={{width:"800px",height:"80vh"}}>
       
      <table className="table">
            <thead>
                <tr>
                    <td className="text-center" colSpan={9}><FontAwesomeIcon className="mx-2 active fs-3" icon={faWarehouse} style={{color: "#ffffff",}} />The store</td>
                </tr>
                <tr>
                    <td>
                        ID
                    </td>
                    <td>
                        NAME
                    </td>
                    <td>
                        PRICE
                    </td>
                    <td>
                        NUMBER
                    </td>
                    <td>
                        TOTLA PRICE
                    </td>
                    <td>
                        SALE
                    </td>
                    <td>
                        PHOTOS
                    </td>
                    <td>
                        edit
                    </td>
                    <td>
                        delet
                    </td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>id</td>
                    <td>name</td>
                    <td>price</td>
                    <td>numer</td>
                    <td>total price</td>
                    <td className="text-center"><FontAwesomeIcon icon={faCircle} style={{color: "#2bff00",}} /></td>
                    <td className="d-flex justify-content-center border-2"><FontAwesomeIcon className="mx-2 fs-3" icon={faImage} style={{color: "#fff",}} /></td>
                    <td><FontAwesomeIcon icon={faPenToSquare} className="fs-3"/></td>
                    <td><FontAwesomeIcon className="fs-3" icon={faTrash} style={{color: "#ffffff",}} /></td>
                </tr>
                <tr>
                    <td>id</td>
                    <td>name</td>
                    <td>price</td>
                    <td>numer</td>
                    <td>total price</td>
                    <td className="text-center"><FontAwesomeIcon icon={faCircle} style={{color: "#2bff00",}} /></td>
                    <td className="d-flex justify-content-center border-2"><FontAwesomeIcon className="mx-2 fs-3" icon={faImage} style={{color: "#fff",}} /></td>
                    <td><FontAwesomeIcon icon={faPenToSquare} className="fs-3"/></td>
                    <td><FontAwesomeIcon className="fs-3" icon={faTrash} style={{color: "#ffffff",}} /></td>
                </tr>
                <tr>
                    <td>id</td>
                    <td>name</td>
                    <td>price</td>
                    <td>numer</td>
                    <td>total price</td>
                    <td className="text-center"><FontAwesomeIcon icon={faCircle} style={{color: "#2bff00",}} /></td>
                    <td className="d-flex justify-content-center border-2"><FontAwesomeIcon className="mx-2 fs-3" icon={faImage} style={{color: "#fff",}} /></td>
                    <td><FontAwesomeIcon icon={faPenToSquare} className="fs-3"/></td>
                    <td><FontAwesomeIcon className="fs-3" icon={faTrash} style={{color: "#ffffff",}} /></td>
                </tr>           
            </tbody>
        </table>
   </div>
     </>) 
}