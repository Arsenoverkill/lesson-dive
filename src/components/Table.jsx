import React from "react";
import css from "./Table.module.scss";

const Table = ({onclick}) => {

  return (
    <>
      <button onClick={onclick}>Click me</button>
    </>
  );
};

export default Table;