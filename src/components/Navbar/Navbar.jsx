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
  useScrollTrigger
} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import DrawerNav from "./DrawerNav";
const Pages =["About Us", "Contact Us","All Products"]

function ElevationScroll(props) {
  const { children } = props;
  const trigger = useScrollTrigger({
      disableHysteresis: true, 
      threshold: 0, 
      
  });
  return React.cloneElement(children, {
      elevation: trigger ? 4 : 0  
  });
}





function Navbar() {
  const [value, setValue] = useState();
  const theme = useTheme();
  console.log(theme);
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  console.log(isMatch);


  

  return (
    <React.Fragment>
    <ElevationScroll>
      <AppBar  position="fixed">
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
            sx={{marginLeft:"auto"}}
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
      </ElevationScroll>
    </React.Fragment>
  );
}

export default Navbar;
