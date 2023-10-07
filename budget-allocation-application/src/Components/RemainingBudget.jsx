function RemainingBudget(props) {

    return (
        // Allocation budget option
        <div className="RemainingBudget">
            <h2>Remaining: {props.currency}{props.totalRemainingBudget}</h2>
        </div>
    );
}

export default RemainingBudget;
