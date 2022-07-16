import React, { useState } from "react";

import ExpenseData from "./ExpenseData";
import ExpenseAmonut from "./ExpenseAmount";
import Card from "../UI/Card";
import "./ExpenseItem.css";

function ExpenseItem(props) {
  const handler = () => {
    console.log("click!!!!");
    setTilte("XD");
  };

  const [title, setTilte] = useState(props.title);

  return (
    <Card className="expense-item">
      <ExpenseData date={props.date}> </ExpenseData>
      <div className="expense-item__description">
        <h2> {title} </h2> <ExpenseAmonut amount={props.amount} />
      </div>
      <button onClick={handler}>Klik</button>
    </Card>
  );
}

export default ExpenseItem;
