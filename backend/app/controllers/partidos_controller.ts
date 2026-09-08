import Partido from '#models/partido'
import PartidoTransformer from '#transformers/partido_transformer';
import type { HttpContext } from '@adonisjs/core/http'
import { DateTime } from 'luxon';

export default class PartidosController {
  /**
   * Display a list of resource
   */
  async index({ response }: HttpContext) {
    const partidos = await Partido.all()

    response.json(partidos.map(p => new PartidoTransformer(p).toObject()));
  }

  /**
   * Display form to create a new record
   */
  // async create({}: HttpContext) {}

  /**
   * Handle form submission for the create action
   */
  async store({ request, response }: HttpContext) {
    //hardcodeamos datos para probar nomas
    const body = request.body();

    const partido = await Partido.create({
      adminDni: body?.adminDni,
      adminPin: body?.adminPin,
      inicioPartido: DateTime.now(),
      ubicacion: body?.ubicacion,
      status: body?.status,
      cupoMax: body?.cupoMax,
      invitacion: body?.invitacion
    });

    response.created(new PartidoTransformer(partido).toObject())
  }

  /**
   * Show individual record
   */
  async show({ params }: HttpContext) { }

  /**
   * Edit individual record
   */
  // async edit({ params }: HttpContext) {}

  /**
   * Handle form submission for the edit action
   */
  // async update({ params, request }: HttpContext) {}

  /**
   * Delete record
   */
  async destroy({ params }: HttpContext) { }
}