import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import User from './User'

export default class Profile extends BaseModel {
  @column({ isPrimary: true })
  public id: string

  @column()
  public user_id: string

  @column()
  public first_name: string

  @column()
  public last_name: string

  @column()
  public age: number

  @column()
  public address: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  // Relationships
  @belongsTo(() => User, {
    foreignKey: 'user_id',
  })
  public user: BelongsTo<typeof User>
}
