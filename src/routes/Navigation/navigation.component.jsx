import { Link, Outlet } from 'react-router-dom';
import CartIcon from '../../component/cart-icon/cart-icon.component';
import CartDropdown from '../../component/cart-dropdown/cart-dropdown.component';
import { Fragment, useContext } from 'react';
import '../navigation/navigation.styles.scss';
import {UserContext} from '../../contexts/user.context';
import {CartContext} from '../../contexts/cart.context';


import {signOutUser} from '../../utils/firebase/firebase.utils';


const Navigation = () => {
    const {currentUser} = useContext(UserContext);
    const {isCartOpen} = useContext(CartContext);

    return(
        <Fragment>
            <div className='navigation'>
                <Link className='home-container' to='/'>
                    <div>Home</div>
                </Link>
                <div className='nav-links-container'>
                    <Link className='nav-link' to='/shop'>
                        Shop
                    </Link>
                    {currentUser ? (
                        <span className='nav-link' onClick={signOutUser}>
                            SIGN OUT
                        </span>
                    ) : (
                        <Link className='nav-link' to='/auth'>
                            SIGN IN 
                        </Link>
                        )
                    }
                    <CartIcon/>
                </div>
                {isCartOpen && <CartDropdown/>}
            </div>
            <Outlet/>
        </Fragment>
    );
};

export default Navigation;