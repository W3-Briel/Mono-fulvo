import { PartidoFactory } from '#database/factories/partido_factory'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    // Write your database queries inside the run method
      await PartidoFactory
      .with('pozo')
      .with('partidosJugadores', 5, (partidosJugadores) => {
        partidosJugadores.with('jugador')
      })
      .createMany(10)
  }
}