import { Request, Response} from 'express'

export class EnviormentController {
    public static CreateEnviorment = (req: Request, res: Response): void => {
        res.status(501).json({
            success: false,
            message: 'Crear un nuevo ambiente especificando su capacidad y ubicación no esta dispo'
        });
    };
    
    public static GetEnviormentsByFilter = (req: Request, res: Response): void => {
        res.status(501).json({
            success: false,
            message: 'Listar todos los espacios físicos y laboratorios de ControlLabs no esta dispo'
        });
    };

     public static UpdateEnviorment = (req: Request, res: Response): void => {
        res.status(501).json({
            success: false,
            message: 'Actualizar atributos específicos de un ambiente no esta dispo'
        });
    };
}