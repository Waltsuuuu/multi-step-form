import PropTypes from 'prop-types';

function StepTwo( {activeStep} ) {

    return (
    <div style={{ display: activeStep === 2 ? 'flex' : 'none' }} className="info-container">
        <h1>Select your plan</h1>
        <p>You have the option of monthly or yearly billing.</p>
        <div className="plan-card">
            <figure id="arcade">
                
            </figure>
            <div className="plan-info">
                <h3>Arcade</h3>
                <p>$9/mo</p>
            </div>
        </div>
    </div>
    )

}

StepTwo.propTypes = {
    activeStep: PropTypes.number.isRequired
}

export default StepTwo;