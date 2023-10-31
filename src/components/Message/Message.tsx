import styled from 'styled-components';
import { IMessage } from '../../types/message';

interface MessageProps {
  message: IMessage;
}

const Message = ({ message }: MessageProps) => {
  const { text, timestamp, user, userUrl } = message;
  return (
    <MessageContainer>
      <img src={userUrl} alt={user} />
      <div className='info'>
        <h3>
          {user} <span>{new Date(timestamp?.toDate()).toUTCString()}</span>
        </h3>
        <p className='message'>{text}</p>
      </div>
    </MessageContainer>
  );
};
export default Message;

const MessageContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;
  gap: 10px;

  img {
    height: 50px;
    width: 50px;
    object-fit: cover;
    border-radius: 8px;
  }

  .info {
    span {
      color: gray;
      font-weight: 300;
      font-size: 10px;
      margin-left: 10px;
    }
  }
`;
