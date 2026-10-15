"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoanController = void 0;
class LoanController {
    static createLoan = (req, res) => {
        // TODO: llamar al servicio con req.body y responder 201 con el préstamo creado.
        res.status(501).json({
            success: false,
            message: 'El registro de préstamos todavía no está implementado.'
        });
    };
    static getLoansByFilter = (req, res) => {
        // TODO: tomar los filtros de req.query, llamar al servicio y responder con los resultados.
        res.status(501).json({
            success: false,
            message: 'La consulta del historial todavía no está implementada.'
        });
    };
    static getLoanById = (req, res) => {
        const { id } = req.params;
        // TODO: pasar id a la operación de consulta y responder con el préstamo encontrado.
        res.status(501).json({
            success: false,
            message: `La consulta del préstamo ${id} todavía no está implementada.`
        });
    };
    static acceptLoanInventory = (req, res) => {
        const { id } = req.params;
        // TODO: pasar id a la operación de aceptación y responder con el resultado.
        res.status(501).json({
            success: false,
            message: `La aceptación del préstamo ${id} todavía no está implementada.`
        });
    };
}
exports.LoanController = LoanController;
