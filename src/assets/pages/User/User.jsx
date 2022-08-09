import React from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import Booking from '../../components/Booking/Booking'
import SearchBar from '../../components/SearchBar/SearchBar'
import Title from '../../components/Title/Title'
import { getBookingsById } from '../../../service/api'

const User = () => {

    //erro ao buscar API. Método p/ buscar por id de usuário?

    const params = useParams();
    const { ID_USUARIO } = params;
  const [bookings, setBookings] = useState();

  async function request() {
    const response = await getBookingsById()
    setBookings(response);
  }

  useEffect(() => {
    request();
  }, []);

  return (
    <div>
      <Title title="Bem vindo(a), Nahla"/>

      <h3>Nova Reserva</h3>
      <SearchBar />
      <h3>Últimas Reservas:</h3>
      {/* <div>{!!bookings &&
        bookings.reserva.map((booking, key) => {
          return (

            //Mudar nome dos atributos para fazer funcionar
            <Booking
              src="https://cf.bstatic.com/images/hotel/840x460/631/63184497.jpg"
              descr="img quarto"
              key={key}
              idRoom={booking.ID_QUARTO}
              checkOut={booking.CHECK_OUT}
              checkIn={booking.CHECK_IN}
              id={booking.ID_RESERVA}
            />
          );
        })}
    </div> */}

    </div>
  )
}

export default User