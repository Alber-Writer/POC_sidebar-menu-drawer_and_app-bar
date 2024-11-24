import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import List from '@mui/material/List';

export const MenuItems = ({ open }: { open: boolean | undefined }) => {
  return (
    <List>
      {['Principal', 'Section A', 'Section B', 'Etc'].map((text, index) => (
        <ListItem key={text} disablePadding sx={{ display: 'block' }}>
          <ListItemButton
            sx={[
              {
                minHeight: 48,
                px: 2.5,
              },
              open
                ? {
                    justifyContent: 'initial',
                  }
                : {
                    justifyContent: 'center',
                  },
            ]}
          >
            <ListItemIcon
              sx={[
                {
                  minWidth: 0,
                  justifyContent: 'center',
                },
                open
                  ? {
                      mr: 3,
                    }
                  : {
                      mr: 'auto',
                    },
              ]}
            >
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText
              primary={text}
              sx={[
                open
                  ? {
                      opacity: 1,
                    }
                  : {
                      opacity: 0,
                    },
              ]}
            />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  );
};
