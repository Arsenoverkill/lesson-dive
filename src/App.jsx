import React from "react";
import Table from "./components/Table";
import { Routes, Route, NavLink } from "react-router-dom";
import User from "./components/User";
import "./App.css";

function App() {
  function onclick(event) {
    alert(event);
    event.stopPropagation();
  }
  return (
    <>
      <div className="app">
        <NavLink to="/table">Table</NavLink>
        <NavLink to="/user">User</NavLink>
      </div>
      <Routes>
        <Route path="/table" element={<Table onclick={onclick} />} key={1} />
        <Route path="/user" element={<User />} key={2} />
      </Routes>
    </>
  );
}

export default App;
