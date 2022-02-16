import React, { useEffect, useState } from "react";

const dobouce = (fn, time) => {
  let timer;
  return () => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      timer = null;
      fn();
    }, time);
  };
};

const ResizeComponent = () => {
  const [dimensions, setDimensions] = useState({
    height: window.innerHeight,
    width: window.innerWidth,
  });
  const [iputInfo, setIputInfo] = useState("");
  const [comments, setComments] = useState([""]);

  useEffect(() => {
    const handleResize = dobouce(() => {
      setDimensions({ height: window.innerHeight, width: window.innerWidth });
    }, 300);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleClick = (event) => {
    console.log("Evento sintético:", event);
    console.log("Evento nativo:", event.nativeEvent);
  };

  const handleKey = (event) => {
    event.preventDefault();
    console.log("Evento de onKeyDown", event);
  };

  const handleForm = (event) => {
    event.preventDefault();
    console.log("Tu formulario ha sido enviado satisfactoriamente :D");
  };

  const handleInputInfo = (event) => {
    setIputInfo(event.target.value);
  };

  const handleClickPropagation = (event, message) => {
    event.stopPropagation();
    console.log("Message: " + message);
    setComments((comments) => [...comments, iputInfo]);
  };

  return (
    <div>
      {/* Event Listener */}
      <h1>Altura: {dimensions.height}</h1>
      <h1>Anchura: {dimensions.width}</h1>
      <hr />
      {/* Evento sintetico */}
      <button onClick={handleClick}>Click en evento</button>
      <hr />
      {/* Prevent Default */}
      <input onKeyDown={handleKey} type="text" />
      <form onSubmit={handleForm}>
        <input onChange={handleInputInfo} type="text" value={iputInfo} />
        {/* <button type="submit">Submit Form</button> */}
      </form>
      <p>InputInfo actualmente es: {iputInfo}</p>
      {/* Stop Propagation */}
      <div
        onClick={(event) => handleClickPropagation(event, "Desde el DIV")}
        style={{ backgroundColor: "blue", padding: 16 }}
      >
        <button
          onClick={(event) => handleClickPropagation(event, "Desde el botón")}
        >
          Click en botón
        </button>
      </div>
      <h1>Twitter copia baratísima</h1>
      {comments.map((comment) => (
        <h3>{comment}</h3>
      ))}
    </div>
  );
};

export default ResizeComponent;
