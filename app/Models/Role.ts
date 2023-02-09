import { DateTime } from 'luxon'
import { v4 as uuidv4 } from 'uuid'
import { BaseModel, column, beforeSave, hasOne, hasMany, HasMany } from '@ioc:Adonis/Lucid/Orm'
import User from './User'

export default class Role extends BaseModel {
  @column({ isPrimary: true })
  public id: string

  @column()
  public name: string

  @column()
  public description: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  // Hooks
  @beforeSave()
  public static assignUuid(role: Role) {
    role.id = uuidv4()
  }

  // Relationships
  @hasMany(() => User, {
    foreignKey: 'role_id',
  })
  public users: HasMany<typeof User>
}
