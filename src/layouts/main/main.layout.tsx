import React from 'react';
import { Box } from '@mui/material';
import { AppBar } from '@/common/app-bar/appbar';
import DrawerAndContent from '@/layouts/main/components/drawer-and-content';

interface Props {
  children?: React.ReactNode;
}

const barHeight = 7;

export const MainLayout = ({ children }: Props) => {
  const [open, setOpen] = React.useState(false);
  const toggleDrawer = () => {
    setOpen(!open);
  };
  return (
    <Box
      display={'flex'}
      flexDirection={'column'}
      height={'100dvh'}
      overflow={'hidden'}
    >
      <AppBar
        handleMenu={toggleDrawer}
        open={open}
        barHeight={barHeight}
      ></AppBar>
      <Box flexGrow={1} bgcolor={'whitesmoke'} flexBasis={'100%'}>
        <DrawerAndContent open={open} contentVisibleHeight={100 - barHeight}>
          {children}
        </DrawerAndContent>
      </Box>
    </Box>
  );
};
