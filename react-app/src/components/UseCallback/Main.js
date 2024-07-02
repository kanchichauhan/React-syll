import React from 'react'
import { useState, useMemo, useCallback } from "react";
import Todos from "./Todos";

const Main = () => {
    const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);

// returns value

//   const increment = useMemo(() => {
//     return function () {
//         setCount((prevCount) => prevCount + 1);
//     }
//   }, []);

// returns function

  const increment = useCallback(() => {
    setCount((prevCount) => prevCount + 1);
  }, []);

  const todoFn = useCallback(() => {
    setTodos((t) => [...t, "New Todo"]);
  }, [setTodos]);

  return (
    <>
      <hr />
      <div>
        {console.log(count)}
        Count: {count}
        <button onClick={increment}>+</button>
        <Todos todoFn={todoFn} todoData={todos} />
      </div>
    </>
  );
}

export default Main;