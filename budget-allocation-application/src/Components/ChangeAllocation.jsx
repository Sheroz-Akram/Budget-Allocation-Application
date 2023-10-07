function ChangeAllocation(props) {

    return (
        // Allocation budget option
        <div className="topInfoBar">
            <div className="selectOption">
                <h2>Department</h2>
                <select name="" defaultValue="Choose Department" id="">
                    <option value="">Choose Department</option>
                    <option value="Marketing">Marketing</option>
                    <option value="Finance">Finance</option>
                    <option value="Sales">Sales</option>
                    <option value="Human Resource">Human Resource</option>
                    <option value="IT">IT</option>
                </select>
            </div>

            <div className="selectOption">
                <h2>Allocation</h2>
                <select name="" defaultValue="Add" id="">
                    <option value="Add">Add</option>
                    <option value="Sub">Sub</option>
                </select>
            </div>

            <div className="selectOption">
                <h2 style={{backgroundColor: "white"}}>{props.currency}</h2>
                <input style={{border: "1px solid black"}} type="number" name="" id="" />
            </div>

            <div className="selectOption">
                <button style={{
                    backgroundColor: "#056EFD",
                    color: "white",
                    fontSize: "20px",
                    border: "none",
                    padding: "15px",
                    borderRadius: "0px 10px 10px 0px"
                }}>Save</button>
            </div>
        </div>
    );
}

export default ChangeAllocation;
