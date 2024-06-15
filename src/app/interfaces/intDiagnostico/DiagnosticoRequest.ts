export interface DiagnosticoRequest {
    Est_Usuario: string;
    Id_Categoria: number;
    Diagnostico: string;
    Id_EstudianteRegis?: number;
    Id_ProfesRegis: number;
}