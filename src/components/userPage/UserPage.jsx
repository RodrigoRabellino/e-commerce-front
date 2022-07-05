import {
  Box,
  Button,
  Divider,
  Stack,
  Typography,
  Container,
  IconButton,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { fetchUser } from "../../services/apiServices";
import { Edit, Logout } from "@mui/icons-material";
import { logOutUserReducer } from "../../Redux/user/slice";
import { useNavigate } from "react-router-dom";

const UserPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { _id, accessToken } = useSelector((store) => store.user);
  const [user, setUser] = useState({});
  const [activeTab, setActiveTab] = useState("resume");

  useEffect(() => {
    const getUser = async () => {
      const response = await fetchUser(_id, accessToken);
      console.log(response);
      setUser(response);
    };
    getUser();
  }, [_id, accessToken]);

  const handleLogOut = () => {
    dispatch(logOutUserReducer());
    navigate("/", { replace: "true" });
  };

  const getTab = (selectTab) => {
    switch (selectTab) {
      case "resume":
        return <ResumePage user={user} />;
      case "orders":
        return <OrdersPage user={user} />;
      case "wishList":
        return <WishListPage user={user} />;

      default:
        return <ResumePage></ResumePage>;
    }
  };

  const itemsList = [
    {
      label: "Resume",
      value: "resume",
    },
    {
      label: "Orders",
      value: "orders",
    },
    {
      label: "Wish List",
      value: "wishList",
    },
  ];
  return (
    <Container sx={{ marginTop: "64px", py: "2rem" }}>
      <Box display="flex">
        <Box width="25%" position="sticky" top="85px">
          <Stack spacing={2}>
            {itemsList.map((item) => {
              return (
                <Button
                  onClick={() => setActiveTab(item.value)}
                  sx={{ borderRadius: "15px" }}
                  disableElevation
                  variant={activeTab === item.value ? "contained" : "outlined"}
                  key={item.value}
                >
                  {item.label}
                </Button>
              );
            })}
            <Divider />
            <Button
              onClick={handleLogOut}
              sx={{ borderRadius: "15px" }}
              disableElevation
            >
              <Logout /> LogOut
            </Button>
          </Stack>
        </Box>
        <Box
          width="100%"
          height="100%"
          display="flex"
          flexDirection="column"
          pl="2rem"
        >
          {getTab(activeTab)}
        </Box>
      </Box>
    </Container>
  );
};

export const ResumePage = ({ user }) => {
  const { firstName, lastName, email, address, phone } = user;
  return (
    <Box>
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Typography variant="h3">{`Welcome ${firstName} ${lastName}`}</Typography>
        <IconButton>
          <Edit />
        </IconButton>
      </Box>
      <Box pt="2rem">
        <Typography variant="h6" textAlign="start">
          {email}
        </Typography>
        <Typography variant="h6" textAlign="start">
          {address}
        </Typography>
        <Typography variant="h6" textAlign="start">
          {phone}
        </Typography>
      </Box>
    </Box>
  );
};
export const OrdersPage = () => {
  return (
    <>
      <Box sx={{ textAlign: "left", pl: "100px" }}>
        <Typography variant="h5" fontFamily="number">
          Order ID: 223346789
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography color="grey" pt="10px" fontFamily="number">
            Order Date:July 07, 2022
          </Typography>
          <Typography pt="10px" pb="10px" color="" fontFamily="number">
            Estimated delivery:July 08, 2022
          </Typography>
        </Box>
      </Box>
      <Divider sx={{ ml: "100px" }} />
      <Box display="flex" justifyContent="space-between" pt="10px" pb="10px">
        <Typography variant="h5" textAlign="left" pl="100px">
          Items List
        </Typography>
        <Typography variant="h5">Price Details </Typography>
      </Box>

      <Divider sx={{ ml: "100px" }} />
      <Box display="flex" justifyContent="space-between" flexDirection="row">
        <Box display="flex" flexDirection="column">
          <Typography variant="h6" textAlign="left" pl="100px">
            Payment
          </Typography>
          <Typography textAlign="left" pl="100px" fontFamily="number">
            Visa **67
          </Typography>
        </Box>
        <Box display="flex" alignSelf="flex-end" flexDirection="column">
          <Typography variant="h6">Delivery</Typography>
          <Typography fontFamily="number"> 857 Main St</Typography>
          <Typography>Dallas, USA</Typography>
          <Typography fontFamily="number">23-456-890</Typography>
        </Box>
      </Box>
    </>
  );
};
export const WishListPage = () => {
  return (
    <div>
      <Typography variant="overline" fontSize="25px" fontWeight="700">
        COMING SOON
      </Typography>
    </div>
  );
};

export default UserPage;
