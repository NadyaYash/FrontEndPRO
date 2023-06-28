import React from 'react'
import FormButton from '../FormButton'
import FormInput from '../FormInput'
import s from './index.module.css'
import {useForm} from 'react-hook-form'

export default function FormItem({title, info_text, button_text, type, add_text}) {

  const {register, handleSubmit, formState: {errors}, reset} = useForm({
    mode: 'onBlur'
  });

  const submit = (data) => {
    console.log(data);
  reset()
};

  const emailRegexp = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const passwordRegexp = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;

  const emailRegister = register('email', {
    required: '*Email is a requared field',
    pattern: {
      value: emailRegexp,
      message: '*Your email should be valid'
    }
  });
  const passwordRegister = register('password', {
    required: '*Password is a requared field',
    pattern: {
      value: passwordRegexp,
      message: '*Your password should be valid'
  }
});


  return (
    <form onSubmit={handleSubmit(submit)} className={s.form_item}>
      <p className={s.form_title}>{title}</p>
      {
        type === 'reset_password'
        ? <p className={s.info_text}>{ add_text }</p>
        : ''
      }
      <input type='text' placeholder='Email' name='email' {...emailRegister} /> 
      {errors.email && <p className={s.messageError}>{errors.email?.message}</p>}
      {
      type === 'reset_password'
      ? ''
      : <FormInput type='password' placeholder='Password' name='password' {...passwordRegister} />
}

{errors.password && <p className={s.messageError}>{errors.password?.message}</p>}


    
    <FormButton color = 'yellow'>{button_text.submit}</FormButton>
    
    {
      type === 'reset_password'
      ? ''
      : <FormButton color = 'white'>{button_text.redirect}</FormButton>
      
    }

    {
        type === 'login'
        ? <a href='#' className={s.info_text_a}>{ info_text }</a>
        : <p className={s.info_text}>{ info_text }</p>
      }
    
      </form>

    
   
    
  )
}
