import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

const PaymentForm =()=> {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    if (!stripe || !elements) {
      // Stripe.js has not yet loaded.
      return;
    }
  
    const cardElement = elements.getElement(CardElement);
  
    // Create a PaymentMethod using the card element.
    const { paymentMethod, error } = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
    });
  
    // Handle the result (e.g., send payment method to your server)
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement />
      <button type="submit" disabled={!stripe}>
        Pay
      </button>
    </form>
  );
}

export default PaymentForm;