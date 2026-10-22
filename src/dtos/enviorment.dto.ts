export interface ICreateEnviormentDTO {
  ubicacion: string;
  capacidad: number;
  [key: string]: unknown;
}

export interface IUpdateEnviormentDTO {
  ubicacion?: string;
  capacidad?: number;
  [key: string]: unknown;
}
