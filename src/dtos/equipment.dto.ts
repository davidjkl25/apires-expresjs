export interface ICreateEquipmentDTO {
  nombre: string;
  marca: string;
  modelo: string;
  numeroSerial: string;
  estado: string;
  ambienteId: number;
  [key: string]: unknown;
}

export interface IUpdateEquipmentDTO {
  nombre?: string;
  marca?: string;
  modelo?: string;
  numeroSerial?: string;
  estado?: string;
  ambienteId?: number;
  [key: string]: unknown;
}
