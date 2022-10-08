import React, {useEffect, useState} from 'react';
import {BrowserRouter, Link, Route, Routes} from "react-router-dom";
import TodosPage from "./pages/TodosPage";
import HomePage from "./pages/HomePage";
import TodoPage from "./pages/TodoPage";
import UserPage from "./pages/UserPage";
import UsersPage from "./pages/UsersPage";


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div style={{
          display: "flex",
          gap: 20,
          marginBottom: 20
        }}>
          <Link to={"/users"}>
            Users page
          </Link>
          <Link to={"/todos"}>
            Todos page
          </Link>
        </div>
        <Routes>
          <Route path={"/"} element={ <HomePage/>}/>
          <Route path={"/users"} element={<UsersPage/>}/>
          <Route path={"/todos"} element={<TodosPage/>}/>
          <Route path={"/users/:id"} element={<UserPage/>}/>
          <Route path={"/users/:id"} element={<TodoPage/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
