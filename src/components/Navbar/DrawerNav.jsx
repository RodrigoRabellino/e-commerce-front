import React, { useState } from "react";
import {
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  IconButton,
} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
const Pages = ["About Us", "Contact Us","All Products","Login"]

function DrawerNav() {
  const [openDrawer, setOpenDrawer] = useState(false);
  return (
    <React.Fragment>
      <Drawer open={openDrawer} onClose={() => setOpenDrawer(false)}>
        <List>
             {
              Pages.map((page,index) => {
                <ListItemButton key={index}>
            <ListItemIcon>
              <ListItemText>{page}</ListItemText>
            </ListItemIcon>
          </ListItemButton>
              })
             }
        
        </List>
      </Drawer>
      <IconButton sx={{color:'white', marginLeft:'auto'}} onClick={()=>setOpenDrawer(!openDrawer)}>
        <MenuIcon/>
      </IconButton>
    </React.Fragment>
  );
}

export default DrawerNav;
