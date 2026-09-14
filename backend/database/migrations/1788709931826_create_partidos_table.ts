import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'partidos'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')

      //creando mis columnas
      table.string("admin_dni").notNullable()
      table.string("admin_pin").notNullable()
      table.string("cvu_alias_link").notNullable()
      table.string("invitacion").notNullable()
      table.datetime("inicio_partido").notNullable()
      table.string("ubicacion").notNullable()
      table.integer("cupo_max").notNullable()
      table.enum("status", ["ACTIVO", "CANCELADO", "FINALIZADO"])
        .notNullable()
        .defaultTo("ACTIVO")

      table.timestamp('created_at')
      table.timestamp('updated_at')
    })

    this.schema.raw(`
      CREATE UNIQUE INDEX partidos_invitacion_activa ON ${this.tableName} (invitacion)
      WHERE status = 'ACTIVO'
      `);
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}     