import { React, useContext } from 'react';
import "../css/App.css";
import whewheContext from "../context/WheWheContext";
import Header from "../components/Header";
import Footer from "../components/Footer";
import {Link} from "react-router-dom";

const CashScreen = () => {
    const { total, selectedNumber } = useContext(whewheContext)
   
    const submitButtonClicked = ()=>{
            alert("Saved successfully!");
    }

    return (
        <div className="Cash-Screen">
            <Header/>
            <div className="Amount-received">
                <h3 for="totalAmount">Numbers Selected:</h3>
                
                    <label for="numbersSelected">
                    {selectedNumber.map((number)=>{
                        return <h3>{number}</h3>})}
                        </label>
                
                <h3 for="received">Total Money Assigned: {total}</h3>
            
                <button className="confirm" onClick={submitButtonClicked}>Confirm</button>
                <Link to= "/">  
                    <button className="goBack">Go Back</button>
                </Link>
            </div>
            <Footer/>
        </div>
    )

}

export default CashScreen;