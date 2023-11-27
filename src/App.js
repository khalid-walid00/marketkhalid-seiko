import Main from "./padges/Main";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from "./padges/login";
import Register from "./padges/Register";
import Dashbord from "./padges/Dashbord";
export default function App() {
  return ( <>
  

    

<BrowserRouter>
<Routes>
  <Route path="/" element={<Main/>}/>
  <Route path="/dashbord" element={<Dashbord/>}>
    <Route path="login" element={<Login/>}/>
    <Route path="register" element={<Register/>}/>
  </Route>
</Routes>
</BrowserRouter>
 </> );
}

