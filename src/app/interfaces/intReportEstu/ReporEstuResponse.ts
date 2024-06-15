export interface ReporEstuResponse{
    Id_Reporte: number;
    Asunto: string;
    Descripcion: string;
    Cap_Evidencia?: Uint8Array;
    Anonimo_Revelar?: string;
    Id_EstudianteRegis: number;
}