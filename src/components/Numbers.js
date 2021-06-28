import { useState, useEffect, useContext } from 'react';
import whewheContext from "../context/WheWheContext";
import "../css/App.css";

const Numbers = (props) => {

    const { selectedNumber, setNumberSelected, clear, setClear, count, setCount } = useContext(whewheContext)

    let [currentState, setCurrentState] = useState("noChange");
    let [clickState, setClickState] = useState(false)
    //changing the borders
    useEffect(() => {
        if (clickState === false) {
            setCurrentState("noChange");
        }
        else {
            setCurrentState("changeInBorder");
        }
    }, [clickState])

    //Clear everything (back to start)
    useEffect(() => {
        if (clear === true) {
            setClear(false)
            setCurrentState("noChange")
        }
    }, clear)
    //when user click buttons it comes to this function and checks the logic.
    const clickedButton = () => {
        let arr = selectedNumber;
        //if clickState is true which means its selected than this logic removes the number from the array of selected Number
        if (clickState === true) {
            setClickState(false)
            if (selectedNumber.includes(props.number)) {
                setCount(count - 1)
                for (let i = 0; i < selectedNumber.length; i++) {
                    if (selectedNumber[i] === props.number) {
                        arr.splice(i, 1)
                    }
                }
                setNumberSelected(arr);
            }
        }
        else {
            if (count < 5) {
                setCount(count + 1)
                setClickState(true);
                setNumberSelected(arr => [...arr, props.number]);
            }
            else {
                alert("You can not select more than 5 numbers");
            }
        }

    }

    return (
        <button className={'color' + currentState} onClick={clickedButton}>{props.number}</button>
    )
}

export default Numbers
