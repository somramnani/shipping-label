const Form = ({ title, handleChange }) => {
  return (
    <div>
      <h1>{title}:</h1>
      <input
        className="row"
        type="text"
        id="name"
        onChange={(e) => handleChange(e)}
        placeholder="Name/Company"
      />
      <input
        className="row"
        type="text"
        id="street1"
        onChange={(e) => handleChange(e)}
        placeholder="Street Line 1"
      />
      <input
        className="row"
        type="text"
        id="street2"
        onChange={(e) => handleChange(e)}
        placeholder=" Street Line 2"
      />
      <input
        className="row"
        type="text"
        id="city"
        onChange={(e) => handleChange(e)}
        placeholder="City"
      />
      <input
        onChange={(e) => handleChange(e)}
        className="row"
        type="text"
        id="state"
        placeholder="State/Input/Label"
      />
      <input
        className="row"
        type="number"
        id="zipCode"
        onChange={(e) => handleChange(e)}
        placeholder="Zip Code"
      />
    </div>
  );
};

export default Form;
