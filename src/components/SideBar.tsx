import React from 'react';
import Drawer from '@mui/material/Drawer';

export default function SideBar() {
  return (
    <Drawer
      sx={{
        width: 240,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: 240,
          boxSizing: 'border-box',
          backgroundColor: '#f5f5f5',
        },
      }}
      variant='persistent'
      anchor='left'
      open={true}
    ></Drawer>
  );
}
