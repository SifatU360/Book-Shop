// import Shurjopay, { PaymentResponse, VerificationResponse } from 'shurjopay';
// import Config from '../../Config';

// const shurjopay = new Shurjopay();

// shurjopay.config(
//   Config.sp.sp_endpoint!,
//   Config.sp.sp_username!,
//   Config.sp.sp_password!,
//   Config.sp.sp_prefix!,
//   Config.sp.sp_return_url!,
// );

// // console.log(shurjopay);

// const makePaymentAsync = async (
//   paymentPayload: any,
// ): Promise<PaymentResponse> => {
//   return new Promise((resolve, reject) => {
//     shurjopay.makePayment(
//       paymentPayload,
//       (response) => resolve(response),
//       (error) => reject(error),
//     );
//   });
// };

// const verifyPaymentAsync = (
//   order_id: string,
// ): Promise<VerificationResponse[]> => {
//   return new Promise((resolve, reject) => {
//     shurjopay.verifyPayment(
//       order_id,
//       (response) => resolve(response),
//       (error) => reject(error),
//     );
//   });
// };

// export const orderUtils = {
//   makePaymentAsync,
//   verifyPaymentAsync,
// };