import type Partido from '#models/partido'
import { BaseTransformer } from '@adonisjs/core/transformers'

export default class PartidoTransformer extends BaseTransformer<Partido> {
    toObject() {
        return this.pick(this.resource, [
            "adminDni",
            "inicioPartido",
            "ubicacion",
            "status",
            "cupoMax",
            "invitacion",
            "cvuAliasLink",
            "id"
        ])
    }
}