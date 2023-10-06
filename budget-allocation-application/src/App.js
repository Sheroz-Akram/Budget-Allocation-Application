import logo from './logo.svg';
import { useState } from 'react';
import BudgetAllocation from './Components/BudgetAllocation';
import RemainingBudget from './Components/RemainingBudget';
import SpentBudget from './Components/SpentBudget';
import './App.css';
import SelectCurrency from './Components/SelectCurrency';

function App() {

  // Set Our Variables
  let [currencyType, setCurrencyType] = useState("£");

  return (
    <>
      <h1 style={{marginLeft: "40px"}}>Company's Budget Allocation</h1>
      <div className='topInfoBar'>
        <BudgetAllocation currency={currencyType} />
        <RemainingBudget currency={currencyType} />
        <SpentBudget currency={currencyType} />
        <SelectCurrency currency={currencyType} selectCurrency={setCurrencyType} />
      </div>
    </>
  );
}

export default App;
