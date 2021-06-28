import { React, useState, useContext } from 'react';
import Number from "./Numbers";
import whewheContext from "../context/WheWheContext";
import "../css/App.css";
import {useHistory} from "react-router-dom";

//just declared the array of numbers
const NumberSelectedSection = () => {
    const { setNumberSelected, setTotalValue, total, setClear, setCount, count} = useContext(whewheContext)
    const history = useHistory();
    const numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

    //Random Button functionality
    function randomButtonClicked() {
        var arr = [];
        while (arr.length < 5) {
            var r = Math.floor(Math.random() * 20) + 1;
            if (arr.indexOf(r) === -1) arr.push(r);
        }
        setNumberSelected(arr)
        setCount(5)
    }

    //This has logic of how cash buttons only work if user selects 5 numbers and cash valiue should be greater than 0.
    const cashButtonClicked = () => {
        if (count === 5 && total > 0) {
            history.push('/cash-screen');
        }
        else {
            alert("Select 5 numbers and select the amount")
        }
    }
    //Clears everything to default values
    const clearButtonClicked = () => {
        window.location.reload(false);
        setTotalValue(0)
        setNumberSelected([])
        setCount(1)
        setClear(true)
    }

    return (
        <div className="NumberSection">
            <div className="Number-rows nochange">
                {numberArray.map((number) => {
                    return <Number number={number} />
                })}
                <button onClick={cashButtonClicked} className="confirms-buttons noChange">
                    Cash
                </button>                
                <button onClick={clearButtonClicked} className="confirms-buttons noChange">
                    Clear
                </button> 
                <button onClick={randomButtonClicked} className="random-buttons noChange">
                    Random
                </button>
            </div>
        </div>
    )


}


export default NumberSelectedSection


