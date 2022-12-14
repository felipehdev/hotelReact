import React from 'react'
import Button from '../Button/Button'
import S from './Booking.module.css'
import { useNavigate } from 'react-router-dom'

//Card para mostrar reservas do feitas pelo hóspede

const Booking = (props) => {

const navigate = useNavigate()

function handleEdit() {
  navigate(`/reserva/reserva/${props.id}`)
}

  
  return (
    <div className={S.bookingCard}>
        <img  className={S.img} src={props.src} alt="img do hotel" />
        <div className={S.infoContainer}>
            <h3 className={S.titulo}>Quarto {props.idRoom}</h3>
            <p className={S.checkDate}>CheckIn: {props.checkIn}</p>
            <p className={S.checkDate}>CheckOut: {props.checkOut}</p>
            <div className={S.btnContainer}>
                <Button text='Editar' onClick= {handleEdit} />
            </div>
        </div>
    </div>
  )
}

export default Booking