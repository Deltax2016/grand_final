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
  const [ flag, setFlag ] = useState(1)
  const [ name, setName ] = useState("")
  const [  ]

  useEffect(() => {
    let a = findGetParameter('code')
    setToken(a)
    if (a!==null) {localStorage.setItem('code', a); console.log(a)}
    let code = localStorage.getItem('code');
    console.log(code)
    /*
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
    };
    
    fetch(`http://45.134.255.154:30714/get_info?code=${code}`, requestOptions)
        .then(response => response.json())
        .then(data => {
          console.log(data);
          setFlag(1);
        })
      */
  }, [])

  useEffect(() => {
    // GET request using fetch inside useEffect React hook
    }, []);

  return (
    <div className="App">
      { flag && <MyAppBar />}
      { flag && <Dashboard />}
      { !flag && <h2>Loading...</h2>}
    </div>
  );
}

export default App;
