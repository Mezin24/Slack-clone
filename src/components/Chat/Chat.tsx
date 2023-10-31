import styled from 'styled-components';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import ChatInput from '../ChatInput/ChatInput';

const Chat = () => {
  return (
    <ChatContainer>
      <div className='header'>
        <div className='left'>
          <h3>
            <strong># Room name</strong>
          </h3>
          <StarBorderIcon />
        </div>
        <div className='right'>
          <p>
            <HelpOutlineIcon style={{ fontSize: '22px' }} />
            Details
          </p>
        </div>
      </div>
      <div className='messages'></div>
      <ChatInput />
    </ChatContainer>
  );
};
export default Chat;

const ChatContainer = styled.div`
  margin-top: 55px;
  flex: 0.7;
  overflow-y: scroll;
  padding: 15px;

  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid lightgray;
    padding: 10px;

    .left {
      display: flex;
      align-items: center;
      gap: 10px;
      h3 {
        text-transform: lowercase;
        font-size: 14px;
      }
    }

    .right p {
      display: flex;
      gap: 5px;
      align-items: center;
      justify-content: center;
      font-size: 14px;
    }
  }
`;
