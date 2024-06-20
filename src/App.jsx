import "./App.css";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Form from "./components/Form";
import Label from "./components/Label";
import { uuidToUrl } from "uuid-url";

const App = () => {
  const [shipperUserInput, setShipperUserInput] = useState({
    name: "",
    street1: "",
    street2: "",
    city: "",
    state: "",
    zipCode: "",
  });

  const [recipientUserInput, setRecipientUserInput] = useState({
    name: "",
    street1: "",
    street2: "",
    city: "",
    state: "",
    zipCode: "",
  });

  const [isLabel, setIsLabel] = useState(false);
  const [uuid, setUuid] = useState("");

  const shippingHandleChange = (e) => {
    let shipperKey = e.target.id;
    let shipperValue = e.target.value;
    shipperUserInput[shipperKey] = shipperValue;
    setShipperUserInput({ [shipperKey]: shipperValue, ...shipperUserInput });
  };

  const recipientHandleChange = (e) => {
    let recipientKey = e.target.id;
    let recipientValue = e.target.value;
    recipientUserInput[recipientKey] = recipientValue;
    setRecipientUserInput({
      [recipientKey]: recipientValue,
      ...recipientUserInput,
    });
  };

  const handleSubmit = () => {
    setRecipientUserInput(recipientUserInput);
    setShipperUserInput(shipperUserInput);

    let uuidNum = uuidv4();
    let id = uuidToUrl(uuidNum);

    setUuid(id);
    setIsLabel(true);
  };
  return (
    <div>
      <div className="container">
        <div>
          <Form
            handleChange={shippingHandleChange}
            className="column"
            title="Shipper"
          />
        </div>

        <div>
          <Form
            handleChange={recipientHandleChange}
            className="column"
            title="Recipient"
          />
        </div>
      </div>

      <button onClick={() => handleSubmit()}>Generate Label</button>
      {isLabel ? (
        <Label
          shipperInfo={shipperUserInput}
          recipientInfo={recipientUserInput}
          uuid={uuid}
        />
      ) : (
        ""
      )}
    </div>
  );
};

export default App;
