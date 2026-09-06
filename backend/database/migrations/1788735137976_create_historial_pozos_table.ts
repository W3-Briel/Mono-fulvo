import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'historial_pozos'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')

      table.integer("pozo_id")
          .references("id")
          .inTable("pozos")
          .notNullable()
          .onDelete("CASCADE")

      table.integer("afectado")
            .references("id")
            .inTable("jugadores")
            .nullable()
            .onDelete("SET NULL")

      table.string("descripcion").notNullable()
      table.enum("tipo_moviento", ["INGRESO_DINERO","SACO_DINERO"])
            .notNullable()

      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}