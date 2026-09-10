import { PozoSchema } from '#database/schema'
import { belongsTo, hasMany } from '@adonisjs/lucid/orm'
import Partido from './partido.ts'
import type { BelongsTo, HasMany } from '@adonisjs/lucid/types/relations'
import HistorialPozo from './historial_pozo.ts'

export default class Pozo extends PozoSchema {
    @belongsTo(()=> Partido, {
        foreignKey: "partidoId"
    })
    declare partido: BelongsTo<typeof Partido>

    @hasMany(()=> HistorialPozo, {
        foreignKey: "pozoId"
    })
    declare historial: HasMany<typeof HistorialPozo>
}