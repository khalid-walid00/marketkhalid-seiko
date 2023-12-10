import Main from "./padges/Main";
import {  Route, Router, Routes, useLocation } from 'react-router-dom';
import Login from "./padges/login";
import Register from "./padges/Register";
import Dashbord from "./padges/Dashbord";
import Users from "./padges/Users";
import AddProduct from "./padges/AddProduct";
import Store from "./padges/Store";
import Photos from "./padges/Photos";
import EditProdect from "./padges/EditProdect";
import Conact from "./padges/Conact";
import More from "./padges/Moreproduct";
import Sale from "./padges/Sale";
import Card from "./padges/Card";
import { AnimatePresence } from "framer-motion";

export default function App() {
   const location =useLocation()
  return (
    <>
     
        <AnimatePresence>
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Main />} />
            <Route path="/conactus" element={<Conact />} />
            <Route path="/dashbord" element={<Dashbord />}>
              <Route path="login" element={<Login />} />
              <Route path="register" element={<Register />} />
              <Route path="users" element={<Users />} />
              <Route path="addproduct" element={<AddProduct />} />
              <Route path="store" element={<Store />} />
              <Route path="photos" element={<Photos />} />
              <Route path="store/edit/:id" element={<EditProdect />} />
            </Route>
            <Route path="/search" element={<More />} />
            <Route path="/onsale" element={<Sale />} />
            <Route path="/card" element={<Card />} />
          </Routes>
        </AnimatePresence>
     
    </>
  );
}

