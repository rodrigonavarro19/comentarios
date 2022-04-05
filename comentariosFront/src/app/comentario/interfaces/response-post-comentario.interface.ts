import { Comentario } from "./comentario.interface";

export interface ResponsePostComentario {
    estado:         boolean;
    mensaje:        string;
    comentario?:    Comentario;
    error?:         string; 
}