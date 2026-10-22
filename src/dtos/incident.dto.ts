export interface ICreateIncidentDTO {
  descripcion: string;
  tipo: string;
  equipoId?: number;
  ambienteId?: number;
  [key: string]: unknown;
}

export interface IUpdateIncidentDTO {
  estado: string;
  [key: string]: unknown;
}
