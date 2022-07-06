import { Formik, Form, Field } from 'formik';
import styled from 'styled-components';
import { breakpoints, misc, typography } from '../../styles/theme';

const validate = (values) => {
   let errors = {};

   if (!values.name) {
      errors.name = `Nice try, what's your name?`;
   }

   if (!values.email) {
      errors.email = 'Provide your email';
   } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = 'Invalid, type a real one';
   }

   if (!values.phone) {
      errors.phone = `How can we call you?`;
   } else if (values.phone.toString().length < 8) {
      errors.phone = `Not long enough babe`;
   }

   if (!values.address) {
      errors.address = `Where are we sending this?`;
   }

   if (!values.zip) {
      errors.zip = `Come on, ZIP code?`;
   }

   if (!values.city) {
      errors.city = `Your lovely city?`;
   }

   if (!values.country) {
      errors.country = `Bless us please`;
   }

   if (values.payment_method === 'e-money') {
      if (!values.e_money_number) {
         errors.e_money_number = 'Please provide';
      } else if (values.e_money_number.toString().length < 9) {
         errors.e_money_number = 'Must be more than 8';
      } else if (values.e_money_number.toString().length > 15) {
         errors.e_money_number = 'Too long(8 - 15 chars)';
      }

      if (!values.e_money_pin) {
         errors.e_money_pin = 'Please provide pin';
      } else if (values.e_money_pin.toString().length !== 4) {
         errors.e_money_pin = 'Must be 4 chars';
      }
   }

   return errors;
};

const CheckoutForm = () => {
   return (
      <CheckoutFormWrap>
         <h1>Checkout</h1>

         <Formik
            initialValues={{
               name: '',
               email: '',
               phone: '',
               address: '',
               zip: '',
               city: '',
               country: '',
               payment_method: 'e-money',
               e_money_number: '',
               e_money_pin: '',
            }}
            validate={validate}
            onSubmit={async (values) => {
               await new Promise((r) => setTimeout(r, 500));
               alert(JSON.stringify(values, null, 2));
            }}
            // onReset
         >
            {({ values, handleChange, errors, touched }) => (
               <Form id='checkout'>
                  {/* Billing Details */}
                  <FormGroup>
                     <h4>Billing Details</h4>
                     <div className='two-columns'>
                        {/* Name */}
                        <div className='form-input'>
                           <label htmlFor='name'>Name</label>
                           <input
                              className={
                                 errors.name && touched.name ? 'error' : null
                              }
                              type='text'
                              name='name'
                              placeholder='Ubong Sylvester'
                              onChange={handleChange}
                           />
                           {errors.name && touched.name ? (
                              <span>{errors.name}</span>
                           ) : null}
                        </div>

                        {/* Email */}
                        <div className='form-input'>
                           <label htmlFor='email'>Email Address</label>
                           <input
                              className={
                                 errors.email && touched.email ? 'error' : null
                              }
                              type='text'
                              name='email'
                              placeholder='ubongsly@gmail.com'
                              value={values.email}
                              onChange={handleChange}
                           />
                           {errors.email && touched.email ? (
                              <span>{errors.email}</span>
                           ) : null}
                        </div>

                        {/* Phone */}
                        <div className='form-input'>
                           <label htmlFor='phone'>Phone Number</label>
                           <input
                              className={
                                 errors.phone && touched.phone ? 'error' : null
                              }
                              type='number'
                              name='phone'
                              placeholder='+1 203 456 789'
                              value={values.phone}
                              onChange={handleChange}
                           />
                           {errors.phone && touched.phone ? (
                              <span>{errors.phone}</span>
                           ) : null}
                        </div>
                     </div>
                  </FormGroup>

                  {/* Shipping Info */}
                  <FormGroup>
                     <h4>Shipping Info</h4>

                     {/* Address */}
                     <div className='one-column form-input'>
                        <label htmlFor='address'>Address</label>
                        <input
                           className={
                              errors.address && touched.address ? 'error' : null
                           }
                           type='text'
                           name='address'
                           placeholder='1137 Williams Avenue'
                           value={values.address}
                           onChange={handleChange}
                        />
                        {errors.address && touched.address ? (
                           <span>{errors.address}</span>
                        ) : null}
                     </div>

                     <div className='two-columns'>
                        {/* ZIP Code */}
                        <div className='form-input'>
                           <label htmlFor='zip'>ZIP Code</label>
                           <input
                              className={
                                 errors.zip && touched.zip ? 'error' : null
                              }
                              type='text'
                              name='zip'
                              placeholder='10001'
                              value={values.zip}
                              onChange={handleChange}
                           />
                           {errors.zip && touched.zip ? (
                              <span>{errors.zip}</span>
                           ) : null}
                        </div>

                        {/* City */}
                        <div className='form-input'>
                           <label htmlFor='city'>City</label>
                           <input
                              className={
                                 errors.city && touched.city ? 'error' : null
                              }
                              type='text'
                              name='city'
                              placeholder='New York'
                              value={values.city}
                              onChange={handleChange}
                           />
                           {errors.city && touched.city ? (
                              <span>{errors.city}</span>
                           ) : null}
                        </div>

                        {/* Country */}
                        <div className='form-input'>
                           <label htmlFor='country'>Country</label>
                           <input
                              className={
                                 errors.country && touched.country
                                    ? 'error'
                                    : null
                              }
                              type='text'
                              name='country'
                              placeholder='United States'
                              value={values.country}
                              onChange={handleChange}
                           />
                           {errors.country && touched.country ? (
                              <span>{errors.country}</span>
                           ) : null}
                        </div>
                     </div>
                  </FormGroup>

                  {/* Payment Details */}
                  <FormGroup>
                     <h4>Payment Details</h4>

                     <div className='two-columns'>
                        <h5>Payment Method</h5>

                        <fieldset>
                           <legend>Payment Method</legend>

                           {/* Emoney */}
                           <div className='radio-div'>
                              <label>
                                 <Field
                                    type='radio'
                                    name='payment_method'
                                    value='e-money'
                                 />
                                 e-Money
                              </label>
                           </div>

                           {/* pay on delivery */}
                           <div className='radio-div'>
                              <label>
                                 <Field
                                    type='radio'
                                    name='payment_method'
                                    value='cash-on-delivery'
                                 />
                                 Cash on Delivery
                              </label>
                           </div>
                        </fieldset>
                     </div>

                     {/* E-money Details */}
                     <EMoney
                        className={
                           values.payment_method === 'e-money'
                              ? 'two-columns active'
                              : 'two-columns'
                        }
                     >
                        <div className='form-input'>
                           <label htmlFor='e-money-number'>
                              e-Money Number
                           </label>
                           <input
                              className={
                                 errors.e_money_number && touched.e_money_number
                                    ? 'error'
                                    : null
                              }
                              type='number'
                              name='e_money_number'
                              placeholder='238521993'
                              value={values.e_money_number}
                              onChange={handleChange}
                           />
                           {errors.e_money_number && touched.e_money_number ? (
                              <span>{errors.e_money_number}</span>
                           ) : null}
                        </div>

                        <div className='form-input'>
                           <label htmlFor='e-money-pin'>e-Money PIN</label>
                           <input
                              className={
                                 errors.e_money_pin && touched.e_money_pin
                                    ? 'error'
                                    : null
                              }
                              type='number'
                              name='e_money_pin'
                              placeholder='6891'
                              maxLength='4'
                              value={values.e_money_pin}
                              onChange={handleChange}
                           />
                           {errors.e_money_pin && touched.e_money_pin ? (
                              <span>{errors.e_money_pin}</span>
                           ) : null}
                        </div>
                     </EMoney>
                  </FormGroup>

                  <CashOnDelivery
                     className={
                        values.payment_method === 'cash-on-delivery'
                           ? 'two-columns active'
                           : 'two-columns'
                     }
                  >
                     <p>
                        The ‘Cash on Delivery’ option enables you to pay in cash
                        when our delivery courier arrives at your residence.
                        Just make sure your address is correct so that your
                        order will not be cancelled.
                     </p>
                  </CashOnDelivery>
               </Form>
            )}
         </Formik>
      </CheckoutFormWrap>
   );
};

export default CheckoutForm;

const CheckoutFormWrap = styled.div`
   background-color: ${(props) => props.theme.white};
   border-radius: ${misc.rounded.sm};
   padding: 2rem 1rem;

   @media screen and (min-width: ${breakpoints.tablet}) {
      padding: 3rem 2rem;
   }
`;

const FormGroup = styled.div`
   margin-top: 3rem;

   h4 {
      color: ${(props) => props.theme.accent};
      font-size: 0.95rem;
   }

   h5 {
      text-transform: capitalize;
   }

   .form-input {
      position: relative;

      span {
         position: absolute;
         top: 0;
         right: 0;
         font-size: 0.8rem;
         color: red;
      }
   }

   label {
      display: block;
      font-weight: ${typography.weight.semibold};
      color: ${(props) => props.theme.black};
      padding-bottom: 0.25rem;
      font-size: 0.9rem;
   }

   input {
      border-radius: ${misc.rounded.sm};
      border: 1.5px solid ${(props) => props.theme.gray};
      outline: none;
      transition: ${misc.transition.ease};

      &[type='text'] {
         width: 100%;
         padding: 1rem;
      }

      &[type='number'] {
         width: 100%;
         padding: 1rem;
         -moz-appearance: textfield;

         &::-webkit-outer-spin-button,
         &::-webkit-inner-spin-button {
            -webkit-appearance: none;
            margin: 0;
         }
      }

      &:hover,
      &:focus {
         border: 1.5px solid ${(props) => props.theme.accent_light};
      }
   }

   fieldset {
      display: grid;
      gap: 0.75rem;
      border: none;

      legend {
         display: none;
      }

      .radio-div {
         label {
            display: flex;
            align-items: center;
            gap: 1rem;
            padding: 0.8rem 1rem;
            width: 100%;
            height: 100%;
            border: 1.5px solid ${(props) => props.theme.gray};
            cursor: pointer;
            border-radius: ${misc.rounded.sm};
            transition: ${misc.transition.ease};

            &:hover,
            &:focus {
               border: 1.5px solid ${(props) => props.theme.accent_light};
            }
         }

         &[type='radio'] {
            cursor: pointer;
         }
      }
   }

   .form-input {
      position: relative;

      input {
         &.error {
            border: 1px solid red;
         }
      }

      span {
         position: absolute;
         top: 0;
         right: 0;
         font-size: 0.8rem;
         color: red;
      }
   }

   .one-column {
      margin-bottom: 1rem;
   }

   .two-columns {
      display: grid;
      gap: 1rem;
   }

   @media screen and (min-width: ${breakpoints.tablet}) {
      .two-columns {
         grid-template-columns: repeat(2, 1fr);
      }
   }
`;

const EMoney = styled.div`
   position: relative;
   margin-top: 0;
   height: 0;
   opacity: 0;
   transition: ${misc.transition.ease};
   z-index: -10;

   &.active {
      margin-top: 1rem;
      height: auto;
      opacity: 1;
      z-index: unset;
   }
`;

const CashOnDelivery = styled.div`
   position: relative;
   margin-top: 0;
   height: 0;
   opacity: 0;
   transition: ${misc.transition.ease};
   z-index: -10;

   p {
      margin-bottom: 0;
   }

   &.active {
      margin-top: 2rem;
      height: auto;
      opacity: 1;
      z-index: unset;
   }
`;
