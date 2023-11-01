import styled from 'styled-components';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import { IconButton } from '@mui/material';
import SidebarOption from '../SidebarOption/SidebarOption';
import { sidebarOptions } from './sidebarOptiopns';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AddIcon from '@mui/icons-material/Add';
import { useCollection } from 'react-firebase-hooks/firestore';
import { db } from '../../../firebase.config';
import { collection } from 'firebase/firestore';

const Sidebar = () => {
  const [channels] = useCollection(collection(db, 'channels'));

  return (
    <SidebarContainer>
      <div className='header'>
        <div className='info'>
          <h2>Papa fam hq</h2>
          <h3>
            <FiberManualRecordIcon />
            Pavel Mezentcev
          </h3>
        </div>
        <IconButton>
          <ModeEditIcon />
        </IconButton>
      </div>
      <div className='options'>
        {sidebarOptions.map((option) => (
          <SidebarOption key={option.title} option={option} />
        ))}
      </div>
      <hr />
      <SidebarOption
        option={{
          Icon: ExpandMoreIcon,
          title: 'channels',
        }}
        addChanelOption
      />
      <hr />
      <SidebarOption
        option={{
          Icon: AddIcon,
          title: 'add chanel',
        }}
        addChanelOption
      />
      {channels?.docs.map((channel) => (
        <SidebarOption
          key={channel.id}
          option={{
            title: channel.data().name,
          }}
          id={channel.id}
          name={channel.data().name}
        />
      ))}
    </SidebarContainer>
  );
};
export default Sidebar;

const SidebarContainer = styled.div`
  flex: 0.3;
  background-color: var(--primary-color);
  color: white;
  padding-top: 56px;
  border-top: 1px solid #49274b;
  max-width: 250px;

  .header {
    display: flex;
    justify-content: space-between;
    border-top: 1px solid #49274b;
    padding: 13px;

    button {
      margin-right: 10px;
      background-color: white;
      width: 35px;
      height: 35px;
    }
  }

  .info {
    h2 {
      font-size: 15px;
      font-weight: 900;
      margin-bottom: 5px;
      text-transform: uppercase;
    }
    h3 {
      display: flex;
      align-items: center;
      font-size: 14px;
      font-weight: normal;

      .MuiSvgIcon-root {
        color: green;
        margin-right: 2px;
        font-size: 14px;
      }
    }
  }

  > hr {
    margin-top: 10px;
    margin-bottom: 10px;
    border: 1px solid #49274b;
  }
`;
