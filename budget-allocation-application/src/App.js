import { useState } from 'react';
import BudgetAllocation from './Components/BudgetAllocation';
import RemainingBudget from './Components/RemainingBudget';
import SpentBudget from './Components/SpentBudget';
import './App.css';
import SelectCurrency from './Components/SelectCurrency';
import ChangeAllocation from './Components/ChangeAllocation';
import AllocationTable from './Components/AllocationTable';

function App() {

  // Set Our Variables
  let [currencyType, setCurrencyType] = useState("£");
  let [allotedBudget, setAllotedBudget] = useState(100);
  let [spentBudget, setSpentBudget] = useState(0);
  let [remainingBudget, setRemainingBudget] = useState(100);
  let [allocationTable, setAllocationTable] = useState([
    {
      "Department": "Marketing",
      "Budget": 0
    }
  ]);

  // This Function will find the total Budget Spent
  let calculateTotalBudgetSpent = (budgetTable) => {
    let totalSpend = 0;
    budgetTable.forEach(element => {
      totalSpend += element['Budget'];
    });
    setSpentBudget(totalSpend);
    setRemainingBudget(allotedBudget - totalSpend);
  }

  let changeAllocation = (newTable) => {
    let myTable = [...newTable]

    let totalSpend = 0;
    myTable.forEach(element => {
      totalSpend += element['Budget'];
    });
    if (allotedBudget < totalSpend) {
      window.alert("Hey, You are Out of Budget!");
    }
    else {
      calculateTotalBudgetSpent(myTable);
      setAllocationTable(myTable);
    }

  }

  let allotBudget = (newBudget) => {
    if (newBudget < 0) {
      window.alert("Budget Can Be Negative");
    }
    if (newBudget < spentBudget) {
      window.alert("Budget can't be less than spent budget");
    }
    else {
      setAllotedBudget(newBudget);
    }

  }

  return (
    <>
      <h1 style={{ marginLeft: "40px" }}>Company's Budget Allocation</h1>
      <div className='topInfoBar' style={{ justifyContent: "space-around" }}>
        <BudgetAllocation budget={allotedBudget} changeAllotBudget={allotBudget} currency={currencyType} />
        <RemainingBudget totalRemainingBudget={remainingBudget} currency={currencyType} />
        <SpentBudget totalSpendBudget={spentBudget} currency={currencyType} />
        <SelectCurrency currency={currencyType} selectCurrency={setCurrencyType} />
      </div>
      <AllocationTable currency={currencyType} allocationTableSet={allocationTable} changeAllocationTable={changeAllocation} />
      <h1 style={{ marginLeft: "40px" }}>Change Allocation</h1>
      <ChangeAllocation currency={currencyType} />
    </>
  );
}

export default App;
