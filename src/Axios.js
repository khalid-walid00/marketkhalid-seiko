import axios from "axios";
import Cookie from "cookie-universal"
import { mainapi } from "./Api";

const cookie=Cookie()
const token =cookie.get("play")
export const Axios =axios.create({
    baseURL:"http://127.0.0.1:8000/api/",
    timeout:5000,
    headers:{

        Authorization: "JWT " + "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzAxMzg2MTU2LCJpYXQiOjE3MDEzODU4NTYsImp0aSI6ImE0ODZiNGU4ZDI2NjRjMWRhNzc0MWZkMjUwNGIwNzJiIiwidXNlcl9pZCI6MX0.C45YPOaLhaWn6YxfB0taSeZjk3qiq-whw9WS5f0n5J4",
        "Content-Type": "application/json",
        Accept:"application/json"
  }
    
})