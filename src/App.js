import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import "./App.css";
import { ClassComponent } from "./components/class-component/ClassComponent";
import { productsAPI, task } from "./helpers/promises";
import ComponentChildren from "./components/component-children/ComponentChildren";
import FunctionalComponent from "./components/function-component/FuntionalComponent";
import ItemListContainer from "./components/item-list-container/ItemListContainer";
import NavBar from "./components/navbar/NavBar";
import CartIcon from "./icon/CartIcon";

const age = 18;

function App() {
  const [showFunctionComponent, setShowFunctionComponent] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const [names, setNames] = useState(["Luis", "Gabriel", "Alexis"]);

  // useEffect(() => {
  //   // getTaskResult();
  //   getProducts();
  // }, []);

  // const getProducts = async () => {
  //   try {
  //     const result = await productsAPI;
  //     console.log(result);
  //   } catch (error) {
  //     console.log({ error });
  //   } finally {
  //     console.log("Finalización del consumo de la API productsAPI");
  //   }
  // };

  // const getTaskResult = async () => {
  //   try {
  //     const result = await task;
  //     // throw new Error("Error de lógica de negocio");
  //     console.log(result);
  //   } catch (error) {
  //     console.log(error);
  //   } finally {
  //     console.log("Promesa con async/await finalizada");
  //   }
  // };

  // task
  //   .then(
  //     (result) => {
  //       if (!result?.data?.array[0]?.user?.name) {
  //         throw new Error("Error de lógica de negocio");
  //       }
  //       // Aquí ya no pasaría y no se activaría el console.log
  //       console.log({ result });
  //     },
  //     (error) => {
  //       console.log({ error });
  //     }
  //   )
  //   .catch((error) => {
  //     setErrorMessage(error.message);
  //     console.log("error del catch", error);
  //   })
  //   .finally(() => {
  //     console.log("Promesa con then y catch finalizada");
  //   });

  const addNewName = () => setNames([...names, "Nuevo nombre"]);

  const delete3rdName = () =>
    setNames(names.filter((name, index) => index !== 2));

  return (
    <div className="App">
      <NavBar />
      <h1>Error: {errorMessage}</h1>
      <h1>Hola, inicio de nuestro e-commerce :D</h1>
      <button onClick={addNewName}>Agregar "Nuevo nombre"</button>
      <button onClick={delete3rdName}>Eliminar 3er indice de names</button>
      <ul>
        {names.map((name, index) => (
          <li key={`${name}${index}${new Date()}`}>{name}</li>
        ))}
      </ul>
      {[1, 2, 3, 4, 5].map((number) => {
        if (number > 2) {
          return <h2 key={number}>{number}</h2>;
        }
        return null;
      })}
      <hr />
      <ClassComponent age={age} name="Rodolfo" />
      <hr />
      {showFunctionComponent && <FunctionalComponent age={age} name="Mateo" />}
      <button onClick={() => setShowFunctionComponent(!showFunctionComponent)}>
        Eliminar componente funcional
      </button>
      {/* <FunctionalComponent age={age} name="Alejandro" /> */}
      <CartIcon />
      <hr />
      <ItemListContainer />
      <ComponentChildren otherProp="El título">
        <h1>Hola, soy un componente hijo</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Et,
          obcaecati! Iste, quia voluptas. Cumque blanditiis cupiditate suscipit.
          Sunt officiis harum minus modi eos! Ipsam excepturi natus porro ut,
          magni voluptatibus!
        </p>
      </ComponentChildren>
      <br />
      <br />
      <br />
      <br />
    </div>
  );
}

export default App;