import React, { useState } from "react";
import {
  AppBar,
  Typography,
  Toolbar,
  Tabs,
  Tab,
  Button,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import DrawerNav from "./DrawerNav";
const Pages =["About Us", "Contact Us","All Products"]

function Navbar() {
  const [value, setValue] = useState();
  const theme = useTheme();
  console.log(theme);
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  console.log(isMatch);

  return (
    <React.Fragment>
      <AppBar>
        <Toolbar>
          <Typography>LOGUITO</Typography>
          {isMatch ? (
          <>
            <Typography></Typography>
            <DrawerNav />
          </>
          ):(
            <>
            <Tabs
            textcolor="inherit"
            value={value}
            onChange={(e, value) => setValue(value)}
            indicatorColor="secondary"
          >  
          {
            Pages.map((page,index)=>(
                <Tab key={index} label={page} />
            ))
          }
            
            
          </Tabs>
          <Tabs sx={{ marginLeft: "auto" }} textcolor="inherit"></Tabs>
          <Button vargiant="contained">Login</Button>
          <ShoppingCartIcon sx={{ paddingTop: 0.1 }} />

            </>

          )}
        
        </Toolbar>
        
      </AppBar>
    </React.Fragment>
  );
}

export default Navbar;
