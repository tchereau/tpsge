import { Produit } from "./produit.lib";
import { Client } from "./client.lib";
export class Achat {
    private _numeroAchat: number;
    private _produitsAchetes: Produit[];
    private _client: Client;
    private _dateAchat: Date;

    constructor(numeroAchat: number, produitsAchetes: Produit[], client: Client, dateAchat: Date){
        this._numeroAchat = numeroAchat;
        this._produitsAchetes = produitsAchetes;
        this._client = client;
        this._dateAchat = dateAchat;
    }

    public get numeroAchat(): number {
        return this._numeroAchat;
    }
    public set numeroAchat(value: number) {
        this._numeroAchat = value;
    }
    public get produitsAchetes(): Produit[] {
        return this._produitsAchetes;
    }
    public set produitsAchetes(value: Produit[]) {
        this._produitsAchetes = value;
    }
    public get client(): Client {
        return this._client;
    }
    public set client(value: Client) {
        this._client = value;
    }
    public get dateAchat(): Date {
        return this._dateAchat;
    }
    public set dateAchat(value: Date) {
        this._dateAchat = value;
    }
}