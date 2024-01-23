//Gérez des listes de salariés, clients, fournisseurs, produits et achats, et implémentez des méthodes pour les gérer. Avec des attributs spécifiques tels que nom, SIRET, adresse.
import { Personne } from "./personne.lib";
import { Produit } from "./produit.lib";
import { Client } from "./client.lib";
import { Achat } from "./achat.lib";
import { Fournisseur } from "./fournisseur.lib";
import { Salarie } from "./salarie.lib";

export class Entreprise {
    private _nom: string;
    private _SIRET: number;
    private _adresse: string;
    private _salaries: Salarie[];
    private _clients: Client[];
    private _fournisseurs: Fournisseur[];
    private _produits: Produit[];
    private _achats: Achat[];

    constructor(nom: string, SIRET: number, adresse: string){
        this._nom = nom;
        this._SIRET = SIRET;
        this._adresse = adresse;
        this._salaries = [];
        this._clients = [];
        this._fournisseurs = [];
        this._produits = [];
        this._achats = [];
    }

    public get nom(): string {
        return this._nom;
    }
    public set nom(value: string) {
        this._nom = value;
    }
    public get SIRET(): number {
        return this._SIRET;
    }
    public set SIRET(value: number) {
        this._SIRET = value;
    }
    public get adresse(): string {
        return this._adresse;
    }
    public set adresse(value: string) {
        this._adresse = value;
    }
    public get salaries(): Salarie[] {
        return this._salaries;
    }
    public set salaries(value: Salarie[]) {
        this._salaries = value;
    }
    public get clients(): Client[] {
        return this._clients;
    }
    public set clients(value: Client[]) {
        this._clients = value;
    }
    public get fournisseurs(): Fournisseur[] {
        return this._fournisseurs;
    }
    public set fournisseurs(value: Fournisseur[]) {
        this._fournisseurs = value;
    }
    public get produits(): Produit[] {
        return this._produits;
    }
    public set produits(value: Produit[]) {
        this._produits = value;
    }
    public get achats(): Achat[] {
        return this._achats;
    }
    public set achats(value: Achat[]) {
        this._achats = value;
    }
    public addSalarie(value: Salarie): void {
        this._salaries.push(value);
    }
    public addClient(value: Client): void {
        this._clients.push(value);
    }
    public addFournisseur(value: Fournisseur): void {
        this._fournisseurs.push(value);
    }
    public addProduit(value: Produit): void {
        this._produits.push(value);
    }
    public addAchat(value: Achat): void {
        this._achats.push(value);
    }
    public removeSalarie(value: Salarie): void {
        this._salaries.splice(this._salaries.indexOf(value), 1);
    }
    public removeClient(value: Client): void {
        this._clients.splice(this._clients.indexOf(value), 1);
    }
    public removeFournisseur(value: Fournisseur): void {
        this._fournisseurs.splice(this._fournisseurs.indexOf(value), 1);
    }
    public removeProduit(value: Produit): void {
        this._produits.splice(this._produits.indexOf(value), 1);
    }
    public removeAchat(value: Achat): void {
        this._achats.splice(this._achats.indexOf(value), 1);
    }
    public findSalarie(value: Salarie): number {
        return this._salaries.indexOf(value);
    }
    public findClient(value: Client): number {
        return this._clients.indexOf(value);
    }
    public findFournisseur(value: Fournisseur): number {
        return this._fournisseurs.indexOf(value);
    }
    public findProduit(value: Produit): number {
        return this._produits.indexOf(value);
    }
    public findAchat(value: Achat): number {
        return this._achats.indexOf(value);
    }
    public findSalarieByNom(value: string): Salarie {
        return this._salaries.find((salarie) => salarie.nom === value);
    }
    public findClientByNom(value: string): Client {
        return this._clients.find((client) => client.nom === value);
    }
    public findFournisseurByNom(value: string): Fournisseur {
        return this._fournisseurs.find((fournisseur) => fournisseur.nom === value);
    }
    public findProduitByNom(value: string): Produit {
        return this._produits.find((produit) => produit.nom === value);
    }
    public findAchatByNumero(value: number): Achat {
        return this._achats.find((achat) => achat.numeroAchat === value);
    }
    public findSalarieByPrenom(value: string): Salarie {
        return this._salaries.find((salarie) => salarie.prenom === value);
    }
    public findClientByPrenom(value: string): Client {
        return this._clients.find((client) => client.prenom === value);
    }
    public findFournisseurByPrenom(value: string): Fournisseur {
        return this._fournisseurs.find((fournisseur) => fournisseur.prenom === value);
    }
    public findProduitByPrenom(value: string): Produit {
        return this._produits.find((produit) => produit.nom === value);
    }
    public findAchatByDate(value: Date): Achat {
        return this._achats.find((achat) => achat.dateAchat === value);
    }
    public findSalarieByAdresse(value: string): Salarie {
        return this._salaries.find((salarie) => salarie.adresse === value);
    }
    public findClientByAdresse(value: string): Client {
        return this._clients.find((client) => client.adresse === value);
    }
    public findFournisseurByAdresse(value: string): Fournisseur {
        return this._fournisseurs.find((fournisseur) => fournisseur.adresse === value);
    }
}
