import * as React from 'react';
import Box from '@mui/material/Box';

import CssBaseline from '@mui/material/CssBaseline';
import { MenuItems } from '@/common/menu-items/menu-items';
import { Drawer } from './drawer-animations.utils';

interface Props {
  open?: boolean;
  children?: React.ReactNode;
  contentVisibleHeight: number;
}

export default function DrawerAndContent(props: Props) {
  const { open, children, contentVisibleHeight } = props;
  return (
    <Box display={'flex'} height={'100%'} position={'relative'}>
      <CssBaseline />
      <Drawer variant="permanent" open={open}>
        <MenuItems open />
      </Drawer>
      <Box
        component="main"
        overflow={'auto'}
        height={`${contentVisibleHeight}dvh`}
        flexGrow={1}
        p={5}
      >
        {children}
      </Box>
    </Box>
  );
}
