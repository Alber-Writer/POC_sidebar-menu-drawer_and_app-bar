import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';

interface Props extends MuiAppBarProps {
  open?: boolean;
  handleMenu: () => void;
  barHeight: number
}

export const AppBar = (props: Props) => {
  return (
    <MuiAppBar position='relative' elevation={1} color={'primary'}>
      <Toolbar sx={{height:`${props.barHeight || 7}dvh`}}>
      <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={props.handleMenu}
          edge="start"
          sx={[
            {
              marginRight: 5,
            },
          ]}
        >
          {props.open && <ChevronLeftIcon />}
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" noWrap component="h3">
          POC Responsive layout with drawer
        </Typography>
      </Toolbar>
    </MuiAppBar>
  );
};