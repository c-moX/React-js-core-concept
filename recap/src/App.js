import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  // Step: 02
  // const prodName = ['Table Watch', 'Smart Phone', 'Digital Laptop'];
  // const prodPrice = ['$25', '$50', '$100'];

  // Step: 03
  const products = [
    { name: 'Table Watch', price: '$25' },
    { name: 'Smart Phone', price: '$50' },
    // {name: 'Small Tablet', price: '$100'},
    // {name: 'Digital Laptop', price: '$150'}
  ];

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Component, Props (passed parameter)</h2>

        {/* Step: 01 */}
        {/* <div>
          <Product></Product>
          <Product></Product>
        </div> */}

        {/* Step: 02 */}
        {/* <div>
          <Product name={prodName[0]} price={prodPrice[0]}></Product>
          <Product name={prodName[1]} price={prodPrice[1]}></Product>
        </div> */}

        {/* Step: 03 */}
        <div>
          { products.map(pd => <Product product={pd}></Product>) }
        </div>

      </header>
    </div>
  );
}

// Step: 01
// function Product() {
//   const productStyle = {
//     border: '1px solid red',
//     borderRadius: '10px',
//     padding: '10px',
//     margin: '10px',
//     color: 'red',
//     backgroundColor: 'green',
//     fontFamily: 'serif',
//     width: '400px'
//   }

//   return (
//     <div style={productStyle}>
//       <h2>Name: Table Watch</h2>
//       <p>Price: $25</p>
//     </div>
//   )
// }


// Step: 02
// function Product(props){
//   const productStyle = {
//     border: '1px solid red',
//     borderRadius: '10px',
//     padding: '10px',
//     margin: '10px',
//     color: 'red',
//     backgroundColor: 'yellow',
//     fontFamily: 'serif',
//     width: '400px'
//   }

//   return(
//     <div style={productStyle}>
//       <h2>{props.name}</h2>
//       <p>Price: {props.price}</p>
//     </div>
//   )
// }


// Step: 03
function Product(props){
  const productStyle = {
    border: '1px solid yellow',
    borderRadius: '10px',
    padding: '10px',
    margin: '10px',
    color: 'yellow',
    backgroundColor: 'tomato',
    fontFamily: 'serif',
    width: '400px'
  }

  const {name, price} = props.product;
  return(
    <div style={{display:'flex', flexWrap:'wrap'}}>
      <div style={productStyle}>
        <h2>{name}</h2>
        <h4>Price: {price}</h4>
      </div>

      <div style={productStyle}>
        <h2>{name}</h2>
        <h4>Price: {price}</h4>
      </div>
    </div>
  )
}

export default App;
