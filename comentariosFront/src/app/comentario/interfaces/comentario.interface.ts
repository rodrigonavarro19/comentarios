import { Region } from "./region.interface";

export interface Comentario {
    id:         number;
    email:      string;
    comentario: string;
    region:     Region;
    createAt:   Date;
}

 