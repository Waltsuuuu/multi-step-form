import PropTypes from "prop-types";

function Footer( { activeStep, handlePrevStep, handleNextStep } ) {
  return (
    <div className="next-step-footer">
      <button
        id="previous-step"
        style={{ visibility: activeStep === 1 ? "hidden" : "visible" }}
        onClick={handlePrevStep}
      >
        Go back
      </button>
      <button id="next-step" onClick={handleNextStep}>
        Next Step
      </button>
    </div>
  );
}

Footer.propTypes = {
  activeStep: PropTypes.number.isRequired,
  handlePrevStep: PropTypes.func.isRequired,
  handleNextStep: PropTypes.func.isRequired,
};

export default Footer;
