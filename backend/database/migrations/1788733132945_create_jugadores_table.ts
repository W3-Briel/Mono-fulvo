import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'jugadores'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')

      table.string("nombre").notNullable()
      table.string("alias").nullable().defaultTo("SIN ALIAS")
      table.string("numero_contacto").notNullable()
      table.string("correo").nullable()

      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}