import { BaseTransformer } from '@adonisjs/core/transformers'
import type Partido from "#models/partido"
import PozoTransformer from './pozo_transformer.ts'
import PartidoTransformer from './partido_transformer.ts'

export default class PartidoWithPozoTransformer extends BaseTransformer<Partido> {
  toObject() {
    return {
      ...new PartidoTransformer(this.resource).toObject(),
      //para que aparezcan los resultados del pozo, el partido tiene que tener el pozo precargado, y el pozo debe tener los partido precargados tambien (esto para que se cargue el valor calculado)
      pozo: this.resource.pozo ? new PozoTransformer(this.resource.pozo).toObject() : null
    }
  }
}