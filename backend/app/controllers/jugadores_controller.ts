import Jugador from '#models/jugador'
import PartidoJugador from '#models/partido_jugador'
import JugadorTransformer from '#transformers/jugador_transformer'
import type { HttpContext } from '@adonisjs/core/http'

export default class JugadoresController {
  /**
   * Display a list of resource
   */
  async index({response}: HttpContext) {
    const jugadores = await Jugador.all()
    const res = jugadores.map((j) => new JugadorTransformer(j).toObject())
    response.status(200).json(res)
  }

  /**
   * Display form to create a new record
   */
  // async create({}: HttpContext) {}

  // /**
  //  * Handle form submission for the create action
  //  */
  // async store({ request }: HttpContext) {}

  /**
   * Show individual record
   */
  async show({ params, response }: HttpContext) {
    const jugador = await Jugador.findOrFail(params.idJugador)
    
    if (!jugador) throw new Error("El jugador ingresado no existe en la bbdd")

    const jugadorPartidos = await PartidoJugador
      .query()
      .where("jugadorId",jugador.id)
      .preload("partido")

    response.status(200).json(jugadorPartidos)
  }

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