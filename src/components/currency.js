import React from "react";
import SelectBtn from "./selectBtn";

const Currency = props => {
  return (
    <form action="">
      <input
        type="text"
        name={props.name}
        value={props.value}
        onFocus={props.init}
        onChange={e => props.action(e.target.value)}
      />
      <p>
        <SelectBtn setcur={e => props.convert(e)} rates={props.rates} />
      </p>
    </form>
  );
};

export default Currency;
