import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'lendings'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.bigIncrements('id').primary()
      table.uuid('book')
      table.uuid('user').references('users.id')
      table.dateTime('date_time_borrowed')
      table.dateTime('date_time_due')
      table.dateTime('date_time_returned')
      table.integer('points')
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
