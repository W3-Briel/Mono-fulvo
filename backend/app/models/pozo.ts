import { PozoSchema } from '#database/schema'
import { belongsTo, computed, hasMany } from '@adonisjs/lucid/orm'
import Partido from './partido.ts'
import type { BelongsTo, HasMany } from '@adonisjs/lucid/types/relations'
import HistorialPozo from './historial_pozo.ts'

export default class Pozo extends PozoSchema {
    @belongsTo(() => Partido, {
        foreignKey: "partidoId"
    })
    declare partido: BelongsTo<typeof Partido>

    @hasMany(()=> HistorialPozo, {
        foreignKey: "pozoId"
    })
    declare historial: HasMany<typeof HistorialPozo>
    @belongsTo(() => Pozo, {
        foreignKey: "pozoPadre"
    })
    declare padre: BelongsTo<typeof Pozo>

    @hasMany(() => Pozo, {
        foreignKey: 'pozoPadre',
    })
    declare hijos: HasMany<typeof Pozo>
    @computed()
    get cuotaPorCabeza(){
        const total = this.costoTotal
        const cupoMax = this.partido?.cupoMax || 0

        return Number(total) / Number(cupoMax)
    }
}