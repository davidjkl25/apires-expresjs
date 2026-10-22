export interface ICreateUserDTO {
  nombre: string;
  correo: string;
  contrasena: string;
  rol: string;
  [key: string]: unknown;
}

export interface IUpdateUserDTO {
  rol?: string;
  estado?: string;
  contrasena?: string;
  [key: string]: unknown;
}
