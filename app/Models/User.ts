import { DateTime } from 'luxon'
import Hash from '@ioc:Adonis/Core/Hash'
import { v4 as uuidv4 } from 'uuid'
import { column, beforeSave, BaseModel } from '@ioc:Adonis/Lucid/Orm'

export default class User extends BaseModel {
  @column({ isPrimary: true })
  public id: string

  @column()
  public username: string

  @column()
  public email: string

  @column({ serializeAs: null })
  public password: string

  @column()
  public first_name: string

  @column()
  public last_name: string

  @column()
  public age: number

  @column()
  public address: string

  @column()
  public rememberMeToken: string | null

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  // Hooks
  @beforeSave()
  public static async hashPassword(user: User) {
    if (user.$dirty.password) {
      user.password = await Hash.make(user.password)
    }
  }

  @beforeSave()
  public static assignUuid(user: User) {
    user.id = uuidv4()
  }
}
