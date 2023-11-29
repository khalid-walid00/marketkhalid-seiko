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
  <Route path="/dashbord" element={<Dashbord/>}>
    <Route path="/dashbord/login" element={<Login/>}/>
    <Route path="/dashbord/register" element={<Register/>}/>
    <Route path="/dashbord/users" element={<Users/>}/>
    <Route path="/dashbord/addproduct" element={<AddProduct/>}/>
    <Route path="/dashbord/store" element={<Store/>}/>
    <Route path="/dashbord/photos" element={<Photos/>}/>
  </Route>
</Routes>
</BrowserRouter>
 </> );
}

