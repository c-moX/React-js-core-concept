import React, { useEffect, useState } from 'react'; // Import for the UseEffect
import logo from './logo.svg';
import './App.css';

function App() {
  // My Array In Objects (01)
  const products = [
    {name: 'PhotoShop', price: '$89.99'},
    {name: 'Adobe PDF', price: '$45.99'},
    // {name: 'Illustrator', price: '$95.99'}
  ];
  // My Array Code (02)
  const nayoks = ['Alomgir', 'Razzak', 'Rubel', 'Shakib'];

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Component, Props, useState, and useEffect (API)</h2>

        {/* Display Dynamic Code Is Here (01) */}
        {
          products.map(pd => <Product product={pd}></Product>)
        }

        {/* Display Dynamic Code Is Here (02) */}
        <ul>
          {
            nayoks.map(nayok => <li>{nayok}</li>)
          }
        </ul>

        {/* Display Dynamic Code Is Here (03) */}
        <Counter></Counter>

        {/* Display Dynamic Code Is Here (04) */}
        <Users></Users>
      </header>
    </div>
  );
}

// Dynamic-Text && props-parameter Function Is Here (01)
function Product(props) {
  const productStyles = {
    border: '1px solid gray',
    borderRadius: '5px',
    backgroundColor: 'lightgray',
    padding: '10px',
    margin: '10px',
    float: 'left'
  }

  const {name, price} = props.product;
  return(
    <div style={productStyles}>
      <h1>{name}</h1>
      <h3>{price}</h3>
      <button>Buy Now</button>
    </div>
  );
}

// EventListenner && useState count Function Is Here (03)
function Counter(){
  const [count, setCount] = useState(10); // Counter values && Set values
  const handleIncrease = () => setCount(count + 1); // Increase button
  const handleDecrease = () => setCount(count - 1); // Decrease button
  // {
  //   const newCount = count + 1;
  //   setCount(newCount);
  // };

  return(
    <div>
      <h1>Count: {count}</h1>
      <button onClick={handleIncrease}>Increase</button>
      <button onClick={handleDecrease}>Decrease</button>
    </div>
  );
}

// API && useState && count Function Is Here (04)
function Users(){
  const [users, setUsers] = useState([]);
  useEffect(() =>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data));
  }, [])

  return(
    <div>
      <h3>Dynamic Users: {users.length}</h3>
      <ol>
        {
          users.map(user => <li>{user.name}</li>) // key = {user.id}
        }
      </ol>
    </div>
  );
}

export default App;
