import React, { useState } from "react";
import Title from "./components/title";
import Currency from "./components/currency";
import "./App.css";

const App = () => {
  const rates = {
    AED: 4.057849,
    AFN: 86.39344,
    ALL: 123.244512,
    AMD: 527.383532,
    ANG: 1.917333,
    AOA: 514.378882,
    ARS: 65.838997,
    AUD: 1.598375,
    AWG: 1.988708,
    AZN: 1.897286,
    BAM: 1.950777,
    BBD: 2.23132,
    BDT: 93.651506,
    BGN: 1.95667,
    BHD: 0.416461,
    BIF: 2066.047081,
    BMD: 1.104838,
    BND: 1.499915,
    BOB: 7.641705,
    BRL: 4.512487,
    BSD: 1.105137,
    BTC: 0.00012,
    BTN: 78.382059,
    BWP: 12.0056,
    BYN: 2.256035,
    BYR: 21654.825019,
    BZD: 2.22753,
    CAD: 1.456016,
    CDF: 1840.660078,
    CHF: 1.100955,
    CLF: 0.02971,
    CLP: 819.789264,
    CNY: 7.709995,
    COP: 3672.481549,
    CRC: 646.94414,
    CUC: 1.104838,
    CUP: 29.278207,
    CVE: 110.484,
    CZK: 25.517337,
    DJF: 196.351906,
    DKK: 7.473577,
    DOP: 58.348852,
    DZD: 132.621477,
    EGP: 17.822156,
    ERN: 16.572968,
    ETB: 33.056335,
    EUR: 1,
    FJD: 2.414134,
    FKP: 0.898101,
    GBP: 0.861674,
    GEL: 3.270577,
    GGP: 0.861713,
    GHS: 6.104205,
    GIP: 0.898101,
    GMD: 56.645625,
    GNF: 10192.130881,
    GTQ: 8.509257,
    GYD: 231.201087,
    HKD: 8.647092,
    HNL: 27.300745,
    HRK: 7.42722,
    HTG: 107.757856,
    HUF: 332.766493,
    IDR: 15459.445872,
    ILS: 3.863265,
    IMP: 0.861713,
    INR: 78.413644,
    IQD: 1314.757233,
    IRR: 46519.204715,
    ISK: 137.740504,
    JEP: 0.861713,
    JMD: 155.29971,
    JOD: 0.783309,
    JPY: 120.860489,
    KES: 113.6218,
    KGS: 77.141114,
    KHR: 4491.166603,
    KMF: 491.818478,
    KPW: 994.404598,
    KRW: 1274.464207,
    KWD: 0.335529,
    KYD: 0.920914,
    KZT: 429.184346,
    LAK: 9783.34035,
    LBP: 1669.510798,
    LKR: 199.856888,
    LRD: 233.50726,
    LSL: 16.273844,
    LTL: 3.2623,
    LVL: 0.668306,
    LYD: 1.548502,
    MAD: 10.674388,
    MDL: 19.239587,
    MGA: 4059.727691,
    MKD: 61.457632,
    MMK: 1678.090283,
    MNT: 2989.44591,
    MOP: 8.906827,
    MRO: 394.427552,
    MUR: 40.245955,
    MVR: 17.127792,
    MWK: 806.531643,
    MXN: 21.121215,
    MYR: 4.556319,
    MZN: 69.637848,
    NAD: 16.273968,
    NGN: 400.504662,
    NIO: 37.32155,
    NOK: 10.064903,
    NPR: 125.411135,
    NZD: 1.73569,
    OMR: 0.425339,
    PAB: 1.105137,
    PEN: 3.689914,
    PGK: 3.734632,
    PHP: 55.766663,
    PKR: 171.915297,
    PLN: 4.25767,
    PYG: 7117.363044,
    QAR: 4.022684,
    RON: 4.760523,
    RSD: 117.35601,
    RUB: 70.118216,
    RWF: 1029.156607,
    SAR: 4.143555,
    SBD: 9.21098,
    SCR: 15.136206,
    SDG: 49.852261,
    SEK: 10.636518,
    SGD: 1.498928,
    SHP: 1.459381,
    SLL: 10551.2031,
    SOS: 640.8063,
    SRD: 8.239852,
    STD: 23821.180343,
    SVC: 9.669951,
    SYP: 568.991343,
    SZL: 16.274542,
    THB: 33.594759,
    TJS: 10.71385,
    TMT: 3.866933,
    TND: 3.146024,
    TOP: 2.559911,
    TRY: 6.342809,
    TTD: 7.481619,
    TWD: 33.489296,
    TZS: 2547.201456,
    UAH: 27.114417,
    UGX: 4088.908029,
    USD: 1.104838,
    UYU: 41.292037,
    UZS: 10446.243483,
    VEF: 11.034569,
    VND: 25641.632983,
    VUV: 129.213865,
    WST: 2.94624,
    XAF: 654.262189,
    XAG: 0.064684,
    XAU: 0.000753,
    XCD: 2.98588,
    XDR: 0.803743,
    XOF: 653.519159,
    XPF: 119.70863,
    YER: 276.541951,
    ZAR: 16.2441,
    ZMK: 9944.866091,
    ZMW: 14.968524,
    ZWL: 355.757841
  };
  const [state, setState] = useState({ rate1: 0, rate2: 0 });
  const [currency, setCurrency] = useState({ cur1: "EUR", cur2: "USD" });
  return (
    <div className="container">
      <Title />
      <div className="converter">
        <Currency
          name={currency.cur1}
          value={state.rate1}
          rates={rates}
          convert={e => {
            setCurrency({ cur1: e, cur2: currency.cur2 });
            setState({ rate1: 0, rate2: 0 });
          }}
          action={e => {
            setState({
              rate1: e,
              rate2: (
                (e * rates[currency.cur2]) /
                rates[currency.cur1]
              ).toFixed(2)
            });
          }}
          init={() => {
            setState({ rate1: 0, rate2: 0 });
          }}
        />
        <Currency
          name={currency.cur2}
          value={state.rate2}
          rates={rates}
          convert={e => {
            setCurrency({ cur2: e, cur1: currency.cur1 });
            setState({ rate1: 0, rate2: 0 });
          }}
          action={e => {
            setState({
              rate2: e,
              rate1: (
                (e * rates[currency.cur1]) /
                rates[currency.cur2]
              ).toFixed(2)
            });
          }}
          init={() => {
            setState({ rate1: 0, rate2: 0 });
          }}
        />
      </div>
    </div>
  );
};

export default App;
