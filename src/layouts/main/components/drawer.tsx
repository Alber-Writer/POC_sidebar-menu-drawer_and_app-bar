import { createTheme } from "@mui/material";
import MuiDrawer from '@mui/material/Drawer';
import { drawerStandard } from "./drawer.styles";

export const Drawer = ({
  open,
  drawerWidth,
  children,
}: {
  open?: boolean;
  drawerWidth?:number;
  children: React.ReactNode;
}) => {
  const theme = createTheme();
  return (
    <MuiDrawer
      variant="permanent"
      className={drawerStandard(open || false, theme, drawerWidth || 240)}
      open={open}
    >
      {children}
    </MuiDrawer>
  );
};