import { Antecedente } from './antecedente';
import { Cirugia } from './cirugia';

export class Historial {
    public curp: string;
    public nombre: string;
    public fecha_nacimiento: string;
    public direccion: string;
    public ocupacion: string;

    public antecedentes: Antecedente[];
    public cirugias: Cirugia[];

    constructor() {
        this.antecedentes = [];
        this.cirugias = [];
    }
}
