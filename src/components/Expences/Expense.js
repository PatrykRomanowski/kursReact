import React, { useState } from "react";

import ExpenseItem from "./EkspenseItem";
import ExpensesFilter from "./ExpenseFilter";
import ExpencesChart from "./ExpencesChar";
import Card from "../UI/Card";
import "./Expense.css";

function Expense(props) {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterYearHandler = (year) => {
    setFilteredYear(year);
    console.log(filteredYear);
  };

  const expenseWithYear = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div>
      <Card className="ExpenseContener">
        <ExpensesFilter
          selected={filteredYear}
          onFilterYear={filterYearHandler}
        />

        <ExpencesChart expenses={expenseWithYear} />

        {expenseWithYear.length === 0 ? (
          <p>No expences found</p>
        ) : (
          expenseWithYear.map((expense) => (
            <ExpenseItem
              key={expense.id}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />
          ))
        )}

        {/* <ExpenseItem
          title={props.items[0].title}
          amount={props.items[0].amount}
          date={props.items[0].date}
        ></ExpenseItem>{" "}
        <ExpenseItem
          title={props.items[1].title}
          amount={props.items[1].amount}
          date={props.items[1].date}
        ></ExpenseItem>{" "} */}
      </Card>
    </div>
  );
}

export default Expense;
