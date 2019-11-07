import React, { useState } from "react";

const SelectBtn = props => {
  const n = Object.keys(props.rates);
  const values = n.map(key => {
    return (
      <option key={key} value={key}>
        {key}
      </option>
    );
  });

  return (
    <select value={props.name} onChange={e => props.setcur(e.target.value)}>
      {values}
    </select>
  );
};

export default SelectBtn;
