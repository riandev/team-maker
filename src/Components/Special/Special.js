import React, { useState } from "react";
import Sp from "../SpecialPerson/Sp";
import "./Special.css";

const Special = (props) => {
  const special = props.special;
  let specialPerosnSalary = 0;
  for (let i = 0; i < special.length; i++) {
    const specialPeople = special[i];
    specialPerosnSalary = specialPerosnSalary + specialPeople.salary;
  }
  return (
    <div>
      <div count-details>
        <h2>Special Team Member Details</h2>
      </div>
      <div className="count-details">
        <h1>Special Team Member Count: {special.length}</h1>
        <h2>Team Member Salary: ${specialPerosnSalary}</h2>
      </div>
      <div className="sp-data">
        <Sp special={special}></Sp>
      </div>
    </div>
  );
};

export default Special;
