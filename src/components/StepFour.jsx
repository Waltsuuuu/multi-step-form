import PropTypes from 'prop-types';

function StepFour( {activeStep} ) {

    return (
        <div style={{ display: activeStep === 4 ? 'flex' : 'none' }} className="info-container">
        <h1>Finishing up</h1>
        <p>Double-check everything looks OK before confirming.</p>

      </div>
    )

}

StepFour.propTypes = {
    activeStep: PropTypes.number.isRequired
}

export default StepFour;