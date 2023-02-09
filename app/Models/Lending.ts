import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Lending extends BaseModel {
  @column({ isPrimary: true })
  public id: string

  @column()
  public book_id: string

  @column()
  public user_id: string

  @column()
  public date_time_borrowed: DateTime

  @column()
  public date_time_due: DateTime

  @column()
  public date_time_returned: DateTime

  @column()
  public points: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
