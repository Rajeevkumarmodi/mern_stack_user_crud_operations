import React from "react";
import NavBar from "./Componants/NavigationBar/NavBar";
import Add_user from "./Componants/Add_user/Add_user";
import Show_all_users from "./Componants/Show_all_users/Show_all_users";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Edit_user from "./Componants/Edit_user/Edit_user";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route exat path="/" element={<Add_user />} />
          <Route exat path="/alluser" element={<Show_all_users />} />
          <Route path="/:id" element={<Edit_user />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
