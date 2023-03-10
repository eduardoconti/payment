import { Payment, PaymentError } from '@labs/gazin-payment-component';
import { IAmount } from '@labs/gazin-payment-component/dist/components/CreditCard/CreditCardForm';
import { FieldsError } from '@labs/gazin-payment-component/dist/Payment';
import { IPaymentData } from '@labs/gazin-payment-component/dist/types';
import '@labs/gazin-payment-component/dist/index.css';
import './index.css';
import './App.css';
import { useState } from 'react';


function App() {
  const [data, setData] = useState<IPaymentData | undefined>()
  const [error, setError] = useState<PaymentError | undefined>()
  const [fieldError, setFieldError] = useState<FieldsError | undefined>()
  const onSubmit = (data: IPaymentData) => {
    console.log('App data', data);
    setData(data);
  };

  const onError = (error: PaymentError) => {
    console.log('onError: ', error);
    setError(error)
  };

  const fieldsError = (error: FieldsError) => {
    console.log('fieldsError: ', error);
    setFieldError(error)
  };

  const amount: IAmount = {
    value: 120,
    installments: [
      {
        value: 120,
        number: 1,
        hasInterest: false
      },
      {
        value: 60,
        number: 2,
        hasInterest: false
      },
      {
        value: 40,
        number: 3,
        hasInterest: false
      },
      {
        value: 30,
        number: 4,
        hasInterest: false
      },
      {
        value: 24,
        number: 5,
        hasInterest: true
      }
    ]
  };

  return (
    <>
      <div className='payment-container'>
        <Payment
          amount={amount}
          environment='production'
          onSubmit={onSubmit}
          onError={onError}
          fieldsError={fieldsError}
          encryptKey={'LS0tLS1CRUdJTiBQVUJMSUMgS0VZLS0tLS0KTUlJQ0lqQU5CZ2txaGtpRzl3MEJBUUVGQUFPQ0FnOEFNSUlDQ2dLQ0FnRUFxTlc3QXRPc1VLWWhMSC9CajhoQgpMeWw4ZnhRazgxMVZZMStoWFBRQmlIMWNYQWtiWC8yWUxzVXRubXArcEFQTGpxcUZNZ29RRW1MK2EzbEJOMUZRCjlZU2dBemJmMlFldUNzenJTNlNDdCt1VE9tek5JK2l1Wk5Wb1V4ZlN2N05QcUlQanE3R2ZJRkJkZXNBYkdNU3EKeElzc2Y5SlVRcTRwNVlwWXhZT00yNTdIUFdxMzVySWsxb09sZitsUnRqalZLaVNuTE1HL1hzaTBvM0orbXh6SQpuUE5iS1Q4TEk1SkpWY1RDVmZxSWp2ZHNJd0EvNjU2RjloU0NxcVhZSlFEZFRpM0VuTW1vOVM5UWg5N1dYalk3CkUvaVlHbld2cVYvMEpDM1dOdWRrcHQzOHBNT1JmaUNnWi9ZUkRDSmNTSHpDcGp6UlJHTFZZSW1pdlhlZnQraDkKS2RnRENpNGlKMFRHWnlUanFjOURvVjI0UlFzRm02VDl5VjBqWUFzR1h2YVhXcVBNUnhQUDVpR0dibWF1czFXUwpHMmpEZ1BWRHBvV3FXQ0pucDd3UXdWaHFocFovcFVnZFd6LzYxcnF5N1k5NStyOC95WUQvQ21MRWhaK05KemhnCmdLdWl4SGtOVDNpRXFTU2FHMmxKbXJJZzlITFNCbmNaZjQ4Nm1TVzhoTm9SS0krZFk3MDBINXhYWkZCNzAwWUgKQTRSZ3VEU1UxOHhhSG5jYVhTaHlRSktBWlZ4dGxJK3pTeUFvcU1yRUZXcFR1M2pIRFVTTTBqVnJIcGF4a28zKwp0OVl6RGs1cVhnMmhZVXlqTVBjVE5CS3dGeGVFNzVJb3l0b2x5R1lUQndHNVJtRWY4dlVRWS9VRGI1UVNaS1EyCkpkK21pQjdwR2dZWUxUNHgzbkZaWUtVQ0F3RUFBUT09Ci0tLS0tRU5EIFBVQkxJQyBLRVktLS0tLQo='}
          merchantaccount={10001}
          split={false}
          config={{
            paymentTypeTitle: 'Cartão de crédito',
            checkoutButtonTitle: 'PAGAR COM CARTÃO DE CRÉDITO',
            checkoutButtonVisible: true,
            noSelectIstallmentLabel: 'Selecione uma parcela'
          }}
        />
      </div>
      {data ? <div>RESPONSE: {JSON.stringify(data)}</div> : null}
      <br></br>
      {error ? <div>ERROR: {JSON.stringify(error)}</div> : null}
      <br></br>
      {fieldError ? <div>FIELDS ERROR: {JSON.stringify(fieldError)}</div> : null}
    </>


  );
}

export default App;
