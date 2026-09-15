import type { HttpContext } from '@adonisjs/core/http'
import type { NextFn } from '@adonisjs/core/types/http'
import { isObjectValid } from '../utils/validadorTipos.ts';

export default class SuccessMiddleware {
  async handle(ctx: HttpContext, next: NextFn) {
    await next();

    const res = ctx.response

    if (res.getStatus() >= 400) return

    const body = res.getBody()

    if (isObjectValid(body)){
      res.send({
        success: true,
        data: body
      })
    }
  }
}