import { ComentarioSchema } from '#database/schema'
import { belongsTo } from '@adonisjs/lucid/orm'
import Partido from './partido.ts'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'
import Jugador from './jugador.ts'

export default class Comentario extends ComentarioSchema {
    @belongsTo(()=> Partido, {
        foreignKey: "partidoId"
    })
    declare partido: BelongsTo<typeof Partido>

    @belongsTo(()=> Jugador, {
        foreignKey: "jugadorId"
    })
    declare jugador: BelongsTo<typeof Jugador>
}