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
  Container,
} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import DrawerNav from "./DrawerNav";
import CartDrawer from "./CartDrawer";

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
    <>
      <ElevationScroll>
        <AppBar position="fixed">
          <Container>
            <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
              <Typography>LOGUITO</Typography>
              {isMatch ? (
                <>
                  <DrawerNav />
                </>
              ) : (
                <>
                  <Box
                    display="flex"
                    justifyContent="space-between"
                    width="35%"
                  >
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
          </Container>
        </AppBar>
      </ElevationScroll>
    </>
  );
}

export default Navbar;
