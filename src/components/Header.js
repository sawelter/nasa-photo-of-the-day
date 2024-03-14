import styled from "styled-components";
import React from "react";

const headerBackgroundURL = "https://images.unsplash.com/photo-1538370965046-79c0d6907d47?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2069&q=80";

const HeaderStyling = styled.div`
    max-width:100%;
    // height: 20vh;
    padding: 40px 0;
    background-image: url(${headerBackgroundURL});
    background-color: black;
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: space-evenly;


    h1 {
        color: white;
        font-size: 4rem;
        font-family: 'Orbitron', sans-serif;
        font-weight: 600;
    }

    .input-date {
        margin-top: 20px;

        button {
            margin: 0 5px;
        }
    }

    @media(max-width: 850px) {
        h1 {
            font-size: 2.5rem;
        }
    }
    @media(max-width: 600) {
        h1 {
            font-size: 2rem;
        }
    }

`;

const Header = (props) => {

    const { date, setDate } = props;

    function saveData() {
        setDate(document.querySelector("input").value);
        document.querySelector("input").value = "";
    }

    return (
        <HeaderStyling>
            <h1>NASA Photo of the Day</h1>
            <div className="input-date">
                <input placeholder="Enter date in 'YYYY-MM-DD' format" />
                <button onClick={saveData}>Update</button>
            </div>
        </HeaderStyling>
    )
};



export default Header;