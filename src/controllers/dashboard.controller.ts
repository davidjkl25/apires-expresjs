import { Request, Response } from 'express';

export class DashboardController {
    public static GetSummary = (req: Request, res: Response): void => {
        res.status(501).json({
            success: false,
            message: 'Obtener el resumen consolidado de contadores globales no esta dispo'
        });
    };
}
