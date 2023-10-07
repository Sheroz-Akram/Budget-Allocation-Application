import addImage from '../add.png'
import subImage from '../sub.png'
import crossImage from '../cross.png'

function AllocationTable(props) {

    return (
        <>
            <div className="container">
                <h1>Allocation Table</h1>
                <table>
                    <tr>
                        <th><h2>Department</h2></th>
                        <th><h2>Allocation Budget</h2></th>
                        <th><h2>Increase by 10</h2></th>
                        <th><h2>Decrease by 10</h2></th>
                        <th></th>
                    </tr>
                    {props.allocationTableSet.map((element, index) => (
                        <tr key={index}>
                            <td><h2>{element["Department"]}</h2></td>
                            <td><h2>{props.currency}{element["Budget"]}</h2></td>
                            <td><img onClick={() => {
                                let table = props.allocationTableSet;
                                table[index]['Budget'] += 10;
                                props.changeAllocationTable(table);
                            }} src={addImage} width={"50px"} alt="" /></td>
                            <td><img onClick={() => {
                                let table = props.allocationTableSet;
                                table[index]['Budget'] -= 10;
                                props.changeAllocationTable(table);
                            }} src={subImage} width={"50px"} alt="" /></td>
                            <td><img src={crossImage} width={"40px"} alt="" /></td>
                        </tr>
                    ))}
                    <tr></tr>
                    <tr></tr>
                </table>
            </div>
        </>
    );
}

export default AllocationTable;
