import { useEffect } from 'react';
import './App.css';

function App() {

  useEffect(() => {
    fetch('/allInfo')
      .then(data => data.json())
      .then(info => {
        console.log(info[0]);
      })

  }, [])

  return (
    <div className="app">
      Hello World, this is React

      <form action="../../controllers/findAll" method="get"
        className="form">
        <button type="submit">Connected?</button>
      </form>
    </div>
  );
}

export default App;
