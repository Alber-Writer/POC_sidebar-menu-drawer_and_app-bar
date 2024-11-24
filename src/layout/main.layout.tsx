import React from 'react';
import { Box } from '@mui/material';
import { AppBar } from '@/common/appbar';
import DrawerMenu from '@/common/drawer-menu/drawer-menu';

interface Props {
  children?: React.ReactNode;
}

export const MainLayout = ({ children }: Props) => {
  const [open, setOpen] = React.useState(false);
  const toggleDrawer = () => {
    setOpen(!open);
  };
  return (
    <Box display={'flex'} flexDirection={'column'} height={'100dvh'} overflow={'hidden'}>
      <AppBar handleMenu={toggleDrawer} open={open}></AppBar>
      <Box flexGrow={1} bgcolor={'whitesmoke'} flexBasis={'100%'}>
        <DrawerMenu open={open}>{children}</DrawerMenu>
      </Box>
    </Box>
  );
};
