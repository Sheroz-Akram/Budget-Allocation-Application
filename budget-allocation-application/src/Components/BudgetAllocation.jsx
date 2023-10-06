function BudgetAllocation(props) {

    return (
        // Allocation budget option
        <div className="budgetAllocation">
            <h2>Budget: </h2>

            <div style={{display: "flex", alignItems: "center", position: "absolute", right: "10px"}}>
                <h2>{props.currency}</h2>
                <input style={{marginLeft: "10px", fontSize: "17px"}} max={20000} step={10} type="number"></input>
            </div>
        </div>
    );
}

export default BudgetAllocation;
