import React from 'react'
import gnom from '../../dataImages/gnom.png'
import s from './index.module.css'
import { useForm } from 'react-hook-form'



export default function GetDiscount() {
    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        mode: 'onBlur'
    });
    const submit = (data) => {
        console.log(data);
        reset()
    };

    const phoneRegexp = /^\+49\d{10,11}$/;

    const phoneRegister = register('phone', {
        required: '*Phone is a requared',
        pattern: {
            value: phoneRegexp,
            message: '*Your phone should be valid'
        }
    });
    return (
        <div className={s.getDiscount}>
            <img src={gnom} title='gnom' />
            <div>
                <p id={s.discountTitle}>5% off</p>
                <p id={s.discount}>on the first order</p>
                <form onSubmit={handleSubmit(submit)} className={s.form}>
                    <input type='dropdown' placeholder='+49' name='phoneNumber' {...phoneRegister} />
                    {errors.phone && <p id={s.messageError}>{errors.phone?.message}</p>}
                    <button id={s.discountBtn}>Get discount</button>
                </form>
            </div>

        </div>
    )
}

