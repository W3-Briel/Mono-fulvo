import app from '@adonisjs/core/services/app'
import { type HttpContext, ExceptionHandler } from '@adonisjs/core/http'

export default class HttpExceptionHandler extends ExceptionHandler {
  /**
   * In debug mode, the exception handler will display verbose errors
   * with pretty printed stack traces.
   */
  protected debug = !app.inProduction

  /**
   * The method is used for handling errors and returning
   * response to the client
   */
  async handle(error: unknown, ctx: HttpContext) {
    let status = 500
    let errorMessage = "Ocurrio un error en el servidor"
    let errorCode = "Error_desconocido"


    if (error instanceof Error) {
      errorMessage = error.message
    }

    let adonisError = error as {status?: number, code?: string}
    if (adonisError.status) status = adonisError.status
    if (adonisError.code) errorCode = adonisError.code

    //considerate homologado 🗣️🔥
    return ctx.response.status(status).send(
      {
        success: false,
        data: {
          message: errorMessage,
          code: errorCode
        } 
      }
    )
  }

  /**
   * The method is used to report error to the logging service or
   * the a third party error monitoring service.
   *
   * @note You should not attempt to send a response from this method.
   */
  async report(error: unknown, ctx: HttpContext) {
    return super.report(error, ctx)
  }
}
