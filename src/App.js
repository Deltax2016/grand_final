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
  const [ flag, setFlag ] = useState(0)
  const [ ready, setReady ] = useState(0)
  const [ textData, setTextData ] = useState({})

  useEffect(() => {
    let a = findGetParameter('code')

    if (!ready) {

      const requestOptions = {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
      };

      fetch(`http://45.134.255.154:31145/get_token?code=${a}`, requestOptions)
          .then(response => response.json())
          .then(data => {
            console.log(data);
            setReady(1);
            if (data.token !== "error") localStorage.setItem('code', data.token)
          })
    }

    
  }, [])

  useEffect(() => {
    if (ready) {
      let code = localStorage.getItem('code');

      const requestOptions = {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
      };
      
      fetch(`http://45.134.255.154:31145/get_info?token=${code}`, requestOptions)
          .then(response => response.json())
          .then(data => {
            console.log(data);
            setFlag(1);
            setTextData(data)
        })
    }
  },[ready])




  return (
    <div className="App">
      <MyAppBar img={textData.image_user}/>
      { flag ? <Dashboard data={textData}/> : <div></div>}
      { !flag && <h2>Loading...</h2>}
    </div>
  );
}

export default App;
