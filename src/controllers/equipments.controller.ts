import { Request, Response } from "express";

export class EquipmentController {
   public static CreateEquipment = (req: Request, res: Response): void => {
        res.status(501).json({
            success: false,
            message: 'Registrar un nuevo equipo vinculado a un ambiente de laboratorio no esta dispo'
        });
    };
     
    public static GetEquipmentsByFilter = (req: Request, res: Response): void => {
        res.status(501).json({
            success: false,
            message: 'Listar todos los equipos existentes o filtrar aquellos asignados a un ambiente específico no esta dispo'
        });
    };  
    
    public static UpdateEquipment = (req: Request, res: Response): void => {
        res.status(501).json({
            success: false,
            message: 'Actualizar de forma parcial el estado técnico de un equipo no esta dispo'
        });
    }; 
}