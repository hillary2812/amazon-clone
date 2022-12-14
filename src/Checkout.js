import React from 'react'
import {useStateValue} from './StateProvider';
import './checkout.css';
import CheckoutProduct from './CheckoutProduct';
import Subtotal from './Subtotal';

function CheckOut() {
    const [{ basket }] = useStateValue();

    return (
        <div className="checkout">
            <div className="checkout_left">
            <img className="checkout_ad" src="https://rukminim1.flixcart.com/flap/844/140/image/184eff61d663fe45.jpg?q=50" alt=""/>          
            {basket?.length === 0 ? (
                <div>
                    <h2>Your Shopping bsket is empty</h2>
                    <p>You have no items in your basket. To buy one or more "Add to basket" next to the item..</p>
                </div>
            ) : (
                <div>
                    <h2 className="checkout_title">Your Shopping Basket</h2>
                    {/* List out all checkout products */}
                    {basket.map(item => (
                        <CheckoutProduct
                        id={item.id}
                        title={item.title}
                        image={item.image}
                        price={item.price}
                        rating={item.rating}
                        />
                    ))}
                    
                </div>
            )}
            </div>
            {basket.length > 0 && (
                <div className="checkout_right">
                    <Subtotal/>
                </div>   
            )}
        </div>
    )
}

export default CheckOut
