import { faCircle, faImage, faPenToSquare } from "@fortawesome/free-regular-svg-icons";
import { faTrash, faWarehouse } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { Axios } from "../Axios";
import {Link} from "react-router-dom"
export default function Users(){
  const [id,setid]=useState()
  const [daata,setdaata]=useState("")
    useEffect(() => {  
       try{

     Axios.get(`http://127.0.0.1:8000/api/products/`).then((res)=>setdaata(res.data.results.map((item) => { return(<tr>
     <td>{item.id}</td>
     <td>{item.title}</td>  
     <td>{item.description}</td>
     <td>${item.price}</td>
     <td>{item.count}</td>
     <td>${item.discount}</td>
     <td>${(item.price-item.discount)*item.count}</td>
     <td className="text-center"><FontAwesomeIcon icon={faCircle} style={{color:item.is_sale?"red":"green"}} /></td>
      <td>{item.status}</td>
     <td className="d-flex justify-content-center border-2"><img src={item.image} style={{width:"100px"}}/></td> 
     <td>{item.create_at}</td>
      <td>{item.uptade_at}</td>
      <td><Link className="hover text-white" to={`edit/${item.id}`}><FontAwesomeIcon  icon={faPenToSquare} className="fs-3"/></Link></td> 
     <td onClick={() => delet(item.id)}><FontAwesomeIcon className="fs-3" cursor={"pointer"}  icon={faTrash} style={{color: "#ffffff",}} /></td>
 </tr>

)})))
         
       }catch(error){
        console.log(error)
       }

        }, [0])
        async function delet(id) {
            try {
              const response = await Axios.delete(`http://127.0.0.1:8000/api/products/${id}`);
              console.log('Delete Successful:', response.data);
            } catch (error) {
              console.error('Delete Error:', error);
            }
          }
          
    return(<>
        
        <div className="row position-fixed w-75 overflow-x-scroll bg-purple p-2 border-light border border-1 rounded-4 text-white" style={{width:"max-content",height:"80vh"}}>
       
      <table className="table">
            <thead>
                <tr>
                    <td className="text-center" colSpan={14}><FontAwesomeIcon className="mx-2 active fs-3" icon={faWarehouse} style={{color: "#ffffff",}} />The store</td>
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
                    CREATE_AT
                    </td>
                    <td>
                        UPDATE_AT
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
           {daata}
            </tbody>
        </table>
   </div>
     </>) 
}