import React, { useState } from "react";

const ItemCounter = ({stock}) => {
    const [counter, setCounter] = useState (0);
    const [currentTimes, setCurrentTimes] = useState (0);
    const [currentDate, setCurrentDate] = useState ("");

    const minusCounter = () => {
        if (counter <= 0) return;
        setCounter(counter - 1);
    };

    const plusCounter = () => {
        if (counter >= stock) return;
        setCounter(counter + 1);
    };

    const takeMe = () => {
        setCurrentTimes(currentTimes + 1);
        const today = new Date ();
        setCurrentDate(
            `hoy es ${today.getFullYear()}-${
                today.getMonth() + 1
            }-${today.getDate()}, y son las ${today.getHours()}:${today.getMinutes()}:${today.getSeconds()} en mi pais`
        );
    };

    return (
        <>
            <div>
                <h3>Me han tocado {currentTimes} veces!</h3>
                <h3>{currentDate}</h3>
                <button onClick={minusCounter}>-</button>
                <span>{counter}</span>
                <button onClick={plusCounter}>+</button>
            </div>
            <button onClick={takeMe}>Tocame</button>
        </>
    );
};

export default ItemCounter;