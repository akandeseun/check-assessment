import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Hash from '@ioc:Adonis/Core/Hash'
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

    try {
      const user = await User.findBy('email', payload.email)
      if (!user) {
        return response.status(400).json({
          msg: 'Incorrect email or password',
        })
      }

      if (!(await Hash.verify(user.password, payload.password))) {
        return response.status(400).json({
          msg: 'Incorrect email or password',
        })
      }

      const token = await auth.use('api').generate(user, { expiresIn: '30 days' })
      return response.status(200).json({
        msg: `welcome ${user.username}`,
        token,
      })
    } catch (error) {
      return response.unauthorized('error')
    }
  }
}
