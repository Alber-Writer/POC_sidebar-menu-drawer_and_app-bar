import React from 'react';
import { AppBar } from '@/common/app-bar/appbar';
import DrawerAndContent from '@/layouts/main/components/drawer-and-content';
import { drawerAndContent, mainLayout } from './main.styles';

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
    <div className={mainLayout}
    >
      <AppBar
        handleMenu={toggleDrawer}
        open={open}
        barHeight={barHeight}
      ></AppBar>
      <div className={drawerAndContent}>
        <DrawerAndContent open={open} contentVisibleHeight={100 - barHeight}>
          {children}
        </DrawerAndContent>
      </div>
    </div>
  );
};
