import Main from "./padges/Main";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from "./padges/login";
import Register from "./padges/Register";
import Dashbord from "./padges/Dashbord";
import Users from "./padges/Users";
import AddProduct from "./padges/AddProduct";
import Store from "./padges/Store";
import Photos from "./padges/Photos";
export default function App() {
  return ( <>
  

    

<BrowserRouter>
<Routes>
  <Route path="/" element={<Main/>}/>
  <Route path="dashbord" element={<Dashbord/>}>
    <Route path="login" element={<Login/>}/>
    <Route path="register" element={<Register/>}/>
    <Route path="users" element={<Users/>}/>
    <Route path="addproduct" element={<AddProduct/>}/>
    <Route path="store" element={<Store/>}/>
    <Route path="photos" element={<Photos/>}/>
  </Route>
</Routes>
</BrowserRouter>
 </> );
}

