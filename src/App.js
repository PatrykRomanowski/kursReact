import Expense from "./components/Expences/Expense";

import "./App.css";

const App = () => {
  const expences = [
    {
      id: "1",
      title: "zakupy podstawowe",
      amount: 102.78,
      date: new Date(2022, 7, 15),
    },
    {
      id: "2",
      title: "lego",
      amount: 332.11,
      date: new Date(2022, 6, 15),
    },
  ];

  return (
    <div className="App">
      <h1>XD</h1>
      <p>nowy tekst</p>
      <Expense items={expences} />
    </div>
  );
};

export default App;
