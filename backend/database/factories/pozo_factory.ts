import factory from '@adonisjs/lucid/factories'
import Pozo from '#models/pozo'

export const PozoFactory = factory
  .define(Pozo, async ({ faker }) => {
    return {
      costoTotal: faker.number.int({ min: 10000, max: 80000 }),
    }
  })
  .build()