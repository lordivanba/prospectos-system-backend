import {Router} from 'express'
const router = Router();

import {getProspectos, getProspecto, createProspecto, updateProspecto, updateEstatusProspecto, updateObservacionProspecto} from '../controllers/prospecto.controller'

import multer from '../libs/multer'

router.get("/prospectos", getProspectos);
router.post("/prospectos", multer.single("document"), createProspecto);
router.get("/prospectos/:id", getProspecto);
router.put("/prospectos/:id", updateProspecto);
router.put("/prospectos/:id/:estatus", updateEstatusProspecto);
router.put("/observacion/:id", updateObservacionProspecto);
// router.delete("/prospectos/:id", );

export default router;

