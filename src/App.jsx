import { useEffect, useState } from "react";
import "./App.css";
import StepOne from "./components/StepOne";
import StepTwo from "./components/StepTwo";
import StepThree from "./components/StepThree";
import StepFour from "./components/StepFour";
import StepIndicator from "./components/StepIndicator";
import Footer from "./components/Footer";

function App() {
  const [activeStep, setActiveStep] = useState(1);

  const handlePrevStep = () => {
    setActiveStep((prevStep) => {
      if (prevStep > 1) {
        return prevStep - 1; // Prevent going below 1
      }
      return prevStep; // If already at step 1, stay at step 1
    });
  };

  const handleNextStep = () => {
    setActiveStep((prevStep) => {
      if (prevStep < 4) {
        return prevStep + 1; // Prevent going above 4
      }
      return prevStep; // If already at step 4, stay at step 4
    });
  };

  // Log the current step whenever it changes
  useEffect(() => {
    console.log(`Current step: ${activeStep}`);
  }, [activeStep]);

  return (
    <>
    <div className="background-container">
      <StepIndicator activeStep={activeStep} />
        <StepOne activeStep={activeStep} />
        <StepTwo activeStep={activeStep} />
        <StepThree activeStep={activeStep} />
        <StepFour activeStep={activeStep} />
      <Footer activeStep={activeStep} handleNextStep={handleNextStep} handlePrevStep={handlePrevStep}/>
    </div>
    </>
  );
}

export default App;
