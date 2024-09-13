import React, { useEffect, useState } from "react";
import { StudentProfile } from "../components/StudentProfile";
import { Link } from "react-router-dom";
import { Button } from "../shared/Button";
import studentImage from "../assets/student.png";
import axios from 'axios';

export const Students = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:4041/studentInfo");
        if (response) {
          setData(response.data);
        } else if (response.data.Message == "Error in query") {
          console.log("Error in query");
        }
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  // useEffect(()=> {
  //   axios .get("http://localhost:4041/studentInfo")
  //   .then((result) => setData(result.data))
  //   .catch((err) => console.log(err))
  // }, [])


  return (
    <div className="flex flex-col justify-center mt-12">
      <div className="flex justify-end mr-4">
        <Link to="/addStudent">
          <Button title="Add New" />
        </Link>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mx-auto justify-center mt-8 w-[80%]">
      {data.map((student, index) => (
          <StudentProfile
            id={student.id}
            key={index}
            image={studentImage}
            name={student.name}
            section={student.section}
            email={student.email}
          />
        ))}
      </div>
    </div>
  );
};
