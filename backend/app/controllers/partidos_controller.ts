import Partido from '#models/partido'
import PartidoTransformer from '#transformers/partido_transformer';
import PartidoWithPozoTransformer from '#transformers/partido_with_pozo_transformer';
import type { HttpContext } from '@adonisjs/core/http'
import db from '@adonisjs/lucid/services/db';
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
        const body = request.body();

        const resultado = await db.transaction(async (trx) => {
            const partido = await Partido.create({
                adminDni: body?.adminDni,
                adminPin: body?.adminPin,
                inicioPartido: DateTime.now(),
                ubicacion: body?.ubicacion,
                cupoMax: body?.cupoMax,
                cvuAliasLink: body?.cvuAliasLink
            }, { client: trx });

            const pozo = await partido.related('pozo').create({
                costoTotal: body?.costoTotal,
                recaudado: 0,
                pozoPadre: null
            }, { client: trx });

            return { pozo, partido };
        })
        await resultado.pozo.load('partido')

        response.status(201).json(new PartidoWithPozoTransformer(resultado.partido).toObject());
    }

    /**
     * Show individual record
     */
    async show({ params, response }: HttpContext) {
        const result = await Partido.query()
            .where('id', params.id)
            .preload('pozo', (pozoQuery) => pozoQuery.preload('partido'))
            .firstOrFail()
        return response.json(new PartidoWithPozoTransformer(result).toObject())
    }

    async showByInvitacion({ params, response }: HttpContext) {
        const result = await Partido.query()
            .where("status", "ACTIVO")
            .where("invitacion", params?.invite)
            .preload("pozo", (pozoQuery) => pozoQuery.preload("partido"))
            .firstOrFail()

        return response.status(200).send(new PartidoWithPozoTransformer(result).toObject())
    }
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