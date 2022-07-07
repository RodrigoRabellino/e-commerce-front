import { useState } from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import PaymentForm from "../paymentForm/PaymentForm";
import ReviewForm from "../reviewForm/ReviewForm";
import AddressForm from "../addressForm/AddressForm";
import PaymentConfirmation from "../paymentConfirmation/PaymentConfirmation";

export default function CheckOut() {
  const [activeStep, setActiveStep] = useState(0);
  const [orderCreated, setOrderCreated] = useState({});

  const steps = [
    "Shipping Address",
    "Payment Details",
    "Review your order",
    "Order Confirmation",
  ];
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };
  function getForms(step) {
    switch (step) {
      case 0:
        return <AddressForm handleNext={handleNext} />;
      case 1:
        return <PaymentForm handleNext={handleNext} handleBack={handleBack} />;
      case 2:
        return (
          <ReviewForm
            handleNext={handleNext}
            handleBack={handleBack}
            setOrder={setOrderCreated}
          />
        );
      case 3:
        return <PaymentConfirmation order={orderCreated} />;
      default:
        return <h1>No more steps available</h1>;
    }
  }

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <Box
      sx={{
        width: "100vw",
        height: "100vh",
        maxHeight: "1000px",
        mt: "64px",
        paddingTop: "2rem",
        display: "flex",
        flexDirection: "column",
        justifyContent: "start",
        alignItems: "center",
      }}
    >
      <Box width="900px" marginBottom="1rem">
        <Stepper activeStep={activeStep}>
          {steps.map((step, index) => {
            return (
              <Step key={step}>
                <StepLabel>{step}</StepLabel>
              </Step>
            );
          })}
        </Stepper>
      </Box>
      <Paper
        sx={{
          borderRadius: "15px",
          backgroundColor: "white",
          p: "2rem",
          width: "900px",
        }}
      >
        {getForms(activeStep)}
      </Paper>
    </Box>
  );
}
