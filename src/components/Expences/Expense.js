import ExpenseItem from "./EkspenseItem";
import Card from "../UI/Card";
import "./Expense.css";

function Expense(props) {
  return (
    <Card className="ExpenseContener">
      <ExpenseItem
        title={props.items[0].title}
        amount={props.items[0].amount}
        date={props.items[0].date}
      ></ExpenseItem>{" "}
      <ExpenseItem
        title={props.items[1].title}
        amount={props.items[1].amount}
        date={props.items[1].date}
      ></ExpenseItem>{" "}
    </Card>
  );
}

export default Expense;
