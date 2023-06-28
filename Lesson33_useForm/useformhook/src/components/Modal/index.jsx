import React from 'react'
import s from './index.module.css'
import { RxCross2 } from 'react-icons/rx'

export default function Modal({ children, modal, setModal }) {
  return (
    <div className={[ s.modal, modal ? s.active : '' ].join(' ')}>
      <div className={s.modal_content}>
        <RxCross2 className={s.cross_icon} onClick={() => setModal(false)} />
        { children }
      </div>
    </div>
  )
}
