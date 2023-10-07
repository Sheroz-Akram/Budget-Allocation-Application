import logo from './logo.svg';
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

  return (
    <>
      <h1 style={{marginLeft: "40px"}}>Company's Budget Allocation</h1>
      <div className='topInfoBar' style={{justifyContent: "space-around"}}>
        <BudgetAllocation currency={currencyType} />
        <RemainingBudget currency={currencyType} />
        <SpentBudget currency={currencyType} />
        <SelectCurrency currency={currencyType} selectCurrency={setCurrencyType} />
      </div>
      <AllocationTable />
      <h1 style={{marginLeft: "40px"}}>Change Allocation</h1>
      <ChangeAllocation currency={currencyType} />
    </>
  );
}

export default App;
