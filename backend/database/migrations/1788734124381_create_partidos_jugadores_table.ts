import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'partidos_jugadores'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')

      table.integer("partido_id")
            .notNullable()
            .references("id")
            .inTable("partidos")
            .onDelete("CASCADE")
      
      table.integer("jugador_id")
            .notNullable()
            .references("id")
            .inTable("jugadores")
            .onDelete("CASCADE")

      table.enum("estado_reserva",["RESERVADO","EN_ESPERA","CANCELADO"])
            .notNullable()
            .defaultTo("EN_ESPERA")

      table.timestamp('created_at')
      table.timestamp('updated_at')


      table.unique(["partido_id","jugador_id"])
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}