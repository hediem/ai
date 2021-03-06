import React from "react";
import { useEffect, useState } from "react/cjs/react.development";

import "./UI.css";
import Link from "./Link";

const UI = ({ number, setNumber, setNumPlayer }) => {
  return (
    <div className="main">
      <div className="d-flex justify-content-center align-items-center">
        <h1>Have a nice time!</h1>

        <br />
        <h3>Choose first Player</h3>
        <br />
        <div className="d-grid gap-2 d-md-block">
          <button
            className="btn btn-primary"
            type="button"
            style={{ marginRight: 25 }}
            value={1}
            onClick={() => setNumPlayer(1)}
          >
            You
          </button>
          <button
            className="btn btn-primary"
            type="button"
            style={{ marginLeft: 25 }}
            value={2}
            onClick={() => setNumPlayer(2)}
          >
            Computer
          </button>
        </div>

        <br />

        <div className="dots">
          <label htmlFor="my-input">Select number of dots: </label>
          <input
            id="my-input"
            type="number"
            className="my-input"
            min="0"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
          ></input>
        </div>

        <Link className={"btn btn-primary start"} href="/game">
          Start
        </Link>
      </div>
    </div>
  );
};

export default UI;
