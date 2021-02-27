import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const cart = props.cart;
    // console.log(cart);
    // const total = cart.reduce( (total, prd) => total + prd.price, 0)

    // Total Cost
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
        const product = cart[i];
        total = total + product.price;

    }

    // Shipping Cost Condition
    let shipping = 0;
    if (total > 50) {
        shipping = 0;
    }
    else if (total > 25) {
        shipping = 4.99;
    }
    else if (total > 0) {
        shipping = 9.99;
    }

    const tax = Math.round(total / 10); // for faction numbers "rounded"
    const grandTotal = (total + shipping + Number(tax) ).toFixed(2); // for faction numbers "toFixed"

    // Formating faction numbers for function
    const formatNumber = num => {
        const precision = num.toFixed(2);
        return Number(precision);
    }

    return (
        <div className="cart-review">
            <div className="cart-header">
                <h2>Order Summary</h2>
                <h4>Items Order: {cart.length}</h4>
            </div>
            <div className="cart-detail">
                <p>Products Price: <span>{formatNumber(total)}</span></p>
                <p>Shipping Cost: <span>{shipping}</span></p>
                <p>Tax + Vat: <span>{tax}</span></p>
            </div>
            <div className="cart-total">
                <h3>Total Price: <span>{grandTotal}</span></h3>
                <button className="review-btn">Review your order</button>
            </div>
        </div>
    );
};

export default Cart;