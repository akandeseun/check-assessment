import { schema, CustomMessages, rules } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class ProfileValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    first_name: schema.string.optional([rules.trim()]),
    last_name: schema.string.optional([rules.trim()]),
    age: schema.number.optional(),
    address: schema.string.optional([rules.trim()]),
  })

  public messages: CustomMessages = {}
}
