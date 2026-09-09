import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'pozos'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')

      table.integer("partido_id")
            .notNullable()
            .unique()
            .references("id")
            .inTable("partidos")
            .onDelete("CASCADE")

      table.decimal('costo_total', 10, 2).notNullable()
      table.decimal('recaudado', 10, 2).notNullable().defaultTo(0)

      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}