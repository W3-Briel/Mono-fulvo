import Jugador from '#models/jugador'
import Partido from '#models/partido'
import PartidoJugador from '#models/partido_jugador'
import type { HttpContext } from '@adonisjs/core/http'

export default class JugadorPartidosController {
  /**
   * Display a list of resource
   */
  async index({response}: HttpContext) {
    const jugador_partido = await PartidoJugador.query().preload('partido').preload('jugador')
    response.status(200).json(jugador_partido)
  }

  async inscripcion({params, response}: HttpContext){
    const partido = await Partido.findOrFail(params.partidoId)
    const jugador = await Jugador.findOrFail(params.jugadorId)

    const partidoJugador = await PartidoJugador.create({
      partidoId: partido.id,
      jugadorId: jugador.id
    })

    response.status(201).json(partidoJugador)
  }
  // /**
  //  * Display form to create a new record
  //  */
  // async create({}: HttpContext) {}

  // /**
  //  * Handle form submission for the create action
  //  */
  // async store({ request }: HttpContext) {}

  // /**
  //  * Show individual record
  //  */
  // async show({ params }: HttpContext) {}

  // /**
  //  * Edit individual record
  //  */
  // async edit({ params }: HttpContext) {}

  // /**
  //  * Handle form submission for the edit action
  //  */
  // async update({ params, request }: HttpContext) {}

  // /**
  //  * Delete record
  //  */
  // async destroy({ params }: HttpContext) {}
}