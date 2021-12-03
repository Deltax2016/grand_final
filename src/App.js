import logo from './logo.svg';
import './App.css';
import MyAppBar from "./components/Appbar.jsx"
import Dashboard from "./components/Dashboard.jsx"
import { useState, useEffect } from "react"

function findGetParameter(parameterName) {
  var result = null,
  tmp = [];
  window.location.search
      .substr(1)
      .split("&")
      .forEach(function (item) {
        tmp = item.split("=");
        if (tmp[0] === parameterName) result = decodeURIComponent(tmp[1]);
      });
  return result;
}

function App() {

  const [ token, setToken ] = useState("")

  useEffect(() => {
    let a = findGetParameter('token')
    setToken(a)
    console.log(a)
  }, [])

  return (
    <div className="App">
      <MyAppBar />
      <Dashboard />
    </div>
  );
}

export default App;
