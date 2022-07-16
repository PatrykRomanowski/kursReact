import ExpenseData from "./ExpenseData";
import ExpenseAmonut from "./ExpenseAmount";
import Card from "../UI/Card";
import "./ExpenseItem.css";

function ExpenseItem(props) {
  return (
    <Card className="expense-item">
      <ExpenseData date={props.date}> </ExpenseData>{" "}
      <div className="expense-item__description">
        <h2> {props.title} </h2> <ExpenseAmonut amount={props.amount} />{" "}
      </div>{" "}
    </Card>
  );
}

export default ExpenseItem;
