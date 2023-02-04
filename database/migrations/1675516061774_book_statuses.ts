import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'book_statuses'

  public async up() {
    this.schema.alterTable('book_statuses', (table) => {
      table.dropColumn('book')
      table.dropColumn('status')
      table.uuid('book_id').references('books.id')
      table.uuid('status_id').references('status.id')
    })
  }
}
