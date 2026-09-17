import { BaseTransformer } from '@adonisjs/core/transformers'
import Jugador from '#models/jugador'

export default class JugadorTransformer extends BaseTransformer<Jugador> {
  toObject() {
    return this.pick(this.resource, [
      'id',
      'alias',
      'createdAt',
      'updatedAt'
    ])
  }
}