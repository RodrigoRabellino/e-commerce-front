import {
  Box,
  Button,
  Divider,
  Stack,
  Typography,
  Container,
  IconButton,
  Paper,
  useMediaQuery,
  Backdrop,
  CircularProgress,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { fetchUser } from "../../services/apiServices";
import {
  AlternateEmail,
  ContactMail,
  Edit,
  FlightLand,
  FlightTakeoff,
  Logout,
  PhoneAndroid,
  Print,
} from "@mui/icons-material";
import { logOutUserReducer } from "../../Redux/user/slice";
import { useNavigate } from "react-router-dom";
import { format, addDays } from "date-fns";
import QRCode from "react-qr-code";

const UserPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { _id, accessToken } = useSelector((store) => store.user);
  const [user, setUser] = useState({});
  const [activeTab, setActiveTab] = useState("resume");
  const mediaQuery650 = useMediaQuery("(max-width:650px)");

  // if (_id.length === 0) {
  //   return
  // }

  useEffect(() => {
    if (!_id) {
      return navigate("/", { replace: true });
    }
    const getUser = async () => {
      const response = await fetchUser(_id, accessToken);

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

  if (!_id) {
    return (
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={true}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    );
  }

  return (
    <Container sx={{ marginTop: "64px", py: "1rem" }}>
      <Box display="flex" flexDirection={mediaQuery650 ? "column" : "row"}>
        <Box width={mediaQuery650 ? "100%" : "25%"} alignItems="center">
          <Stack
            spacing={2}
            direction={mediaQuery650 ? "row" : "column"}
            marginY="1rem"
          >
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
          pl={mediaQuery650 ? "0" : "2rem"}
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
      <Box>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography variant="h3">{`Welcome ${firstName} ${lastName}`}</Typography>
          <IconButton>
            <Edit />
          </IconButton>
        </Box>
        <Box pt="2rem">
          <Typography variant="h6" textAlign="start">
            <AlternateEmail /> {email}
          </Typography>
          <Typography variant="h6" textAlign="start">
            <ContactMail /> {address}
          </Typography>
          <Typography variant="h6" textAlign="start">
            <PhoneAndroid />
            {phone}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};
export const OrdersPage = ({ user }) => {
  const ordersList = user.ordersHistory;

  if (ordersList.length === 0)
    return (
      <Box>
        <Typography>Nothing to see... start shop now</Typography>
      </Box>
    );
  return (
    <Stack spacing={2}>
      {ordersList.map((order) => {
        const {
          _id,
          createdAt,
          status,
          shippingDetails,
          products,
          totalPrice,
        } = order;
        const qrText = {
          name: `${user.firstName} ${user.lastName}}`,
          orderId: _id,
          total: totalPrice.toString(),
        };
        return (
          <Paper
            key={_id}
            elevation={3}
            sx={{
              backgroundColor: "#ffffff",
              pt: "1.5rem",
              px: "2rem",
            }}
          >
            <Box sx={{ textAlign: "left", mb: "1rem" }}>
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
              >
                <Typography variant="h5" fontFamily="number" color="secondary">
                  {`Order ID: #${_id.substring(0, 10)}`}
                </Typography>
                <IconButton
                  onClick={() => {
                    window.print();
                  }}
                >
                  <Print color="secondary" />
                </IconButton>
              </Box>

              <Typography>
                <b>Order Status: </b> {status}
              </Typography>
              <Typography>
                <b>Delivered to: </b>
                {shippingDetails.addressLine}
              </Typography>
            </Box>

            <Box display="flex" justifyContent="space-between" my="1rem">
              <Typography fontFamily="number">
                <FlightTakeoff color="secondary" /> Order Date:{" "}
                {format(new Date(createdAt), "dd/MM/yyyy-HH:mm")}
              </Typography>
              <Typography fontFamily="number">
                <FlightLand color="secondary" /> Estimated delivery:
                {format(addDays(new Date(createdAt), 5), "dd/MM/yyyy")}
              </Typography>
            </Box>
            <Divider>Order Details</Divider>
            <Box
              display="flex"
              flexDirection="column"
              width="100%"
              alignItems="end"
              py="1rem"
            >
              {products.map((product) => {
                const { productQty, productId } = product;
                return (
                  <Box
                    key={productId._id}
                    display="flex"
                    justifyContent="space-between"
                    width="80%"
                  >
                    <Typography textOverflow="ellipsis">{`${productQty}-${productId.name}`}</Typography>
                    <Typography textOverflow="ellipsis">{`U$S ${productId.price}`}</Typography>
                  </Box>
                );
              })}
              <Box
                display="flex"
                justifyContent="space-between"
                width="40%"
                py="1rem"
              >
                <Typography textOverflow="ellipsis" fontWeight="700">
                  Total:
                </Typography>
                <Typography
                  textOverflow="ellipsis"
                  fontWeight="700"
                >{`U$S${totalPrice}`}</Typography>
              </Box>
            </Box>
            <Divider>Payment Details</Divider>
            <Box
              py="1rem"
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              <Box>
                <QRCode
                  value={JSON.stringify(qrText)}
                  size={64}
                  fgColor="#7B8723"
                />
              </Box>
              <Box display="flex" flexDirection="column" alignItems="flex-end">
                <Typography>Card N*: xxxx-xxxx-xxxx-4555</Typography>
                <Typography>
                  {user.firstName} {user.lastName}
                </Typography>
                <Typography>{user.address}</Typography>
              </Box>
            </Box>
            <Divider />
            <Typography variant="overline" color="secondary">
              ®Guitarrero | P. Sherman, Wallaby St, 42
            </Typography>
          </Paper>
        );
      })}
    </Stack>
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
