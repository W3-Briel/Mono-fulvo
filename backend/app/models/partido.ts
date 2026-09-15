import { PartidoSchema } from '#database/schema'
import { beforeCreate, hasMany, hasOne } from '@adonisjs/lucid/orm'
import PartidoJugador from './partido_jugador.ts';
import type { HasMany, HasOne } from '@adonisjs/lucid/types/relations';
import Pozo from './pozo.ts';
import { randomBytes } from 'node:crypto';

export default class Partido extends PartidoSchema {
    @hasMany(() => PartidoJugador, {
        foreignKey: 'partidoId'
    })
    declare partidosJugadores: HasMany<typeof PartidoJugador>

    @hasOne(() => Pozo, {
        foreignKey: "partidoId"
    })
    declare pozo: HasOne<typeof Pozo>

    @beforeCreate()
    static generateInvitacion(partido: Partido) {
        partido.invitacion = randomBytes(4).toString('base64url');
    }
}