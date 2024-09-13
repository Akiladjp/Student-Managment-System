import React, { useEffect, useState } from "react";
import userIcon from "../assets/userIcon.png";
import { Button } from "../shared/Button";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";

export const ProfileView = () => {
  const { id } = useParams();

  // const [data, setData] = useState({})

  const [formatData, setFormatData] = useState({
    name: "",
    section: "",
    email: "",
  });

  // useEffect(() => {
  //   axios
  //     .get(`http://localhost:4041/studentInfo/${id}`)
  //     .then((result) => {
  //       setData(result.data[0])
  //       setFormatData({
  //         name: result.data[0]?.name || "",
  //         section: result.data[0]?.section || "",
  //         email: result.data[0]?.email || "",
  //       });
  //     })
  //     .catch((err) => console.log(err));
  // }, [id]);

  useEffect(() => {
    const fetchData = async() => {
      try{
        const response = await axios .get(`http://localhost:4041/studentInfo/${id}`)
        if(response){
          setFormatData({
            name: response.data[0]?.name || "",
            section: response.data[0]?.section || "",
            email: response.data[0]?.email || "",
          });
        }
        else {
          console.log("Error in query");
        }
      }
      catch(err) {
        console.log(err);
      }
    }

    fetchData();
  }, [id])

  const handleChange = (e) => {
    const {name, section, email} = e.target;
    setFormatData((prev) => ({...prev, [name] : value}));
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
          Student Details
        </h1>
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Profile Image
            </label>
            <div className="mt-1 flex items-center">
              <span className="inline-block h-12 w-12 rounded-full overflow-hidden bg-gray-100">
                <img src={userIcon} alt="Profile" />
              </span>
              <input
                id="file-upload"
                name="file-upload"
                type="file"
                className="sr-only"
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
              placeholder="Student Name"
              value={formatData.name}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Section
            </label>
            <input
              type="text"
              placeholder="Section"
              value={formatData.section}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Student Email
            </label>
            <input
              type="email"
              placeholder="Student Email"
              value={formatData.email}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>
          <div className="flex justify-between mx-20">
            <button className="w-[40%] py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
              Edit
            </button>
            <button className="w-[40%] py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
              Delete
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
