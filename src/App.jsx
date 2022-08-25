import React from "react";
import UserList from './features/users/UserList';
import {Route, Routes} from 'react-router-dom'
import AddUser from "./features/users/addUser";
import EditUser from "./features/users/editUser";

function App() {
  return (
    <div className="container mx-auto px-2 max-w-5xl pt-10 md:pt-32">
      <h1 className="text-center font-bold text-2xl text-gray-700 my-5">
        CRUD com Redux Toolkit
      </h1>
      <Routes>
        <Route path="/" element={<UserList />} />
        <Route path="/add-user" element={<AddUser/>} />
        <Route path="/edit-user/:id" element={<EditUser/>} />
      </Routes>
    </div>
  )
}

export default App;
