import DrawerMenu from '@/common/drawer-menu/drawer-menu';
import { Box } from '@mui/material';

interface Props {
  children?: React.ReactNode;
}

export const MainLayout = ({ children }: Props) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <DrawerMenu>
      {children}
      </DrawerMenu>
    </Box>
  );
};
