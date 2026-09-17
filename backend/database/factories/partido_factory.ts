import factory from '@adonisjs/lucid/factories'
import Partido from '#models/partido'
import { PartidosJugadorFactory } from './partidos_jugadore_factory.ts'
import { DateTime } from 'luxon'
import { PozoFactory } from './pozo_factory.ts'

export const PartidoFactory = factory
  .define(Partido, async ({ faker }) => {
    return {
      adminDni: faker.string.numeric(8),
      adminPin: faker.string.numeric(4),
      cvuAliasLink: "mono.fulvo",
      invitacion: faker.string.alphanumeric(6),
      inicioPartido: DateTime.fromJSDate(faker.date.future()),
      ubicacion: faker.location.direction(),
      cupoMax: faker.number.int({ min: 10, max: 20 })
    }
  })
  .relation('partidosJugadores', () => PartidosJugadorFactory)
  .relation('pozo', () => PozoFactory)
  .build()