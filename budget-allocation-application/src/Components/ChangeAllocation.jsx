

function ChangeAllocation(props) {
    // Component Private Data
    let department = "";
    let allocationType = "";
    let allocationAmount = "";

    // Function to handle the "Save" button click
    let addAllocation = () => {
        // Read values from the DOM elements
        department = document.getElementById("departmentSelect").value;
        allocationType = document.getElementById("allocationType").value;
        allocationAmount = document.getElementById("allocationAmount").value;

        // Now we do our Checks
        if(department == ""){
            window.alert("Please select a Department!");
        }
        else{

            // Now Add Allocation to the Table
            let allocationTable = [...props.allocationTableSet];

            // Check All the Table for Departments
            let isDepartmentFound = false;
            allocationTable.map((element, index) => {
                if(element["Department"] == department){
                    isDepartmentFound = true;
                    if(allocationType == "Add"){
                        allocationTable[index]["Budget"] += parseInt(allocationAmount);
                    }
                    else{
                        allocationTable[index]["Budget"] -= parseInt(allocationAmount);
                    }
                }
            });

            // If Our Department Not Found
            if(isDepartmentFound === false){
                allocationTable.push({
                    "Department": department,
                    "Budget": parseInt(allocationAmount)
                })
            }

            // Now Submit the Changes to the Main Table
            props.changeAllocationTable(allocationTable);
        }
    };

    return (
        // Allocation budget option
        <div className="topInfoBar">
            <div className="selectOption">
                <h2>Department</h2>
                <select name="" defaultValue="Choose Department" id="departmentSelect">
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
                <select name="" defaultValue="Add" id="allocationType">
                    <option value="Add">Add</option>
                    <option value="Sub">Sub</option>
                </select>
            </div>

            <div className="selectOption">
                <h2 style={{ backgroundColor: "white" }}>{props.currency}</h2>
                <input style={{ border: "1px solid black" }} type="number" name="" id="allocationAmount" />
            </div>

            <div className="selectOption">
                {/* Remove the parentheses from addAllocation */}
                <button onClick={addAllocation} style={{
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
