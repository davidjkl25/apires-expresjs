import { Request, Response, NextFunction } from 'express';
import { ICreateEquipmentDTO, IUpdateEquipmentDTO } from '../dtos/equipment.dto';

const isNonEmptyString = (value: unknown): value is string =>
  typeof value === 'string' && value.trim() !== '';

const isPositiveInteger = (value: unknown): value is number =>
  typeof value === 'number' && Number.isInteger(value) && value > 0;

const isCreateEquipmentDTO = (value: unknown): value is ICreateEquipmentDTO => {
  if (typeof value !== 'object' || value === null || Array.isArray(value)) {
    return false;
  }

  const equipment = value as Record<string, unknown>;
  return (
    isNonEmptyString(equipment.nombre) &&
    isNonEmptyString(equipment.marca) &&
    isNonEmptyString(equipment.modelo) &&
    isNonEmptyString(equipment.numeroSerial) &&
    isNonEmptyString(equipment.estado) &&
    isPositiveInteger(equipment.ambienteId)
  );
};

const isUpdateEquipmentDTO = (value: unknown): value is IUpdateEquipmentDTO => {
  if (typeof value !== 'object' || value === null || Array.isArray(value)) {
    return false;
  }

  const equipment = value as Record<string, unknown>;
  const stringFields = ['nombre', 'marca', 'modelo', 'numeroSerial', 'estado'] as const;

  const hasSomeField =
    stringFields.some((field) => field in equipment) || 'ambienteId' in equipment;

  if (!hasSomeField) {
    return false;
  }

  for (const field of stringFields) {
    if (field in equipment && !isNonEmptyString(equipment[field])) {
      return false;
    }
  }

  if ('ambienteId' in equipment && !isPositiveInteger(equipment.ambienteId)) {
    return false;
  }

  return true;
};

export const validateCreateEquipmentPayload = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  const body: unknown = req.body;

  if (!isCreateEquipmentDTO(body)) {
    res.status(400).json({
      success: false,
      error: 'Datos del equipo inválidos.'
    });
    return;
  }

  next();
};

export const validateUpdateEquipmentPayload = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  const body: unknown = req.body;

  if (!isUpdateEquipmentDTO(body)) {
    res.status(400).json({
      success: false,
      error: 'Datos para actualizar el equipo inválidos.'
    });
    return;
  }

  next();
};
