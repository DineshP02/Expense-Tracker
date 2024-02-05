import "./App.css";
import { useState } from "react";

function App() {
  const [Income, setIncome] = useState(0);
  const [Balance, setBalance] = useState(0);
  const [Post, setPost] = useState(0);
  const [Deposit, setDeposit] = useState(0);
  const [Withdraw, setWithdraw] = useState(0);

  const handleChange = (e) => {
    setPost(Number(e.target.value));
  };

  const handleIncome = () => {
    setIncome((prevIncome) => prevIncome + Post);
    setBalance((prevBalance) => prevBalance + Post);
  };

  const handleDeposit = () => {
    setBalance((prevBalance) => prevBalance + Post);
    setDeposit((prevdeposit) => prevdeposit + Post);
  };

  const handleWithdraw = () => {
    setBalance((prevBalance) => prevBalance - Post);
    setWithdraw((prevwithdraw) => prevwithdraw + Post);
  };

  return (
    <div className="App">
      <h1>Expense Tracker</h1>
      <div className="Box">
        <input
          type="text"
          placeholder="Enter Amount"
          className="Input"
          onChange={handleChange}
        />
      </div>
      <div className="button">
        <button
          style={{ width: "100px", backgroundColor: "skyblue" }}
          onClick={handleDeposit}
        >
          Extra Deposit
        </button>

        <button
          style={{ width: "100px", backgroundColor: "skyblue" }}
          onClick={handleWithdraw}
        >
          Withdraw
        </button>
      </div>
      <br />
      <button
        style={{
          marginLeft: "70px",

          backgroundColor: "skyblue",
        }}
        onClick={handleIncome}
      >
        Monthly Income
      </button>
      <div style={{ marginLeft: "10px" }}>
        <h5>Monthly Income = {Income}</h5>

        <h5>Balance = {Balance}</h5>
        <h5>Extra Deposit = {Deposit}</h5>
        <h5>Total withDraw = {Withdraw}</h5>
      </div>
    </div>
  );
}

export default App;
