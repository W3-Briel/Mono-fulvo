import { PartidosJugadoreSchema } from '#database/schema'
import { belongsTo } from '@adonisjs/lucid/orm'
import Partido from './partido.ts'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'
import Jugador from './jugador.ts'

export default class PartidoJugador extends PartidosJugadoreSchema {
    static table = 'partidos_jugadores'

    @belongsTo(() => Partido, {
        foreignKey: 'partidoId'
    })
    declare partido: BelongsTo<typeof Partido>

    @belongsTo(() => Jugador, {
        foreignKey: 'jugadorId'
    })
    declare jugador: BelongsTo<typeof Jugador>
}