import styled from 'styled-components';
import { Button } from '@mui/material';
import { signInWithPopup } from 'firebase/auth';
import { auth, provider } from '../../../firebase.config';
import { useCallback } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import Spinner from '../../Spinner/Spinner';

const Login = () => {
  const [_, loading] = useAuthState(auth);

  const signIn = useCallback(async () => {
    await signInWithPopup(auth, provider);
  }, []);

  return (
    <LoginContainer>
      <div className='inner'>
        <img
          src='https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2.0,f_auto,g_center,h_1080,q_100,w_1080/v1/gcs/platform-data-slack/events/Slack-Profile%401080_fLRMFgV.png'
          alt='slack logo'
        />
        {loading ? (
          <Spinner />
        ) : (
          <>
            <h1>Sign in to the Slack</h1>
            <p>slack.com</p>
            <Button variant='contained' onClick={signIn}>
              Sign in with Google
            </Button>
          </>
        )}
      </div>
    </LoginContainer>
  );
};
export default Login;

const LoginContainer = styled.div`
  height: 100vh;
  display: grid;
  place-items: center;
  background-color: #f8f8f8;

  .inner {
    background-color: white;
    padding: 100px;
    border-radius: 5px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;

    img {
      height: 150px;
      margin-bottom: 10px;
      object-fit: contain;
    }

    button {
      margin-top: 15px;
    }
  }
`;
