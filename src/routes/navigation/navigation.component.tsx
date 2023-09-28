import { Fragment } from 'react';
import { Outlet } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import CartIcon from '../../components/cart-icon/cart-icon.component';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';

import { selectIsCartOpen } from '../../store/cart/cart.selector';
import { selectCurrentUser } from '../../store/user/user.selector';
import { signOutStart } from '../../store/user/user.action';

import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';

import {
  NavigationContainer,
  NavLinks,
  NavLink,
  LogoContainer,
} from './navigation.styles';


const Navigation = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector(selectCurrentUser);
  const isCartOpen = useSelector(selectIsCartOpen);
  const flexBetween = "flex items-center justify-between";
  const signOutUser = () => dispatch(signOutStart());

  return (
    <Fragment>
      <div className={`z-30 w-full py-1 border-b-[1px] border-b-gray-800 bg-white sticky top-0 z-50`}>
        <div className={`max-w-screen-xxl h-full mx-10 flex items-center justify-between`}>
          <LogoContainer to='/'>
            <CrwnLogo className='logo' />
          </LogoContainer>
          <NavLinks>
            <NavLink to='/'>HOME</NavLink>
            <NavLink to='/shop'>SHOP</NavLink>
            {currentUser ? (
              <NavLink as='span' onClick={signOutUser}>
                SIGN OUT
              </NavLink>
              ) : (
              <NavLink to='/auth'>SIGN IN</NavLink>
              )}
              <CartIcon />
            </NavLinks>
            {isCartOpen && <CartDropdown />}
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
