import React, { useState } from "react";
import axios from "axios"; // Make sure you have axios imported
import userIcon from "../assets/userIcon.png";
import { Button } from "../shared/Button";
import { Link, useNavigate } from "react-router-dom";
import { Navigate } from "react-router-dom";

export const AddStudent = () => {
    
  const navigate = useNavigate();

  const [uploadImage, setUploadImage] = useState(null);

  const handleUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setUploadImage(imageUrl);
    }
  };

  const [data, setData] = useState({
    name: "",
    section: "",
    email: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:4041/addStudent", data)
      .then((response) => {console.log(response);
        navigate('/');
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="my-4 absolute z-40 top-10 left-4">
        <Link to="/">
          <Button title="Back" />
        </Link>
      </div>
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h1 className="text-2xl font-semibold text-center text-gray-800 mb-6">
          Add New Student
        </h1>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Profile Image
            </label>
            <div className="mt-1 flex items-center">
              <span className="inline-block h-12 w-12 rounded-full overflow-hidden bg-gray-100">
                <img src={uploadImage ? uploadImage : userIcon} alt="Profile" />
              </span>
              <input
                id="file-upload"
                name="file-upload"
                type="file"
                className="sr-only"
                onChange={handleUpload}
              />
              <label
                htmlFor="file-upload"
                className="ml-5 bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 cursor-pointer"
              >
                Upload
              </label>
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Student Name
            </label>
            <input
              type="text"
              value={data.name}
              onChange={(e) => setData({ ...data, name: e.target.value })}
              placeholder="Student Name"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Section
            </label>
            <input
              type="text"
              value={data.section}
              onChange={(e) => setData({ ...data, section: e.target.value })}
              placeholder="Section"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Student Email
            </label>
            <input
              type="email"
              value={data.email}
              onChange={(e) => setData({ ...data, email: e.target.value })}
              placeholder="Student Email"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>
          <div>
            <input
              type="submit"
              value="Add Student"
              className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            />
          </div>
        </form>
      </div>
    </div>
  );
};
