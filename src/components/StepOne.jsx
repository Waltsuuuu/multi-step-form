import PropTypes from "prop-types";

function StepOne({ activeStep }) {
  return (
    <div
      style={{ display: activeStep === 1 ? "flex" : "none" }}
      className="info-container"
    >
      <h1>Select your plan</h1>
      <p>Please provide your name, email, address, and phone number.</p>

      <form className="personal-info-form">
        <label>Name</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="eg. Stephen king"
          required
        ></input>

        <label>Email Address</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="eg. stephenking@lorem.com"
          required
        ></input>

        <label>Phone</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          placeholder="eg. +1 234 567 890"
          required
        ></input>
      </form>
    </div>
  );
}

StepOne.propTypes = {
  activeStep: PropTypes.number.isRequired,
};

export default StepOne;
