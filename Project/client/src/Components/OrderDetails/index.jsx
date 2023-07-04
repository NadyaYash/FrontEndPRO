import React from 'react'
import s from './index.module.css'
import { useSelector } from 'react-redux'
import { useForm } from 'react-hook-form'
import { sendOrderRequest } from '../../async_actions/post_order_req'


export default function OrderDetails({fullPrice}) {
  const cart_state = useSelector(state => state.cart)
  const total = (cart_state.reduce((acc, { fullPrice, count }) => acc + fullPrice * count, 0)).toFixed(2)
  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    mode: 'onBlur'
  });

  const submit = (data) => {
    const requestData = {
      id: Date.now(),
      phoneNumber: data.phone
    };

    sendOrderRequest(requestData)
      .then(() => {
        reset();
      });

    reset();
  };

  const phoneRegexp = /^(\+)?((\d{2,3}) ?\d|\d)(([ -]?\d)|( ?(\d{2,3}) ?)){5,12}\d$/;

  const phoneRegister = register('phone', {
    required: '*Phone is a requared',
    pattern: {
      value: phoneRegexp,
      message: '*Your phone should be valid'
    }
  });

  return (
    <div className={s.orderDetails}>
      <p id={s.title}>Order details</p>
      <div className={s.totalBlock}>
        <p id={s.total}>Total</p>
        <p id={s.summ}>{total}<small className={s.currency}>$</small></p>
      </div>

      <form onSubmit={handleSubmit(submit)} className={s.formBlock}>

        <input type='text' placeholder='Phone number' name='phone' {...phoneRegister} />
        {errors.phone && <p id={s.messageError}>{errors.phone?.message}</p>}
        <button>Order</button>
      </form>
    </div>


  )
}
