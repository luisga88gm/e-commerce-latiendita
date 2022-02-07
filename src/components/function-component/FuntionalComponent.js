import { useState } from "react";

const FuntionalComponent = ({name, age}) => {
  const [stateName, setStateName] = useState("Juan");
  const [surname, setSurname] = useState("Pérez");
  const [user, setUser] = useState ({
    name: "Juan",
    surname: "Pérez",
  });

    if (!name) {
      return <h1>name no existe</h1>    
    }

    const updateNameAndSurname = () => {
      setStateName("Luis Gabriel");
      setUser({ ...user, name: "Luis Gabriel"});
    };

    return (
      <>
      <h1>FuntionalComponent</h1>
      <h2>stateName: {stateName}</h2>
      <h2>stateSurname: {surname}</h2>
      <h3>state con objeto</h3>
      {/* con objeto */}
      <h2>stateName: {user.name}</h2>
      <h2>stateSurname: {user.surname}</h2>
      <button onClick={updateNameAndSurname}>Cambiar stateNameAndSurname</button>
      <h2>Nombre: {name}</h2>
      <h2>Edad: {age}</h2>
      </>
    );
};

export default FuntionalComponent;
