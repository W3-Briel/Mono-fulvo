import { PozoSchema } from '#database/schema'
import { belongsTo } from '@adonisjs/lucid/orm'
import Partido from './partido.ts'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'

export default class Pozo extends PozoSchema {
    @belongsTo(()=> Partido, {
        foreignKey: "partidoId"
    })
    declare partido: BelongsTo<typeof Partido>
}