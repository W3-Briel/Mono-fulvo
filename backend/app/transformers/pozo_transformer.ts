import { BaseTransformer } from '@adonisjs/core/transformers'
import Pozo from '#models/pozo'

export default class PozoTransformer extends BaseTransformer<Pozo> {
  toObject() {
    return this.pick(this.resource, [
      'id',
      'costoTotal',
      'cuotaPorCabeza',
      'recaudado',
      'pozoPadre',
      'updatedAt'
    ])
  }
}