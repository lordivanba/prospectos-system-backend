import {Router} from 'express'
const router = Router();

import {getProspectos, getProspecto, createProspecto, updateProspecto, updateEstatusProspecto, updateObservacionProspecto} from '../controllers/prospecto.controller'

router.get("/prospectos", getProspectos);
router.post("/prospectos", createProspecto);
router.get("/prospectos/:id", getProspecto);
router.put("/prospectos/:id", updateProspecto);
router.put("/prospectos/:id/:estatus", updateEstatusProspecto);
router.put("/observacion/:id", updateObservacionProspecto);
// router.delete("/prospectos/:id", );

export default router;

