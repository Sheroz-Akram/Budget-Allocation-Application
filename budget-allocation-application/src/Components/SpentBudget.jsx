function SpentBudget(props) {

    return (
        // The Budget Spent So far
        <div className="budgetSpent">
            <h2>Spent So Far: {props.currency}{props.totalSpendBudget}</h2>
        </div>
    );
}

export default SpentBudget;
