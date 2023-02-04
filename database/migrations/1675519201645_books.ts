import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'books'

  public async up() {
    this.schema.alterTable('books', (table) => {
      table.uuid('access_level_id').references('access_levels.id')
    })
  }
}
