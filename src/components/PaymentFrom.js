import { useStripe, useElements, PaymentElement } from '@stripe/react-stripe-js';
import Swal from 'sweetalert2';

const PaymentForm =({clientSecret})=> {
  const stripe = useStripe();
  const elements = useElements();
  

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    if (!stripe || !elements) {
      // Stripe.js has not yet loaded.
      return;
    }
    elements.submit();
    const { paymentMethod, error } = await stripe.createPaymentMethod({elements});
    if(error){
      return;
    }
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Checked Out Successfully',
      showConfirmButton: false,
      timer: 1500
    })
  };


  return (
    <>
    {clientSecret !== '' && <form onSubmit={handleSubmit}>
      <PaymentElement />
      <button type="submit" disabled={!stripe}>
        Pay
      </button>
    </form>}
    </>
  );
}

export default PaymentForm;