import { useContext } from 'react';
import {CartContext} from '../../contexts/cart.context';
import * as React from 'react';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import '../cart-icon/cart-icon.styles.scss';

const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
      right: -3,
      top: 13,
      border: `2px solid ${theme.palette.background.paper}`,
      padding: '0 4px',
    },
}));

const CartIcon = () => {
    const {isCartOpen, setIsCartOpen} = useContext(CartContext);

    const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen)

    return(
        <div className='cart-icon-container' onClick={toggleIsCartOpen}>
            <IconButton aria-label="cart" className='shopping-icon'>
                <StyledBadge badgeContent={0} color="secondary" className='item-count'>
                    <ShoppingCartIcon/>
                </StyledBadge>
            </IconButton>
        </div>
    );
};

export default CartIcon;

