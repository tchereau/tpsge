//  (hérite de `Personne`): Avec des attributs spécifiques tels que matricule, département, poste, salaire.
import { Personne } from "./personne.lib";
export class Salarie extends Personne {
    private _matricule: string;
    private _departement: string;
    private _poste: string;
    private _salaire: number;

    constructor(nom: string, prenom: string, adresse: string, telephone: number, matricule: string, departement: string, poste: string, salaire: number){
        super(nom, prenom, adresse, telephone);
        this._matricule = matricule;
        this._departement = departement;
        this._poste = poste;
        this._salaire = salaire;
    }

    public get matricule(): string {
        return this._matricule;
    }
    public set matricule(value: string) {
        this._matricule = value;
    }
    public get departement(): string {
        return this._departement;
    }
    public set departement(value: string) {
        this._departement = value;
    }
    public get poste(): string {
        return this._poste;
    }
    public set poste(value: string) {
        this._poste = value;
    }
    public get salaire(): number {
        return this._salaire;
    }
    public set salaire(value: number) {
        this._salaire = value;
    }
    
}