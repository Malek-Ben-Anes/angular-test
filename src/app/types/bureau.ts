export class Bureau {
    name: string;
    adresse: Adresse;
    numPhone: number;
    iconDist: boolean;
    iconLibreService: boolean;

    constructor() {
        this.name = '';
        this.adresse = new Adresse();
        this.numPhone = 0;
        this.iconDist = false;
        this.iconLibreService = false;

    }
}

export class Adresse {
    rue?: string;
    codePostal?: number;
    ville?: string;
    constructor() {
        this.rue = "";
        this.codePostal = 0;
        this.ville = "";
    }

}

