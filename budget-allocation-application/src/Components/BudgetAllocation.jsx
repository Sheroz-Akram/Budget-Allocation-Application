function BudgetAllocation(props) {

    const setBudget = (event) => {
        if (event.key === 'Enter') {
            const valueToSet = event.target.value;
            props.changeAllotBudget(valueToSet);
            event.target.value = props.budget;
        }

    }

    return (
        // Allocation budget option
        <div className="budgetAllocation">
            <h2>Budget: </h2>

            <div style={{ display: "flex", alignItems: "center", position: "absolute", right: "10px" }}>
                <h2>{props.currency}</h2>
                <input onKeyDown={setBudget} style={{ marginLeft: "10px", fontSize: "17px" }} defaultValue={props.budget} max={20000} step={10} type="number"></input>
            </div>
        </div>
    );
}

export default BudgetAllocation;
