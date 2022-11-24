import { schema, CustomMessages, rules } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class UpdateProfileValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    username: schema.string.nullableAndOptional({ trim: true }, [
      rules.unique({ table: 'users', column: 'username' }),
    ]),
    first_name: schema.string.nullableAndOptional(),
    last_name: schema.string.nullableAndOptional(),
    age: schema.number.nullableAndOptional(),
    address: schema.string.nullableAndOptional(),
  })

  public messages: CustomMessages = {}
}
