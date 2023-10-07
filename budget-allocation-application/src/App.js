// Import necessary components and styles
import { useState } from 'react';
import BudgetAllocation from './Components/BudgetAllocation';
import RemainingBudget from './Components/RemainingBudget';
import SpentBudget from './Components/SpentBudget';
import './App.css';
import SelectCurrency from './Components/SelectCurrency';
import ChangeAllocation from './Components/ChangeAllocation';
import AllocationTable from './Components/AllocationTable';

function App() {
  // Define state variables using the useState hook
  let [currencyType, setCurrencyType] = useState("£"); // Current currency type
  let [allotedBudget, setAllotedBudget] = useState(100); // Total allocated budget
  let [spentBudget, setSpentBudget] = useState(0); // Total spent budget
  let [remainingBudget, setRemainingBudget] = useState(100); // Remaining budget
  let [allocationTable, setAllocationTable] = useState([]); // Table for budget allocation details

  // Function to calculate the total budget spent
  let calculateTotalBudgetSpent = (budgetTable) => {
    let totalSpend = 0;
    budgetTable.forEach(element => {
      totalSpend += element['Budget'];
    });
    setSpentBudget(totalSpend);
    setRemainingBudget(allotedBudget - totalSpend);
  }

  // Function to handle changes in budget allocation
  let changeAllocation = (newTable) => {
    let myTable = [...newTable]

    let totalSpend = 0;
    myTable.forEach(element => {
      totalSpend += element['Budget'];
    });
    if (allotedBudget < totalSpend) {
      window.alert("Hey, You are Out of Budget!");
    }
    else if(totalSpend < 0){
      window.alert("Spend Budget can't be Negative");
    }
    else {
      calculateTotalBudgetSpent(myTable);
      setAllocationTable(myTable);
    }
  }

  // Function to handle changes in the allocated budget
  let allotBudget = (newBudget) => {
    if (newBudget < 0) {
      window.alert("Budget Can Be Negative");
    }
    else if (newBudget < spentBudget) {
      window.alert("Budget can't be less than spent budget");
    }
    else {
      setAllotedBudget(newBudget);
    }
  }

  // Render the components and display budget-related information
  return (
    <>
      <h1 style={{ marginLeft: "40px" }}>Company's Budget Allocation</h1>
      <div className='topInfoBar' style={{ justifyContent: "space-around" }}>
        {/* Display budget allocation, remaining budget, spent budget, and select currency */}
        <BudgetAllocation budget={allotedBudget} changeAllotBudget={allotBudget} currency={currencyType} />
        <RemainingBudget totalRemainingBudget={remainingBudget} currency={currencyType} />
        <SpentBudget totalSpendBudget={spentBudget} currency={currencyType} />
        <SelectCurrency currency={currencyType} selectCurrency={setCurrencyType} />
      </div>
      {/* Display the allocation table */}
      <AllocationTable currency={currencyType} allocationTableSet={allocationTable} changeAllocationTable={changeAllocation} />
      <h1 style={{ marginLeft: "40px" }}>Change Allocation</h1>
      {/* Display a component for changing budget allocation */}
      <ChangeAllocation currency={currencyType} allocationTableSet={allocationTable} changeAllocationTable={changeAllocation} />
    </>
  );
}

export default App;
