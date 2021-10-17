"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var morgan_1 = __importDefault(require("morgan"));
var cors_1 = __importDefault(require("cors"));
var typeorm_1 = require("typeorm");
var prospecto_routes_1 = __importDefault(require("./routes/prospecto.routes"));
var app = (0, express_1.default)();
(0, typeorm_1.createConnection)();
// Middlewares
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use((0, morgan_1.default)('dev'));
// routes
app.use("/api", prospecto_routes_1.default);
app.listen(3000);
console.log('Server on port', 3000);
