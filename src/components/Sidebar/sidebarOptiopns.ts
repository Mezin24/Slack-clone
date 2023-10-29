import { SvgIconTypeMap } from '@mui/material';
import { OverridableComponent } from '@mui/material/OverridableComponent';
import InsertCommentIcon from '@mui/icons-material/InsertComment';
import InboxIcon from '@mui/icons-material/Inbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import AppsIcon from '@mui/icons-material/Apps';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';

export interface SidebarOptionType {
  Icon?: OverridableComponent<SvgIconTypeMap>;
  title: string;
}

export const sidebarOptions: SidebarOptionType[] = [
  {
    Icon: InsertCommentIcon,
    title: 'threads',
  },
  {
    Icon: InboxIcon,
    title: 'mentions & reactions',
  },
  {
    Icon: DraftsIcon,
    title: 'saved items',
  },
  {
    Icon: BookmarkBorderIcon,
    title: 'channel browser',
  },
  {
    Icon: PeopleAltIcon,
    title: 'people & user groups',
  },
  {
    Icon: AppsIcon,
    title: 'apps',
  },
  {
    Icon: FileCopyIcon,
    title: 'file browser',
  },
  {
    Icon: ExpandLessIcon,
    title: 'show less',
  },
];
