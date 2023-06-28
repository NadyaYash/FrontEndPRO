import React from 'react'
import s from './index.module.css'

export default function ProductItem({ images, title, price }) {
    return (
        <div className={s.product}>
            <img src={images[0]} alt={title} />
            <p>Title: {title}</p>
            <p>Price: {price}$</p>
        </div>
    )
}
