import React from "react";

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
      <p>{props.cur}</p>
    </form>
  );
};

export default Currency;
