import { QRCodeSVG } from "qrcode.react";

const Label = ({ shipperInfo, recipientInfo, uuid }) => {
  // https://www.ups.com/track?loc=en_US&requester=ST/
  // ups link to track packages.
  return (
    <div>
      {/* Shipper Info */}
      <div>
        <p>{shipperInfo.name}</p>
        <p>{shipperInfo.street1}</p>
        <p>{shipperInfo.street2}</p>
        <p>
          {shipperInfo.city} {shipperInfo.state}
        </p>
        <p>{shipperInfo.zipCode}</p>
      </div>

      {/* Recipient Info */}
      <div>
        <p>SHIP TO: </p>
        <p>{recipientInfo.name}</p>
        <p>{recipientInfo.street1}</p>
        <p>{recipientInfo.street2}</p>
        <p>
          {recipientInfo.city} {recipientInfo.state}
        </p>
        <p>{recipientInfo.zipCode}</p>
      </div>

      <div className="uuid-container">
        <p>{uuid}</p>
        <QRCodeSVG
          value={`https://api.shipengine.com/v1/downloads/10/XNGDhq7uZ0CAEt5LOnCxIg/label-7764944.pdf`}
        />
      </div>
    </div>
  );
};

export default Label;
