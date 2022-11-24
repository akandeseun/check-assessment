import { schema, CustomMessages, rules } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class UpdateProfileValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    username: schema.string.optional({ trim: true }, [
      rules.unique({ table: 'users', column: 'username' }),
    ]),
    first_name: schema.string.optional(),
    last_name: schema.string.optional(),
    age: schema.number.optional(),
    address: schema.string.optional(),
  })

  public messages: CustomMessages = {}
}
