import PropTypes from 'prop-types';

function StepThree( {activeStep} ) {

    return (
        <div style={{ display: activeStep === 3 ? 'flex' : 'none' }} className="info-container">
        <h1>Pick add-ons</h1>
        <p>Add-ons help enhance your gaming experience.</p>

      </div>
    )

}

StepThree.propTypes = {
    activeStep: PropTypes.number.isRequired
}

export default StepThree;