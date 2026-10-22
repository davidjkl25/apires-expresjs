import { Request, Response, NextFunction } from 'express';
import { ICreateEnviormentDTO, IUpdateEnviormentDTO } from '../dtos/enviorment.dto';

const isCreateEnviormentDTO = (value: unknown): value is ICreateEnviormentDTO => {
  if (typeof value !== 'object' || value === null || Array.isArray(value)) {
    return false;
  }

  const env = value as Record<string, unknown>;
  return (
    typeof env.ubicacion === 'string' &&
    env.ubicacion.trim() !== '' &&
    typeof env.capacidad === 'number' &&
    Number.isInteger(env.capacidad) &&
    env.capacidad >= 0
  );
};

const isUpdateEnviormentDTO = (value: unknown): value is IUpdateEnviormentDTO => {
  if (typeof value !== 'object' || value === null || Array.isArray(value)) {
    return false;
  }

  const env = value as Record<string, unknown>;
  const hasUbicacion = 'ubicacion' in env;
  const hasCapacidad = 'capacidad' in env;

  if (!hasUbicacion && !hasCapacidad) {
    return false;
  }

  if (hasUbicacion) {
    if (typeof env.ubicacion !== 'string' || (env.ubicacion as string).trim() === '') {
      return false;
    }
  }

  if (hasCapacidad) {
    if (
      typeof env.capacidad !== 'number' ||
      !Number.isInteger(env.capacidad) ||
      (env.capacidad as number) < 0
    ) {
      return false;
    }
  }

  return true;
};

export const validateCreateEnviormentPayload = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  const body: unknown = req.body;

  if (!isCreateEnviormentDTO(body)) {
    res.status(400).json({
      success: false,
      error: 'Datos del ambiente inválidos.'
    });
    return;
  }

  next();
};

export const validateUpdateEnviormentPayload = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  const body: unknown = req.body;

  if (!isUpdateEnviormentDTO(body)) {
    res.status(400).json({
      success: false,
      error: 'Datos para actualizar el ambiente inválidos.'
    });
    return;
  }

  next();
};
