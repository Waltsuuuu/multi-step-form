import PropTypes from "prop-types";

function StepIndicator( {activeStep} ) {
    return (
        <div className="step-indicator-container">
          <p
            className={`step-indicator-circle ${
              activeStep === 1 ? "active" : ""
            } `}
          >
            1
          </p>
          <p
            className={`step-indicator-circle ${
              activeStep === 2 ? "active" : ""
            } `}
          >
            2
          </p>
          <p
            className={`step-indicator-circle ${
              activeStep === 3 ? "active" : ""
            } `}
          >
            3
          </p>
          <p
            className={`step-indicator-circle ${
              activeStep === 4 ? "active" : ""
            } `}
          >
            4
          </p>
        </div>
    );
}

StepIndicator.propTypes = {
    activeStep: PropTypes.number.isRequired
}

export default StepIndicator;