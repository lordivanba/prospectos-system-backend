import {Request, Response} from 'express'
import {getRepository} from 'typeorm'
import {Prospecto} from '../entity/Prospecto'
import {Documento} from '../entity/Documento'
import path from 'path'
import { equal } from 'assert'


// Get All
export const getProspectos = async (req: Request, res: Response): Promise<Response> => {
    const prospectos = await getRepository(Prospecto).find();
    return res.json(prospectos);
};

// Get First by Id
export const getProspecto = async (req: Request, res: Response): Promise<Response> => {
    let id = req.params.id;
    const prospectos = await getRepository(Prospecto).findOne(id);
    return res.json(prospectos);
};

// Create
export const createProspecto = async (req: Request, res: Response): Promise<Response> => {
    const {nombre, apellido, calle, colonia, codigoPostal, telefono, rfc} = req.body;
    const newProspecto = {
        nombre: nombre,
        apellido: apellido,
        calle: calle,
        colonia: colonia,
        codigoPostal: codigoPostal,
        telefono: telefono,
        rfc: rfc,
        estatus: "Enviado",
        observacion: "N/A"
    }
    
    getRepository(Prospecto).create(newProspecto);
    const results = await getRepository(Prospecto).save(newProspecto);

    if(req.file){
        const prospectoId = results.id;
        const newDoc = {
            prospectoId: prospectoId,
            nombre: req.file?.originalname,
            documentoPath: req.file?.path

        }
    
        getRepository(Documento).create(newDoc);
        const resultsDoc = await getRepository(Documento).save(newDoc);
    }

    return res.json(results);
};

// Update
export const updateProspecto = async (req: Request, res: Response): Promise<Response> => {
    const prospecto = await getRepository(Prospecto).findOne(req.params.id);

    if(prospecto){
        getRepository(Prospecto).merge(prospecto,req.body);
        const results = await getRepository(Prospecto).save(prospecto);
        return res.json(results);
    }

    return res.status(404).json({msg: "No se ha encontrado al prospecto."});
};

// Update Status {Enviado, Autorizado, Denegado}
export const updateEstatusProspecto = async (req: Request, res: Response): Promise<Response> => {
    const prospecto = await getRepository(Prospecto).findOne(req.params.id);

    if(prospecto){
        const estatus = req.params.estatus
        const newStatus = {
            estatus: estatus
        }
        getRepository(Prospecto).merge(prospecto, newStatus);
        const results = await getRepository(Prospecto).save(prospecto);
        return res.json(results);
    }

    return res.status(404).json({msg: "No se ha encontrado al prospecto."});
};

// Update Status {Enviado, Autorizado, Denegado}
export const updateObservacionProspecto = async (req: Request, res: Response): Promise<Response> => {
    const prospecto = await getRepository(Prospecto).findOne(req.params.id);
    const newObservacion = {
        observacion: req.body.observacion
    }
    if(prospecto){
        getRepository(Prospecto).merge(prospecto, newObservacion);
        const results = await getRepository(Prospecto).save(prospecto);
        return res.json(results);
    }

    return res.status(404).json({msg: "No se ha encontrado al prospecto."});
};


