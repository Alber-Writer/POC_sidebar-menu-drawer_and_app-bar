import { Theme } from '@mui/material/styles';
import { css } from '@emotion/css';

export const drawerStandard = (isOpen: boolean, theme: Theme, drawerWidth: number): string => css`
  flex-shrink: 0;
  position: relative;
  top: 0;
  overflow-x: hidden;
  white-space: nowrap;
  box-sizing: border-box;
  z-index: 1;
  /* WARN: Unlike 'styled()' approach, the 'Emotion template string' classes must match the case-sensitive MUI API classname. I.E.: MuiDrawer-paper */
  /* When invoking theme methods with number params, you must enclose them with in simple quotes */
  width: ${isOpen ? drawerWidth : theme.spacing('6') + 1}px;
  transition: ${theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: isOpen
        ? theme.transitions.duration.enteringScreen
        : theme.transitions.duration.leavingScreen,
    })};
  // For bigger than 'lg' viewport sizes, apply drawer displacing content
  @media screen and (max-width: ${theme.breakpoints.values.lg}px) {
    position: fixed;
    top: 7dvh;
    background-color: rgb(255 255 255 / 95%);
  }
  /* When invoking theme methods with number params, you must enclose them with in simple quotes */
  & .MuiDrawer-paper {
    position: relative;
    top: 0;
    width: ${isOpen ? drawerWidth : theme.spacing('6') + 1}px;
    overflow-x: 'hidden';
    transition: ${theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: isOpen
        ? theme.transitions.duration.enteringScreen
        : theme.transitions.duration.leavingScreen,
    })};
    @media screen and (max-width: ${theme.breakpoints.values.lg}px) {
      position: fixed;
      top: 7dvh;
      background-color: rgb(255 255 255 / 95%);
    }
  }
`;