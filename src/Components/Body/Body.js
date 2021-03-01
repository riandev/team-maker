import React, { useEffect, useState } from "react";
import "./Body.css";
import data from "../Data/Data.json";
import People from "../People/People";
import Special from "../Special/Special";
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';

const Body = () => {
  const [people, setPeople] = useState([]);
  useEffect(() => {
    setPeople(data);
  }, []);

  const [special, setSpecial] = useState([]);
  const HandleButton = (staff) => {
    const newSpecial = [...special, staff];
    setSpecial(newSpecial);
  };
  return (
    <div className="body-container">
      <div className="people-body">
        {people.map((p) => (
          <People className='card' staff={p} key={p.id} handleButton={HandleButton}></People>
        ))}
      </div>
      <div>
        <Special special={special}></Special>
      </div>
    </div>
  );
};

export default Body;
