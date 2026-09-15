import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'comentarios'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')

      table.integer("partido_id")
            .references("id")
            .inTable("partidos")
            .notNullable()
            .onDelete("CASCADE")
      
      table.integer("jugador_id")
            .references("id")
            .inTable("jugadores")
            .notNullable()
            .onDelete("CASCADE")

      table.string("comentario",1500).notNullable()

      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}