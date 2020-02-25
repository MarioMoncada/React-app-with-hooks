import React from "react";
import CounterVotes from "./CounterVotes";

function ListComponent() {
  const listName = [
    {
      name: "Marcos",
      lastName: "Fernandez",
      age: "45",
      slogan: "Bienvenidos"
    },
    {
      name: "Mario",
      lastName: "Rengifo",
      age: "25",
      slogan: "Juntos Ganaremos"
    },
    {
      name: "Stiven",
      lastName: "Astudillo",
      age: "38",
      slogan: "No nos vencerán"
    },
    {
      name: "Carlos",
      lastName: "Perez",
      age: "65",
      slogan: "Soy el que esperaban"
    },
    {
      name: "José",
      lastName: "Grisales",
      age: "45",
      slogan: "Simepre juntos"
    },
    {
      name: "Marcos",
      lastName: "Fernandez",
      age: "45",
      slogan: " El cielo es nuestro limite"
    }
  ];

  return (
    <div className="wraperVotingApp">
      {listName.map((data, id) => (
        <div key={id}>
          <div className="candidateContent">
            <div> Name: {data.name}</div>
            <div>Last name: {data.lastName}</div>
            <div> Age: {data.age}</div>
            <div>Slogan:{data.slogan}</div>
            <CounterVotes></CounterVotes>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ListComponent;
