import { Request, Response, NextFunction } from 'express';
import { ICreateIncidentDTO, IUpdateIncidentDTO } from '../dtos/incident.dto';

const isNonEmptyString = (value: unknown): value is string =>
  typeof value === 'string' && value.trim() !== '';

const isPositiveInteger = (value: unknown): value is number =>
  typeof value === 'number' && Number.isInteger(value) && value > 0;

const isCreateIncidentDTO = (value: unknown): value is ICreateIncidentDTO => {
  if (typeof value !== 'object' || value === null || Array.isArray(value)) {
    return false;
  }

  const incident = value as Record<string, unknown>;
  const hasEquipo = 'equipoId' in incident;
  const hasAmbiente = 'ambienteId' in incident;

  if (!isNonEmptyString(incident.descripcion) || !isNonEmptyString(incident.tipo)) {
    return false;
  }

  if (!hasEquipo && !hasAmbiente) {
    return false;
  }

  if (hasEquipo && !isPositiveInteger(incident.equipoId)) {
    return false;
  }

  if (hasAmbiente && !isPositiveInteger(incident.ambienteId)) {
    return false;
  }

  return true;
};

const isUpdateIncidentDTO = (value: unknown): value is IUpdateIncidentDTO => {
  if (typeof value !== 'object' || value === null || Array.isArray(value)) {
    return false;
  }

  const incident = value as Record<string, unknown>;
  return isNonEmptyString(incident.estado);
};

export const validateCreateIncidentPayload = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  const body: unknown = req.body;

  if (!isCreateIncidentDTO(body)) {
    res.status(400).json({
      success: false,
      error: 'Datos de la novedad inválidos.'
    });
    return;
  }

  next();
};

export const validateUpdateIncidentPayload = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  const body: unknown = req.body;

  if (!isUpdateIncidentDTO(body)) {
    res.status(400).json({
      success: false,
      error: 'Datos para actualizar la novedad inválidos.'
    });
    return;
  }

  next();
};
