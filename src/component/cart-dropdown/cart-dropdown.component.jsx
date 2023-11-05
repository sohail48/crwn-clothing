import React from 'react';
import Button from '../button/button.component';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import {CartContext} from '../../contexts/cart.context';
import {CartDropdownContainer, EmptyMessage, CartIems} from './cart-dropdown.styles';
import CartItem from '../cart item/cart-item.component';

const CartDropdown = () => {
    const {cartItems} = useContext(CartContext);
    const navigate = useNavigate();

    const CheckoutHandler = () => {
        navigate('/checkout');
    };

    return(
        <CartDropdownContainer>
            <CartIems>
                {
                    cartItems.length ? (cartItems.map((item) => (
                        <CartItem key={item.id} cartItem={item} />
                    ))) : (
                        <EmptyMessage>Your cart is empty</EmptyMessage>
                    )
                }
            </CartIems>
            <Button onClick={CheckoutHandler}>CHECKOUT</Button>
        </CartDropdownContainer>
    );
};

export default CartDropdown;