import { schema, CustomMessages, rules } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class CreateBookValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    title: schema.string([rules.trim()]),
    edition: schema.number(),
    description: schema.string(),
    prologue: schema.string(),
  })

  public messages: CustomMessages = {
    required: '{{field}} is required to create a book',
  }
}
