import { Request, Response, NextFunction } from 'express';
import { ICreateUserDTO, IUpdateUserDTO } from '../dtos/user.dto';

const isNonEmptyString = (value: unknown): value is string =>
  typeof value === 'string' && value.trim() !== '';

const isCreateUserDTO = (value: unknown): value is ICreateUserDTO => {
  if (typeof value !== 'object' || value === null || Array.isArray(value)) {
    return false;
  }

  const user = value as Record<string, unknown>;
  return (
    isNonEmptyString(user.nombre) &&
    isNonEmptyString(user.correo) &&
    isNonEmptyString(user.contrasena) &&
    isNonEmptyString(user.rol)
  );
};

const isUpdateUserDTO = (value: unknown): value is IUpdateUserDTO => {
  if (typeof value !== 'object' || value === null || Array.isArray(value)) {
    return false;
  }

  const user = value as Record<string, unknown>;
  const fields = ['rol', 'estado', 'contrasena'] as const;

  const hasSomeField = fields.some((field) => field in user);

  if (!hasSomeField) {
    return false;
  }

  for (const field of fields) {
    if (field in user && !isNonEmptyString(user[field])) {
      return false;
    }
  }

  return true;
};

export const validateCreateUserPayload = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  const body: unknown = req.body;

  if (!isCreateUserDTO(body)) {
    res.status(400).json({
      success: false,
      error: 'Datos del usuario inválidos.'
    });
    return;
  }

  next();
};

export const validateUpdateUserPayload = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  const body: unknown = req.body;

  if (!isUpdateUserDTO(body)) {
    res.status(400).json({
      success: false,
      error: 'Datos para actualizar el usuario inválidos.'
    });
    return;
  }

  next();
};
