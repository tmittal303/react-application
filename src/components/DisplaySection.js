import {useContext} from 'react';
import "../css/App.css";
import whewheContext from "../context/WheWheContext";

const DisplaySection = ()=>{
    const {selectedNumber, total} = useContext(whewheContext)
 
return(
    <div className="number-list-display">
        <h3>Numbers Selected:</h3>
        {selectedNumber.map((number)=>{
            return <h4>Numbers: {number}</h4>})}
 
            <h4>Total Amount: $ {total}</h4>
        </div>
)
    
}

export default DisplaySection;