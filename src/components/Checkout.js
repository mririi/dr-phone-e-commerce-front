import React, { useEffect, useState } from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import PaymentForm from './PaymentFrom';
import { getSecretClientKey } from '../apiService';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
const stripePromise = loadStripe('pk_test_51OMcNJKxe9GEj4oXDqaijpCKE8UXjf4qaw7YbRciyhTJ9UOhJwEWuXDmRKFrCCCfXwXwEtiHJtkd4iZhdRhytN9t00bkXfqChV');
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };
const Checkout = ({open}) => {
    const [clientSecret, setClientSecret] = useState('');
    useEffect(() => {
        getClientSecret().then((data) => {
        setClientSecret(data);
        });
    },[]);

    const getClientSecret = async () => {
        try {
        const response = await getSecretClientKey(500);
        return response;
        } catch (error) {
        throw error;
        }
    }
    const handleClose = () => {
        open=false;
      };
    return(
        <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        {clientSecret !== ''&&<Elements stripe={stripePromise} options={{clientSecret:clientSecret,paymentMethodCreation: 'manual'}}>
            <PaymentForm clientSecret={clientSecret} />
            <button onClick={handleClose}>Close</button>
        </Elements>}
        </Box>
      </Modal>
    )
}

export default Checkout;