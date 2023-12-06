import axios from "axios";
import Cookie from "cookie-universal"
import { mainapi } from "./Api";

const cookie=Cookie()
const token =cookie.get("play")
const refresh =cookie.get("refresh")
console.log(token)
export const Axios =axios.create({
       headers:{   
     "Content-Type": "application/json",
        Authorization:"Bearer " + token,
        Accept:"application/json"
  }
  
    
})