import React, { useState } from "react";

const InvestmentForm = (props) => {
  const [currentSaving, setCurrentSaving] = useState("1000");
  const [yearlySaving, setYearlySaving] = useState("10000");
  const [expectedInterest, setExpectedInterest] = useState("10");
  const [investmentDuration, setInvestmentDuration] = useState("10");

  const currentSavingHandler = (event) => {
    setCurrentSaving(event.target.value);
  };

  const yearlySavingHandler = (event) => {
    setYearlySaving(event.target.value);
  };

  const expectedInterestHandler = (event) => {
    setExpectedInterest(event.target.value);
  };

  const investmentDurationHandler = (event) => {
    setInvestmentDuration(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const userInput = {
      "current-savings": +currentSaving,
      "yearly-contribution": +yearlySaving,
      "expected-return": +expectedInterest,
      "expected-duration": +investmentDuration,
    };
    props.onCalculate(userInput);
    setCurrentSaving("1000");
    setYearlySaving("10000");
    setExpectedInterest("10");
    setInvestmentDuration("10");
  };

  const resetHandler = () => {
    setCurrentSaving("");
    setYearlySaving("");
    setExpectedInterest("");
    setInvestmentDuration("");
  };
  return (
    <form className="form" onSubmit={submitHandler}>
      <div className="input-group">
        <p>
          <label htmlFor="current-savings">Current Savings ($)</label>
          <input
            value={currentSaving}
            type="number"
            id="current-savings"
            onChange={currentSavingHandler}
          />
        </p>
        <p>
          <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
          <input
            value={yearlySaving}
            type="number"
            id="yearly-contribution"
            onChange={yearlySavingHandler}
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label htmlFor="expected-return">
            Expected Interest (%, per year)
          </label>
          <input
            value={expectedInterest}
            type="number"
            id="expected-return"
            onChange={expectedInterestHandler}
          />
        </p>
        <p>
          <label htmlFor="duration">Investment Duration (years)</label>
          <input
            value={investmentDuration}
            type="number"
            id="duration"
            onChange={investmentDurationHandler}
          />
        </p>
      </div>
      <p className="actions">
        <button type="reset" className="buttonAlt" onClick={resetHandler}>
          Reset
        </button>
        <button type="submit" className="button">
          Calculate
        </button>
      </p>
    </form>
  );
};

export default InvestmentForm;
