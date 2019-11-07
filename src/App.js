import React, { useState } from "react";
import Title from "./components/title";
import Currency from "./components/currency";
import "./App.css";

const App = () => {
  const [state, setState] = useState({ EUR: null, USD: null });
  return (
    <div className="container">
      <Title />
      <div className="converter">
        <Currency
          cur="€"
          name="EUR"
          value={state.EUR}
          action={e => {
            setState({ EUR: e, USD: (e * 1.11).toFixed(2) });
          }}
          init={() => {
            setState({ EUR: null, USD: null });
          }}
        />
        <Currency
          cur="$"
          name="USD"
          value={state.USD}
          action={e => {
            setState({ USD: e, EUR: (e * 0.9).toFixed(2) });
          }}
          init={() => {
            setState({ EUR: null, USD: null });
          }}
        />
      </div>
    </div>
  );
};

export default App;
