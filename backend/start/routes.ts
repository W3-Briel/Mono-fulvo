/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import { middleware } from '#start/kernel'
import router from '@adonisjs/core/services/router'
import { controllers } from '#generated/controllers'

router.get('/', () => {
  return { hello: 'world' }
})

router
  .group(() => {
    router
      .group(() => {
        router.post('signup', [controllers.NewAccount, 'store'])
        router.post('login', [controllers.AccessTokens, 'store'])
      })
      .prefix('auth')
      .as('auth')

    router
      .group(() => {
        router.get('profile', [controllers.Profile, 'show'])
        router.post('logout', [controllers.AccessTokens, 'destroy'])
      })
      .prefix('account')
      .as('profile')
      .use(middleware.auth())

    router
      .group(() => {
        router.post('partidos', [controllers.Partidos, 'store'])
        router.get('partidos', [controllers.Partidos, 'index'])
        router.get('partidos/invitacion/:invite', [controllers.Partidos, 'showByInvitacion'])
        router.get('partidos/:id', [controllers.Partidos, 'show'])
        
        router.patch('partidos/:id/cancelar', [controllers.Partidos, 'cancelar'])
        router.patch('partidos/:id/finalizar', [controllers.Partidos, 'finalizar'])
      })
  })
  .prefix('/api/v1')
