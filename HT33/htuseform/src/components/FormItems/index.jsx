import React from 'react'
import s from './index.module.css'
import {useForm} from 'react-hook-form'


export default function FormItems() {
    const {register, handleSubmit,formState: {errors}, reset} = useForm({
        mode: 'onBlur'
      });
    
      const submit = (data) => {
        console.log(data);
      reset()
    };

    const emailRegexp = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    const fnameRegister = register('lname', {
        required: '*First name is a requared field',
        
      });
      const lnameRegister = register('lname', {
        required: '*Last name is a requared field',
        
    });
    const addressRegister = register('address', {
        required: '*Address is a requared field',
        
      });
      const emailRegister = register('email', {
        required: '*Email is a requared field',
        pattern: {
            value: emailRegexp,
            message: '*Your email should be valid'
    }
    });


    const phoneRegister = register('phone', {
        required: '*Phone is a requared field',
        
    });

  return (

    
    
    <form className={s.form} onSubmit={handleSubmit(submit)} >
        <input className={s.input} type='text' placeholder='First name' name = 'fname' {...fnameRegister}/>
        <input className={s.input} type='text' placeholder='Last name' name = 'lname' {...lnameRegister} />
        <input className={s.input} type='text' placeholder='Address' name = 'address'  {...addressRegister}/>
        <input className={s.input} type='text' placeholder='Email' name = 'email'  {...emailRegister}/>
        {errors.email && <p className={s.messageError}>{errors.email?.message}</p>}
        <input className={s.input} type='text' placeholder='Phone number' name = 'phone' {...phoneRegister} />
        <button>Submit</button>
    </form>
  )
  }
