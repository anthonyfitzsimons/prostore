import exp from 'constants';
import { generateAccessToken, paypal } from '../lib/paypal';

// Test to generate access token from paypal
test('generates token from paypal', async () => {
  const tokenResponse = await generateAccessToken();
  console.log(tokenResponse);
  expect(typeof tokenResponse).toBe('string');
  expect(tokenResponse.length).toBeGreaterThan(0);
});

// Test to create a paypal order
test('creates a paypal order', async () => {
  const token = await generateAccessToken();
  const price = 10.0;

  const orderesponse = await paypal.createOrder(price);
  console.log(orderesponse);

  expect(orderesponse).toHaveProperty('id');
  expect(orderesponse).toHaveProperty('status');
  expect(orderesponse.status).toBe('CREATED');
});

// Test to capture payment with mock order
test('simulate capturing a payment from an order', async () => {
  const orderId = '100';

  const mockCapturePayment = jest
    .spyOn(paypal, 'capturePayment')
    .mockResolvedValue({
      status: 'COMPLETED',
    });

  const captureResponse = await paypal.capturePayment(orderId);
  expect(captureResponse).toHaveProperty('status', 'COMPLETED');

  mockCapturePayment.mockRestore();
});
