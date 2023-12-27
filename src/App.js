import "./App.css";
import { useState } from "react";

function App() {
  const [income, setIncome] = useState(0);
  const [balance, setBalance] = useState(0);
  const [post, setPost] = useState(0);
  const [deposit, setDeposit] = useState(0);
  const [withdraw, setWithdraw] = useState(0);

  const handleChange = (e) => {
    setPost(Number(e.target.value));
  };

  const handleIncome = () => {
    setIncome((prevIncome) => prevIncome + post);
    setBalance((prevBalance) => prevBalance + post);
  };

  const handleDeposit = () => {
    setBalance((prevBalance) => prevBalance + post);
    setDeposit((prevdeposit) => prevdeposit + post);
  };

  const handleWithdraw = () => {
    setBalance((prevBalance) => prevBalance - post);
    setWithdraw((prevwithdraw) => prevwithdraw + post);
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
        <h5>Monthly Income = {income}</h5>

        <h5>Balance = {balance}</h5>
        <h5>Total Deposit = {deposit}</h5>
        <h5>Total withDraw = {withdraw}</h5>
      </div>
    </div>
  );
}

export default App;
