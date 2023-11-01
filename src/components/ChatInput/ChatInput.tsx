import { Button } from '@mui/material';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { FormEvent, useCallback, useState } from 'react';
import styled from 'styled-components';
import { auth, db } from '../../../firebase.config';
import { useAuthState } from 'react-firebase-hooks/auth';

interface ChatInputProps {
  roomId: string | null;
  roomName: string | null;
}

const ChatInput = ({ roomName, roomId }: ChatInputProps) => {
  const [input, setInput] = useState('');
  const [user] = useAuthState(auth);

  const submitHandler = useCallback(
    async (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      if (!input) return;

      await addDoc(collection(db, `channels/${roomId}/messages`), {
        text: input,
        timestamp: serverTimestamp(),
        user: user?.displayName || user?.email,
        userUrl: user?.photoURL || user?.email?.[0].toUpperCase(),
      });

      setInput('');
    },
    [input, roomId, user]
  );

  if (!roomId) return null;

  return (
    <ChatInputContainer>
      <form onSubmit={submitHandler}>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          type='text'
          placeholder={`Message #${roomName}`}
        />
        <Button hidden type='submit'>
          Send
        </Button>
      </form>
    </ChatInputContainer>
  );
};
export default ChatInput;

const ChatInputContainer = styled.div`
  form {
    display: flex;
    justify-content: center;
    /* position: relative; */

    input {
      position: absolute;
      bottom: 30px;
      width: 60%;
      padding: 20px;
      border-radius: 3px;
      border: 1px solid gray;
      outline: none;
    }
  }
  button {
    display: none;
  }
`;
