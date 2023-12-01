import { faCircle, faImage, faPenToSquare } from "@fortawesome/free-regular-svg-icons";
import { faTrash, faWarehouse } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { Axios } from "../Axios";
import { dataa } from "../Data";
export default function Users(){
  const [data,setdata]=useState()
    useEffect(() => {
        Axios.get(`products/`, {
           
        }).then((data) => (setdata(data.data)))
            .catch((err) => (console.log(err)))

    }, [1])

    const store= dataa.map((item,key) => {
          return(<tr key={key}>
        <td>{item.id}</td>
        <td>{item.title}</td>
        <td>{item.price}</td>
        <td>{item.count}</td>
        <td>{item.discount}</td>
        <td>{item.status}</td>
        <td>{item.description}</td>
        <td>{(item.price-item.discount)}</td>
        <td className="text-center"><FontAwesomeIcon icon={faCircle} style={{color:item.sale?"green":"red"}} /></td>
        <td className="d-flex justify-content-center border-2"><FontAwesomeIcon className="mx-2 fs-3" icon={faImage} style={{color: "#fff",}} /></td>
        <td><FontAwesomeIcon icon={faPenToSquare} className="fs-3"/></td>
        <td><FontAwesomeIcon className="fs-3" icon={faTrash} style={{color: "#ffffff",}} /></td>
    </tr>
   )
   
    })
  
    return(<>
        
        <div className="row position-fixed bg-purple p-2 border-light border border-1 rounded-4 text-white" style={{width:"max-content",height:"80vh"}}>
       
      <table className="table">
            <thead>
                <tr>
                    <td className="text-center" colSpan={12}><FontAwesomeIcon className="mx-2 active fs-3" icon={faWarehouse} style={{color: "#ffffff",}} />The store</td>
                </tr>
                <tr>
                    <td>
                        ID
                    </td>
                    <td>
                        NAME
                    </td>
                    <td>
                        DISCRIPTION
                    </td>
                    <td>
                        PRICE
                    </td>
                    <td>
                        COUNT
                    </td> <td>
                        DISCOUNT
                    </td>
                    <td>
                        TOTLA PRICE
                    </td>
                    <td>
                        SALE
                    </td>
                    <td>
                        STATUS
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
              {store}
            </tbody>
        </table>
   </div>
     </>) 
}