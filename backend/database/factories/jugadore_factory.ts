import factory from '@adonisjs/lucid/factories'
import Jugador from '#models/jugador'

export const JugadorFactory = factory
  .define(Jugador, async ({ faker }) => {
    return {
      nombre: faker.person.fullName(),
      alias: faker.internet.username(),
      numeroContacto: faker.phone.number(),
      correo: faker.internet.email(),
    }
  })
  .build()