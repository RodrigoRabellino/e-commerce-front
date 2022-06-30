import { Box, Button, Divider, Stack, Typography } from "@mui/material";
import { Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { fetchUser } from "../../services/apiServices";
import { Logout } from "@mui/icons-material";
import { logOutUserReducer } from "../../Redux/user/slice";

const UserPage = () => {
  const dispatch = useDispatch();
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

  const handleLogOut = () => dispatch(logOutUserReducer());

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
    <Box
      width="100vw"
      height="100vh"
      marginTop="64px"
      sx={{ paddingY: "2rem" }}
    >
      <Container sx={{ display: "flex" }}>
        <Box>
          <Typography variant="h4">Welcome {user.firstName} </Typography>
        </Box>
        <Box display="flex" marginTop="2rem">
          <Box width="25%" height="100%">
            <Stack spacing={2}>
              {itemsList.map((item) => {
                return (
                  <Button
                    onClick={() => setActiveTab(item.value)}
                    sx={{ borderRadius: "15px" }}
                    disableElevation
                    variant={
                      activeTab === item.value ? "contained" : "outlined"
                    }
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
          <Box width="75%" height="100%" display="flex" flexDirection="column">
            {getTab(activeTab)}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export const ResumePage = ({ user }) => {
  const { firstName, lastName, email } = user;
  return (
    <Box>
      <Typography>{firstName}</Typography>
      <Typography>{lastName}</Typography>
      <Typography>{email}</Typography>
    </Box>
  );
};
export const OrdersPage = () => {
  return <div>OrdersPage</div>;
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
