export interface ResporEstuResponse{
    Id_Reporte: number;
    Asunto: string;
    Descripcion: string;
    Cap_Evidencia?: Uint8Array;
    Id_EstudianteRegis: number;
}