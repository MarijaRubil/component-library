
import React from "react";
import "./app.css";

const Buttons = ({ size, color, disabled }) => {
  const buttonStyle = {
    fontSize: size,
    backgroundColor: color,
    opacity: disabled ? 0.5 : 1,
    cursor: disabled ? "not-allowed" : "pointer",
  };

  return (
    <button className="buttons-container" style={buttonStyle} disabled={disabled}>
      Button
    </button>
  );
};

const Alerts = ({ color, icon, onDismiss }) => {
  const alertStyle = {
    backgroundColor: color,
  };

  return (
    <div className="alert" style={alertStyle}>
      <span style={{ marginRight: "8px" }}>{icon}</span>
      <span>Alert message</span>
      <button onClick={onDismiss} style={{ marginLeft: "auto" }}>
        Dismiss
      </button>
    </div>
  );
};

const Badges = ({ color, size, icon }) => {
  const badgeStyle = {
    backgroundColor: color,
    fontSize: size,
  };

  return (
    <div>
      <span className="badge" style={badgeStyle}>{icon}</span>
      <span>Badge</span>
    </div>
  );
};

const Card = ({ href, imgAlt, imgSrc }) => {
  const cardStyle = {
    textDecoration: "none",
    color: "#333",
  };

  return (
    <a href={href} className="card" style={cardStyle}>
      <img src={imgSrc} alt={imgAlt} style={{ maxWidth: "100%" }} />
    </a>
  );
};

const Modal = ({ show, onClose, size, children }) => {
  if (!show) {
    return null;
  }

  const modalStyle = {
    width: size,
    height: size,
  };

  return (
    <div>
      <div className="overlay"></div>
      <div className="modal" style={modalStyle}>
        {children}
        <button onClick={onClose} style={{ marginTop: "16px" }}>
          Close
        </button>
      </div>
    </div>
  );
};

const ModalHeader = ({ children }) => {
  return <div>{children}</div>;
};

const ModalBody = ({ children }) => {
  return <div>{children}</div>;
};

const ModalFooter = ({ children }) => {
  return <div>{children}</div>;
};

const App = () => {
  const handleModalOpen = () => {
    // Handle opening the modal
  };

  return (
    <div>
      <h2>Buttons</h2>
      <Buttons size="14px" color="blue" disabled={false} />

      <h2>Alerts</h2>
      <Alerts
        color="red"
        icon={<span>!</span>}
        onDismiss={() => console.log("Dismissed")}
      />

      <h2>Badges</h2>
      <Badges color="green" size="18px" icon={<span>★</span>} />

      <h2>Card</h2>
      <Card
        href="https://example.com"
        imgSrc="https://example.com/image.jpg"
        imgAlt="Example Image"
      />

      <h2>Modal</h2>
      <button onClick={handleModalOpen} className="buttons-container">
        Open Modal
      </button>
      <Modal show={true} onClose={() => console.log("Modal Closed")} size="300px">
        <ModalHeader>Modal Header</ModalHeader>
        <ModalBody>Modal Body</ModalBody>
        <ModalFooter>Modal Footer</ModalFooter>
      </Modal>
    </div>
  );
};

export default App;
