import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import CreateUserValidator from 'App/Validators/CreateUserValidator'
import AuthenticateUserValidator from 'App/Validators/AuthenticateUserValidator'
import User from 'App/Models/User'

export default class AuthController {
  public async register({ request, response, auth }: HttpContextContract) {
    const payload = await request.validate(CreateUserValidator)
    const user = await User.create(payload)
    const token = await auth.use('api').generate(user)
    return response.status(200).json({ user, token })
  }

  public async authenticate({ request, response, auth }: HttpContextContract) {
    const payload = await request.validate(AuthenticateUserValidator)
  }
}
