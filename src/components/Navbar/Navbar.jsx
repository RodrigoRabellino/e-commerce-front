import React, { useState } from "react";
import {
  Box,
  AppBar,
  Typography,
  Toolbar,
  Button,
  useMediaQuery,
  useTheme,
  useScrollTrigger,
<<<<<<< Updated upstream
=======
  Container

>>>>>>> Stashed changes
} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import DrawerNav from "./DrawerNav";

function ElevationScroll(props) {
  const { children } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });
  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

function Navbar() {
  const [value, setValue] = useState();
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));

  return (
<<<<<<< Updated upstream
    <>
      <ElevationScroll>
        <AppBar position="fixed">
          <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography>LOGUITO</Typography>
            {isMatch ? (
              <>
                <DrawerNav />
              </>
            ) : (
              <>
                <Box display="flex" justifyContent="space-between" width="35%">
                  <Typography variant="button" color="secondary">
                    All Products
                  </Typography>
                  <Typography variant="button" color="secondary">
                    Contact Us
                  </Typography>
                  <Typography variant="button" color="secondary">
                    About Us
                  </Typography>
                </Box>
                <Box>
                  <Button variant="text" color="secondary">
                    Login
                  </Button>
                  <ShoppingCartIcon sx={{ paddingTop: 0.1 }} />
                </Box>
              </>
            )}
          </Toolbar>
        </AppBar>
=======
    <React.Fragment>
    <ElevationScroll>
    <Container >
      <AppBar  position="fixed">
        <Toolbar sx={{marginLeft:15, marginRight:15}}>
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
      </Container>
>>>>>>> Stashed changes
      </ElevationScroll>
    </>
  );
}

export default Navbar;
