import { HistorialPozoSchema } from '#database/schema'
import { belongsTo } from '@adonisjs/lucid/orm'
import Pozo from './pozo.ts'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'

export default class HistorialPozo extends HistorialPozoSchema {
    @belongsTo(()=> Pozo, {
        foreignKey: "pozoId"
    })
    declare pozo: BelongsTo<typeof Pozo>
}