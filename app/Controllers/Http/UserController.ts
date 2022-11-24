import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import UpdateProfileValidator from 'App/Validators/UpdateProfileValidator'
// import User from 'App/Models/User'

export default class UserController {
  public async updateProfile({ request, response, auth }: HttpContextContract) {
    const payload = await request.validate(UpdateProfileValidator)
    const user = await auth.user
    if (!user) {
      return response.unauthorized('Unauthorized access')
    }
    await user.merge(payload).save()
    return response.status(200).json({ user })
  }
}
