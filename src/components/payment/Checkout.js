import React, { useEffect, useState } from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import PaymentForm from "./PaymentFrom";
import { getSecretClientKey } from "../../services/apiService";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";
const stripePromise = loadStripe(
  "pk_test_51OMcNJKxe9GEj4oXDqaijpCKE8UXjf4qaw7YbRciyhTJ9UOhJwEWuXDmRKFrCCCfXwXwEtiHJtkd4iZhdRhytN9t00bkXfqChV"
);
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
const Checkout = ({ open, amount, onClose }) => {
  const [clientSecret, setClientSecret] = useState("");
  useEffect(() => {
    getClientSecret().then((data) => {
      setClientSecret(data);
    });
    // eslint-disable-next-line
  }, []);

  const getClientSecret = async () => {
    try {
      const response = await getSecretClientKey(amount);
      return response;
    } catch (error) {
      console.log(error);
    }
  };
  const handleClose = () => {
    onClose();
  };
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <button className="btn btn-danger float-right" onClick={handleClose}>
          <FontAwesomeIcon icon={faClose}></FontAwesomeIcon>
        </button>
        {clientSecret !== "" && (
          <Elements
            stripe={stripePromise}
            options={{
              clientSecret: clientSecret,
              paymentMethodCreation: "manual",
            }}
          >
            <PaymentForm clientSecret={clientSecret} onClose={handleClose} />
          </Elements>
        )}
      </Box>
    </Modal>
  );
};

export default Checkout;
