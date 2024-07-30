import React from "react";
import { Sorting } from "./DataStructure/sorting/Sorting";
import "./Project.css";
import { Astar } from "./DataStructure/PathFinder/Astar";

export const Project = () => {
  return (
    <>
      <div className="project-container">
        <Sorting />
      </div>
      <div className="project-container">
        <Astar />
      </div>
    </>
  );
};
