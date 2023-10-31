import { Button } from '@mui/material';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { FormEvent, useCallback, useState } from 'react';
import styled from 'styled-components';
import { db } from '../../../firebase.config';

interface ChatInputProps {
  roomId: string | null;
  roomName: string | null;
}

const ChatInput = ({ roomName, roomId }: ChatInputProps) => {
  const [input, setInput] = useState('');
  const submitHandler = useCallback(
    async (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      if (!input) return;

      await addDoc(collection(db, `channels/${roomId}/messages`), {
        text: input,
        timestamp: serverTimestamp(),
        user: 'Mezin24',
        userUrl:
          'https://pic.rutubelist.ru/video/96/d1/96d1fa22275b9756025dc759110b86e0.jpg',
      });

      setInput('');
    },
    [input, roomId]
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
