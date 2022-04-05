import { Comentario } from "./comentario.interface";

export interface ResponseDeleteComentario {
    estado:     boolean;
    mensaje:    string;
    error?:     string; 
}