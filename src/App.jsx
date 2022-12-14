import React from "react";
import { Routes, Route } from "react-router-dom";

import UserList from "./features/users/UserList";
import AddUser from "./features/users/AddUser";
import EditUser from "./features/users/EditUser";
import DeleteUser from "./features/users/DeleteUser";

import "./App.css";

const App = () => {
  return (
    <div className="container mx-auto px-2 mx-w-5xl pt-10 md:pt-32">
      <h1 className="text-center font-bold text-2xl text-gray-700">
        CRUD WITH REDUX
      </h1>
      <Routes>
        <Route path="/" element={<UserList />} />
        <Route path="/addUser" element={<AddUser />} />
        <Route path="/editUser/:id" element={<EditUser />} />
        <Route path="/deleteUser" element={<DeleteUser />} />
      </Routes>
    </div>
  );
};

export default App;
