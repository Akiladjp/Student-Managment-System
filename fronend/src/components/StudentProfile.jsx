import React from "react";
import { Button } from "../shared/Button";
import { useNavigate } from "react-router-dom";

export const StudentProfile = (props) => {
  const navigate = useNavigate();

  const handleClickZZZ = (id) => {
    console.log("hi");
    navigate(`/profileView/${id}`);
  };

  return (
    <div>
      <div>
        <div className="flex justify-center">
          <img src={props.image} alt="image" className="w-24" />
        </div>
        <div className="flex flex-col">
          <div className="flex gap-2">
            <h1 className="w-12">Name: </h1>
            <p>{props.name}</p>
          </div>
          <div className="flex gap-2">
            <h1 className="w-12">Grade: </h1>
            <p>{props.section}</p>
          </div>
          <div className="flex gap-2">
            <h1 className="w-12">Email: </h1>
            <p>{props.email}</p>
          </div>
          <div className="mt-4 flex justify-end">
            <div className="" onClick={() => handleClickZZZ(props.id)}>
              <Button title="View" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
