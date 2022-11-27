import React from "react";
import "./App.css";
import UserList from "./features/users/UserList";

const App = () => {
  return (
    <div className="container mx-auto px-2 mx-w-5xl pt-10 md:pt-32">
      <h1 className="text-center font-bold text-2xl text-gray-700">
        CRUD WITH REDUX
      </h1>
      <UserList />
    </div>
  );
};

export default App;
