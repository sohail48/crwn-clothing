import { Link, Outlet } from 'react-router-dom';
import { Fragment } from 'react';
import '../navigation/navigation.styles.scss';

const Navigation = () => {
    return(
        <Fragment>
            <div className='navigation'>
                <Link className='home-container' to='/'>
                    <div>Home</div>
                </Link>
                <div className='nav-links-container'>
                    <Link className='nav-link' to='/shop'>
                        SHOP
                    </Link>
                </div>
            </div>
            <Outlet/>
        </Fragment>
    );
};

export default Navigation;