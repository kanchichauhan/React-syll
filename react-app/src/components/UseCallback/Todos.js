import React from "react";

const Todos = ({ todoFn, todoData }) => {
    return (
    <>
        {console.log(todoData)}
        <button onClick={todoFn}>Add Todo</button>
    </>
    );
};

export default React.memo(Todos);