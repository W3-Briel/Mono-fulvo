import factory from '@adonisjs/lucid/factories'
import PartidosJugador from '#models/partido_jugador'
import { JugadorFactory } from './jugadore_factory.ts'

export const PartidosJugadorFactory = factory
  .define(PartidosJugador, async ({ faker }) => {
    return {
      estadoReserva: faker.helpers.arrayElement(["RESERVADO","EN_ESPERA","CANCELADO"]),
    }
  })
  .relation('jugador', () => JugadorFactory)
  .build()