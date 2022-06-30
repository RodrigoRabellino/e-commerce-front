import { useState } from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import PaymentForm from "../paymentForm/PaymentForm";
import ReviewForm from "../reviewForm/ReviewForm";
import AddressForm from "../addressForm/AddressForm";
import PaymentConfirmation from "../PaymentConfirmation/paymentConfirmation";

// import total from "../Accounting/Total";

export default function CheckOut() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    "Shipping Address",
    "Payment Details",
    "Review your order",
    "PaymentConfirmation",
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
        return <ReviewForm handleNext={handleNext} handleBack={handleBack} />;
      case 3:
        return <PaymentConfirmation handleBack={handleBack} />;
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
        p: "0.65rem",
        mt: "64px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Paper
        elevation={4}
        sx={{
          backgroundColor: "white",
          p: "1.5rem",
          width: "900px",
          height: "90%",
        }}
      >
        <Stepper activeStep={activeStep}>
          {steps.map((step, index) => {
            return (
              <Step key={step}>
                <StepLabel>{step}</StepLabel>
              </Step>
            );
          })}
        </Stepper>
        {getForms(activeStep)}
      </Paper>
    </Box>
  );
}
