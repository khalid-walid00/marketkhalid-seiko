import axios from "axios";
import Cookie from "cookie-universal"
import { mainapi } from "./Api";

const cookie=Cookie()
const token =cookie.get("e-commerce")
export const Axios =axios.create({
    baseURL:mainapi,
    headers:{
        "Content-Type": "application/json",
        "Authorization":"Accept "
    }
    
})