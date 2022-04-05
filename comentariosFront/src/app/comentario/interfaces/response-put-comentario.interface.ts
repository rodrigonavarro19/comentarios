import { Comentario } from "./comentario.interface";

export interface ResponsePutComentario {
    estado:         boolean;
    mensaje:        string;
    comentario?:    Comentario;
    error?:         string; 
}