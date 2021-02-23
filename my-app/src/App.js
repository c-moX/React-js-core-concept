import logo from './logo.svg';
import './App.css';

function App() {
  // My Array In Objects
  const products = [
    {name: 'PhotoShop', price: '$89.99'},
    {name: 'Visual Studio', price: '$80.99'},
    {name: 'Illustrator', price: '$95.99'}
  ];
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello! <code>ReactApp,</code> You are welcome!</p>

        {/* My Dynamic Code Is Here (01) */}
        <Product product={products[0]}></Product>
        <Product product={products[1]}></Product>
        <Product product={products[2]}></Product>
      </header>
    </div>
  );
}

// My Function Is Here (01)
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

export default App;
