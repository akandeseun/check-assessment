import { schema, CustomMessages, rules } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class CreateUserValidator {
  constructor(protected ctx: HttpContextContract) {}

  // Schema Routes
  public schema = schema.create({
    username: schema.string([rules.unique({ table: 'users', column: 'username' }), rules.trim()]),
    email: schema.string([
      rules.email(),
      rules.unique({ table: 'users', column: 'email' }),
      rules.trim(),
    ]),
    password: schema.string([rules.minLength(6)]),
  })

  public messages: CustomMessages = {
    'required': '{{ field }} is required to create a new account',
    'email.unique': 'User exists with email',
    'username.unique': 'username taken',
    'password.minLength': 'Password cannot be less than six(6) characters',
  }
}
