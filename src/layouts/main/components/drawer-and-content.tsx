import * as React from 'react';

import CssBaseline from '@mui/material/CssBaseline';
import { MenuItems } from '@/common/menu-items/menu-items';
import { Drawer } from './drawer';
import { container, main } from './drawer-and-content.styles';

interface Props {
  open?: boolean;
  children?: React.ReactNode;
  contentVisibleHeight: number;
}

export default function DrawerAndContent(props: Props) {
  const { open, children, contentVisibleHeight } = props;
  return (
    <div className={container}>
      <CssBaseline />
      <Drawer open={open}>
        <MenuItems open />
      </Drawer>
      <div className={main(contentVisibleHeight)}
      >
        {children}
      </div>
    </div>
  );
}
