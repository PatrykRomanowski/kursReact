import React, { useState } from "react";

import "./ExpenseForm.css";

const ExpenseForm = () => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmound] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  //   const [userInput, setUserInput] = useState({
  //     enteredTitle: "",
  //     enteredAmount: "",
  //     enteredDate: "",
  //   });

  //   const titleChangeHandler = (e) => {
  //     setUserInput((prevState) => {
  //       return { ...prevState, enteredTitle: e.target.value };
  //     });
  //   };
  const titleChangeHandler = (e) => {
    setEnteredTitle(e.target.value);
  };

  const amoundChangeHendler = (e) => {
    setEnteredAmound(e.target.value);
  };

  const dataChangeHendler = (e) => {
    setEnteredDate(e.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };

    console.log(expenseData);
    setEnteredAmound("0");
    setEnteredDate("2022-07-02");
    setEnteredTitle("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Tilte</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          ></input>
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            value={enteredAmount}
            onChange={amoundChangeHendler}
            min="0.01"
            step="0.01"
          ></input>
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            value={enteredDate}
            onChange={dataChangeHendler}
            min="2022-07-01"
          ></input>
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add submit</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
