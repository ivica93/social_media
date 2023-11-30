import React, { useEffect, useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import AdsService from '../../services/adsService';
import PaymentElementComponent from '../../components/PaymentElementComponent/PaymentElementComponent';

const stripe = loadStripe(
  'pk_test_51O5t8sCOJlUIj6g90HBgMWIdEfuuEOpBoSnQlewQwoAiOTRwfOfsp9ycL2kN21wXr8T3PmRV6IOwtbrDmu8octdP00m2fiVcho'
);

function PaymentInit() {
  const [ck, setCk] = useState('');

  let adsOrder = JSON.parse(localStorage.getItem('sm_ads'));

  useEffect(() => {
    AdsService.paymentInit({
      price: adsOrder.price,
      currency: 'usd',
    })
      .then((res) => setCk(res.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      {ck && (
        <Elements stripe={stripe} options={{ clientSecret: ck }}>
          <PaymentElementComponent ck={ck} />
        </Elements>
      )}
    </div>
  );
}

export default PaymentInit;