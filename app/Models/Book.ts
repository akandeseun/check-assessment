import { DateTime } from 'luxon'
import { v4 as uuidv4 } from 'uuid'
import { BaseModel, column, beforeSave } from '@ioc:Adonis/Lucid/Orm'

export default class Book extends BaseModel {
  @column({ isPrimary: true })
  public id: string

  @column()
  public title: string

  @column()
  public edition: number

  @column()
  public description: string

  @column()
  public prologue: string

  @column()
  public access_level: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  // Hooks
  @beforeSave()
  public static assignUuid(book: Book) {
    book.id = uuidv4()
  }
}
