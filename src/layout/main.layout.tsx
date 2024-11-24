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
    <Box display={'flex'} flexDirection={'column'}>
      <AppBar handleMenu={toggleDrawer} open></AppBar>
      <Box sx={{ flexGrow: 1 }}>
        <DrawerMenu>{children}</DrawerMenu>
      </Box>
    </Box>
  );
};
