import {
  useStripe,
  useElements,
  PaymentElement,
} from "@stripe/react-stripe-js";
import Swal from "sweetalert2";
import { useCart } from "../../context/cartContext";

const PaymentForm = ({ clientSecret, onClose }) => {
  const stripe = useStripe();
  const elements = useElements();
  const {setCart} = useCart();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not yet loaded.
      return;
    }
    elements.submit();
    const { error } = await stripe.createPaymentMethod({ elements });
    if (error) {
      return;
    }
    onClose();
    setCart([]);
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Checked Out Successfully",
      showConfirmButton: false,
      timer: 1500,
    });
  };

  return (
    <>
      {clientSecret !== "" && (
        <form onSubmit={handleSubmit}>
          <PaymentElement />
          <button
            type="submit"
            className="btn btn-info my-2 float-right"
            disabled={!stripe}
          >
            Pay
          </button>
        </form>
      )}
    </>
  );
};

export default PaymentForm;
