import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FaReact, FaSignOutAlt } from 'react-icons/all';

import allActions from '../../store/actions';
import { Container, Icon } from './styles';

export default function Header() {
  const currentUser = useSelector(state => state.currentUser);

  const dispatch = useDispatch();

  const user = { name: 'Rei' };

  return (
    <Container>
      <div className="identidade">
        <span>React Initial Structure</span>
      </div>

      <Icon>
        <FaReact className="iconReact" />
      </Icon>

      <div className="user-login">
        {currentUser.loggedIn ? (
          <>
            <span>Hello, {currentUser.user.name}</span>
            <FaSignOutAlt
              onClick={() => dispatch(allActions.userActions.logOut())}
            />
          </>
        ) : (
          <>
            <span />
            <button
              type="button"
              onClick={() => dispatch(allActions.userActions.setUser(user))}
            >
              Login
            </button>
          </>
        )}
      </div>
    </Container>
  );
}
