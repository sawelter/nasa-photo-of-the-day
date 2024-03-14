import React from "react";
import '../styling/Header.css'


const Header = (props) => {

    const { date, setDate } = props;

    function saveData() {
        setDate(document.querySelector("input").value);
        document.querySelector("input").value = "";
    }

    return (
        <div className="header">
            <h1>NASA Photo of the Day</h1>
            <div className="input-date">
                <input placeholder="Enter date in 'YYYY-MM-DD' format" />
                <button onClick={saveData}>Update</button>
            </div>
        </div>
    )
};


export default Header;