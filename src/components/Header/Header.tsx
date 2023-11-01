import styled from 'styled-components';
import { Avatar, IconButton } from '@mui/material';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import SearchIcon from '@mui/icons-material/Search';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../../firebase.config';
import { useCallback } from 'react';

const Header = () => {
  const [user] = useAuthState(auth);

  const logout = useCallback(() => {
    auth.signOut();
  }, []);

  return (
    <HeaderContainer>
      <div className='left'>
        <IconButton onClick={logout}>
          <Avatar src={user?.photoURL || ''}>
            {user?.email?.[0].toUpperCase()}
          </Avatar>
        </IconButton>
        <AccessTimeIcon />
      </div>
      <div className='search'>
        <SearchIcon />
        <input type='text' placeholder='Search' />
      </div>
      <div className='right'>
        <HelpOutlineIcon />
      </div>
    </HeaderContainer>
  );
};
export default Header;

const HeaderContainer = styled.div`
  position: fixed;
  padding: 0 10px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--primary-color);
  color: white;

  .left {
    flex: 0.3;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .MuiAvatar-root:hover {
      opacity: 0.8;
    }

    > .MuiSvgIcon-root {
      margin-left: auto;
      margin-right: 20px;
    }
  }

  .search {
    flex: 0.4;
    opacity: 1;
    border-radius: 6px;
    background-color: #421f44;
    text-align: center;
    display: flex;
    align-items: center;
    padding: 0 10px;
    border: 1px solid white;

    input {
      background-color: transparent;
      padding: 10px;
      border: none;
      outline: none;
      color: white;
      width: 100%;
    }
  }

  .right {
    flex: 0.3;
    display: flex;
    align-items: flex-end;

    > .MuiSvgIcon-root {
      margin-left: auto;
      margin-right: 20px;
    }
  }
`;
