import React from 'react'; //React module
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome' //FontAwesome Icons
import { faCoffee,faShoppingCart } from '@fortawesome/free-solid-svg-icons' //FontAwesome Icons
import './Product.css'; //Main Styles

const Product = (props) => {
    // console.log(props);
    const {img, name, seller, category, price, stock} = props.product;

    return (
        <div className="product">
            <div className="prod-image">
                <img src={img} alt="product-img"/>
            </div>
            <div className="prod-detail">
                <h4 className="prod-name">{name}</h4>
                <p><small>by: {seller}</small></p>
                <p><small>Categories: {category}</small></p>
                <h5 className="prod-price">${price}</h5>
                <p><small>only {stock} left in stock - order soon</small></p>
                <button 
                    className="cart-btn" 
                    onClick= {() => props.handleAddProduct(props.product)}
                >
                    <FontAwesomeIcon icon={faShoppingCart} /> add to cart
                </button>
            </div>
        </div>
    );
};

export default Product;