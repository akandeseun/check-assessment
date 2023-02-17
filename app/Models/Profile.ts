import { DateTime } from 'luxon'
import { v4 as uuidv4 } from 'uuid'
import { BaseModel, BelongsTo, belongsTo, column, beforeSave } from '@ioc:Adonis/Lucid/Orm'
import User from './User'

export default class Profile extends BaseModel {
  @column({ isPrimary: true })
  public id: string

  @column()
  public userId: string

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

  // Hooks
  @beforeSave()
  public static assignUuid(profile: Profile) {
    profile.id = uuidv4()
  }

  // Relationships
  @belongsTo(() => User)
  public user: BelongsTo<typeof User>
}
