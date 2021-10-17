"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var router = (0, express_1.Router)();
var prospecto_controller_1 = require("../controllers/prospecto.controller");
var multer_1 = __importDefault(require("../libs/multer"));
router.get("/prospectos", prospecto_controller_1.getProspectos);
router.post("/prospectos", multer_1.default.single("document"), prospecto_controller_1.createProspecto);
router.get("/prospectos/:id", prospecto_controller_1.getProspecto);
router.put("/prospectos/:id", prospecto_controller_1.updateProspecto);
router.put("/prospectos/:id/:estatus", prospecto_controller_1.updateEstatusProspecto);
router.put("/observacion/:id", prospecto_controller_1.updateObservacionProspecto);
// router.delete("/prospectos/:id", );
exports.default = router;
