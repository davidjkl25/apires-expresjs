import { Request, Response } from "express";

export class UserController {
    public static CreateUser = (req: Request, res: Response): void => {
        res.status(501).json({
            success: false,
            message: 'El registro de usuario tovia no esta dispo.'
        });
    };

    public static GetUserByFilter = (req: Request, res: Response): void => {
        res.status(501).json({
            success: false,
            message: 'Obtener el listado completo de usuarios registrados en el sistema no esta dispo.'

        });
    };

    public static GetUserById = (req: Request, res: Response): void => {
        res.status(501).json({
            success: false,
            message: 'Consultar los detalles de un usuario específico mediante su identificador único no esta dispo.'

        });
    };

    public static UpdateUser = (req: Request, res: Response): void => {
        res.status(501).json({
            success: false,
            message: 'Actualizar parcialmente el rol, estado de cuenta o contraseña de un usuario específico no esta dispo.'

        });
    };

     public static DeleteUser = (req: Request, res: Response): void => {
        res.status(501).json({
            success: false,
            message: 'Eliminar lógicamente un usuario del sistema no esta dispo.'

        });
    };
 

}