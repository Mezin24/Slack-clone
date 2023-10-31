import { Button } from '@mui/material';
import { FormEvent, useCallback } from 'react';
import styled from 'styled-components';

interface ChatInputProps {
  roomId?: string;
  roomName?: string;
}

const ChatInput = ({ roomName = 'ROOM', roomId }: ChatInputProps) => {
  const submitHandler = useCallback((e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  }, []);

  return (
    <ChatInputContainer>
      <form onSubmit={submitHandler}>
        <input type='text' placeholder={`Message #${roomName}`} />
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
    /* position: relative; */
    display: flex;
    justify-content: center;

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
