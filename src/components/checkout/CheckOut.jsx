import { useState } from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import PaymentForm from "../paymentForm/PaymentForm";
import ReviewForm from "../reviewForm/ReviewForm";
import AddressForm from "../addressForm/AddressForm";
import PaymentConfirmation from "../PaymentConfirmation/paymentConfirmation";
import { useForm } from "react-hook-form";
// import total from "../Accounting/Total";

export default function CheckOut() {
  const [activeStep, setActiveStep] = useState(0);
  const [skipped, setSkipped] = useState(new Set());

  const [datos, setDatos] = useState({
    name: "",
    cardNumber: "",
    expiredDate: "",
    CVV: "",
    address: "",
  });

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
        return (
          <AddressForm
            handleNext={handleNext}
            data={datos}
            setData={setDatos}
          />
        );
      case 1:
        return (
          <PaymentForm
            handleNext={handleNext}
            handleBack={handleBack}
            data={datos}
            setData={setDatos}
          />
        );
      case 2:
        return (
          <ReviewForm
            handleNext={handleNext}
            handleBack={handleBack}
            data={datos}
            setData={setDatos}
          />
        );
      case 3:
        return (
          <PaymentConfirmation
            handleBack={handleBack}
            data={datos}
            setData={setDatos}
          />
        );
      default:
        return <h1>No more steps available</h1>;
    }
  }

  const isStepOptional = (step) => {
    return step === 1;
  };

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <Box
      sx={{
        width: "100vw",
        height: "100vh",
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
