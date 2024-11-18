import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Nav_manager } from "./Nav_manager";
import { useState } from "react";
function App() {
  const [isOpenLogin,setIsOpenLogin]=useState(0);
  const [isOpen,setIsOpen]=useState(false);
  const []=useState()
  return (
    <BrowserRouter>
    <Nav_manager isOpenLogin={isOpenLogin} setIsOpenLogin={setIsOpenLogin} isOpen={isOpen} setIsOpen={setIsOpen}/>
    </BrowserRouter>
  );
}

export default App;
