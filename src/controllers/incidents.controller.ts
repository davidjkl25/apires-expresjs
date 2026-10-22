import { Request, Response } from 'express';

export class IncidentController {
    public static CreateIncident = (req: Request, res: Response): void => {
        res.status(501).json({
            success: false,
            message: 'Crear un reporte de novedad asociándolo a un equipo o ambiente específico no esta dispo'
        });
    };

    public static GetIncidentHistory = (req: Request, res: Response): void => {
        res.status(501).json({
            success: false,
            message: 'Consultar el historial completo de incidencias reportadas no esta dispo'
        });
    };

    public static UpdateIncidentStatus = (req: Request, res: Response): void => {
        res.status(501).json({
            success: false,
            message: 'Actualizar parcialmente el estado de una novedad no esta dispo'
        });
    };
}
