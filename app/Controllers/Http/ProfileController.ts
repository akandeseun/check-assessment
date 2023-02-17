import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import ProfileValidator from 'App/Validators/ProfileValidator'

export default class ProfileController {
  public async createProfile({ auth, response }: HttpContextContract) {
    const payload = await auth.user
    return response.json(payload)
  }
}
