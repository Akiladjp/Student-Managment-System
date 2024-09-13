import { useState } from "react";
import "./App.css";
import { StudentProfile } from "./components/StudentProfile";
import { Students } from "./pages/Students";
import { Route, Routes } from "react-router-dom";
import { AddStudent } from "./components/AddStudent";
import { ProfileView } from "./pages/ProfileView";

function App() {
  return (
    <>
      <div>
        <div>
          <h1 className="flex justify-center mt-4">
            Student Management System
          </h1>
          <Routes>
            <Route path="/" element={<Students />}/>
            <Route path="/addStudent" element={<AddStudent />}/>
            <Route path="/profileView/:id" element={<ProfileView/>} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
