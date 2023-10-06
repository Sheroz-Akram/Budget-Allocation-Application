function SelectCurrency(props) {
    const setCurrency = (event) => {
        const valueToSet = event.target.value;
        props.selectCurrency(valueToSet);
    }

    return (
        // The Budget Spent So far
        <div className="currencySelect">
            <h2 style={{ color: "white", marginRight: "10px" }}>Currency</h2>
            <select
                name=""
                defaultValue={props.currency}
                id="currencySelectOption"
                onChange={setCurrency}
                style={{
                    fontSize: "30px",
                    backgroundColor: "#95E49A",
                    border: "none",
                    color: "white"
                }}
            >
                <option value="$">$ Dollar</option>
                <option value="£">£ Pound</option>
                <option value="€">€ Euro</option>
                <option value="₹">₹ Rupee</option>
            </select>
        </div>
    );
}

export default SelectCurrency;
