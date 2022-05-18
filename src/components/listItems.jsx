import * as React from 'react';
import { Link } from "react-router-dom";
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew';

export const mainListItems = (
  <React.Fragment>
    <Link
      style={{ textDecoration: "none" }}
      to="/">
      <ListItemButton>
        <ListItemIcon>
          <AccessibilityNewIcon />
        </ListItemIcon>
        <ListItemText primary="Clientes" />
      </ListItemButton>
    </Link>
  </React.Fragment>
);
