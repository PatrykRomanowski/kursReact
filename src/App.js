import Expense from "./components/Expences/Expense";
import NewExpense from "./components/newExpence/NewExpense";

import "./App.css";
import { useState } from "react";

const INITIAL_DATA = [
  {
    id: "1",
    title: "po 55 lekcji",
    amount: 102.78,
    date: new Date(2021, 7, 15),
  },
  {
    id: "2",
    title: "lego",
    amount: 332.11,
    date: new Date(2022, 6, 15),
  },
  {
    id: "3",
    title: "lego2",
    amount: 32.11,
    date: new Date(2020, 6, 15),
  },
];

const App = () => {
  const [expences, setExpenses] = useState(INITIAL_DATA);

  const addExpenseHandler = (expense) => {
    console.log("app.js");
    console.log(expense);
    setExpenses((prevExpences) => {
      return [...prevExpences, expense];
    });
  };

  return (
    <div className="App">
      <h1>XD</h1>
      <p>nowy tekst</p>
      <NewExpense onAddExpence={addExpenseHandler} />
      <Expense items={expences} />
    </div>
  );
};

export default App;
