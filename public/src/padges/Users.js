import { faUser } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { useEffect } from "react";
import { Axios } from "../Axios";

export default function Users(){

    return(<>
        
        <div className="row position-fixed bg-purple p-2 border-light border border-1 rounded-4 text-white" style={{width:"800px",height:"80vh"}}>

      <table className="table">
            <thead>
            <tr>
                    <td className="text-center" colSpan={9}><FontAwesomeIcon className="mx-2 active fs-3" icon={faUser} />Users</td>
                </tr>
                <tr>
                    <td>
                        ID
                    </td>
                    <td>
                        NAME
                    </td>
                    <td>
                        EMAIL
                    </td>
                    <td>
                        PHOTOS
                    </td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>id</td>
                    <td>name</td>
                    <td>email</td>
                    <td className="d-flex justify-content-center border-2"><FontAwesomeIcon className="mx-2 fs-3" icon={faUser} /></td>
                </tr>
                <tr>
                    <td>id</td>
                    <td>name</td>
                    <td>email</td>
                    <td className="d-flex justify-content-center border-2"><FontAwesomeIcon className="mx-2 fs-3" icon={faUser} /></td>
                </tr>
                <tr>
                    <td>id</td>
                    <td>name</td>
                    <td>email</td>
                    <td className="d-flex justify-content-center border-2"><FontAwesomeIcon className="mx-2 fs-3" icon={faUser} /></td>
                </tr>               
            </tbody>
        </table>
   </div>
     </>) 
}