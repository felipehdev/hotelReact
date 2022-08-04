import React from 'react'
import S from './Button.module.css'

const Button = (props) => {
  return (
    <button className={S.button}>
        <p className={S.text} text='123vfgfbgb'>{props.text}</p>
    </button>
  )
}

export default Button