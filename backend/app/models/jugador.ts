import { JugadoreSchema } from '#database/schema'
import { hasMany } from '@adonisjs/lucid/orm'
import PartidoJugador from './partido_jugador.ts'
import type { HasMany } from '@adonisjs/lucid/types/relations'

export default class Jugador extends JugadoreSchema {
    static table = 'jugadores'
    
    @hasMany(()=> PartidoJugador, {
        foreignKey: "jugadorId"
    })
    declare partidosJugadores: HasMany<typeof PartidoJugador>
}