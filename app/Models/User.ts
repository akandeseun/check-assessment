import { DateTime } from 'luxon'
import Hash from '@ioc:Adonis/Core/Hash'
import { v4 as uuidv4 } from 'uuid'
import {
  column,
  beforeSave,
  BaseModel,
  hasOne,
  HasOne,
  belongsTo,
  BelongsTo,
} from '@ioc:Adonis/Lucid/Orm'
import Profile from './Profile'
import Role from './Role'

export default class User extends BaseModel {
  @column({ isPrimary: true })
  public id: string

  @column()
  public role_id: string

  @column()
  public username: string

  @column()
  public email: string

  @column({ serializeAs: null })
  public password: string

  @column()
  public rememberMeToken: string | null

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  // Hooks
  // encrypt password
  @beforeSave()
  public static async hashPassword(user: User) {
    if (user.$dirty.password) {
      user.password = await Hash.make(user.password)
    }
  }

  // assign uuid
  @beforeSave()
  public static assignUuid(user: User) {
    user.id = uuidv4()
  }

  // Relationships

  // User -> Profile
  @hasOne(() => Profile)
  public profile: HasOne<typeof Profile>

  // User -> Role
  @belongsTo(() => Role, {
    foreignKey: 'role_id',
  })
  public role: BelongsTo<typeof Role>
}
