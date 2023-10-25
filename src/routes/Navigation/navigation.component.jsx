import { Link, Outlet } from 'react-router-dom';

import { Fragment, useContext } from 'react';
import '../navigation/navigation.styles.scss';
import {UserContext} from '../../contexts/user.context';

import {signOutUser} from '../../utils/firebase/firebase.utils';
import CartIcon from '../../component/cart-icon/cart-icon.component';

const Navigation = () => {
    const {currentUser} = useContext(UserContext);

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
            </div>
            <Outlet/>
        </Fragment>
    );
};

export default Navigation;