import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import ProfileValidator from 'App/Validators/ProfileValidator'
import Profile from 'App/Models/Profile'
import User from 'App/Models/User'

export default class ProfileController {
  public async createProfile({ auth, request, response }: HttpContextContract) {
    const payload = await request.validate(ProfileValidator)
    // Gets the id of the current logged in user
    const currentUserId = await auth.user?.id
    const user = await User.findOrFail(currentUserId)
    const profile = await Profile.create(payload)
    await profile.related('user').associate(user)
    // await profile.load('user')
    return response.status(200).json({ profile })
  }
}
