import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import styled from 'styled-components'

import NasaPhoto from "./components/NasaPhoto.js"
import Header from "./components/Header.js"


const API_KEY = "1TfVcwMbYqKXt3EPA3E5bsBepCmNc9Xe40T4k0oL";


// Returns today's date as 'YYYY-MM-DD' format string
function today() {
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, '0');
  var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  var yyyy = today.getFullYear();
  return `${yyyy}-${mm}-${dd}`
}

const StyledApp = styled.div`
  input {
    width: 30%;
  }
`;


function App() {

  const [data, setData] = useState();
  const [date, setDate] = useState(today());

  // Saves the input value as the date that user has input
  function saveData() {
    setDate(document.querySelector("input").value);
    document.querySelector("input").value = "";
  }

  useEffect(() => {
    axios.get(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&date=${date}`)
      .then(results => {
        console.log(results);
        setData(results.data);
        console.log('data',data);
      })
      .catch(err => console.error(err));
  }, [date])

  return (
    <StyledApp className="App">
      <Header date={date} setDate={setDate} />
      {data && <NasaPhoto photo={data}/>}
    </StyledApp>
  );
}

export default App;