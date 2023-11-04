import { Link, Outlet } from 'react-router-dom';
import CartIcon from '../../component/cart-icon/cart-icon.component';
import CartDropdown from '../../component/cart-dropdown/cart-dropdown.component';
import { Fragment, useContext } from 'react';
import {NavigationContainer, NavLinks, NavLink, HomeContainer} from './navigation.styles';
import {UserContext} from '../../contexts/user.context';
import {CartContext} from '../../contexts/cart.context';


import {signOutUser} from '../../utils/firebase/firebase.utils';


const Navigation = () => {
    const {currentUser} = useContext(UserContext);
    const {isCartOpen} = useContext(CartContext);

    return(
        <Fragment>
            <NavigationContainer>
                <HomeContainer to='/'>
                    <div>Home</div>
                </HomeContainer>
                <NavLinks>
                    <NavLink to='/shop'>
                        Shop
                    </NavLink>
                    {currentUser ? (
                        <NavLink as='span' onClick={signOutUser}>
                            SIGN OUT
                        </NavLink>
                    ) : (
                        <NavLink to='/auth'>
                            SIGN IN 
                        </NavLink>
                        )
                    }
                    <CartIcon/>
                </NavLinks>
                {isCartOpen && <CartDropdown/>}
            </NavigationContainer>
            <Outlet/>
        </Fragment>
    );
};

export default Navigation;