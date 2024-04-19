import React from 'react';
import './App.css';

function App() {
  const [name, setName] = React.useState(''); 

  return (
    <div className="App">
      <h1>Who is mayor?</h1>
      <p>{name}</p>
      <button className='MayorBtn' onClick={(e) => {
        fetch('http://localhost:4000/api/getMayor')
        .then(response => response.json())
        .then(data => {
          console.log(data.mayor.name);
          setName("Current Mayor: "+data.mayor.name);
        })
        .catch(error => {
          console.error('Error:', error);
        });
      }}>Get Current Mayor</button>
      </div>
  );
}

export default App;
