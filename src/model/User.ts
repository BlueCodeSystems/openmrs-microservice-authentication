import { Provider } from "./Provider";
import { PersonName } from "./PersonName";

export default class User{

    private _uuid: String;
    private _display: String;
    private _username: String;
    private _systemId: String;
    private _provider: Provider;
    private _providerId: Number;
    private _userId: Number;
    private _location: Location;
    private _personName: PersonName;
    private _personId: Number;
    
    public get personId(): Number {
        return this._personId;
    }
    public set personId(value: Number) {
        this._personId = value;
    }

    public get personName(): PersonName {
        return this._personName;
    }
    public set personName(value: PersonName) {
        this._personName = value;
    }

    public get location(): Location {
        return this._location;
    }
    public set location(value: Location) {
        this._location = value;
    }
    
    public get userId(): Number {
        return this._userId;
    }
    public set userId(value: Number) {
        this._userId = value;
    }

    public get providerId(): Number {
        return this._providerId;
    }
    public set providerId(value: Number) {
        this._providerId = value;
    }

    public get uuid(): String {
        return this._uuid;
    }
    public set uuid(value: String) {
        this._uuid = value;
    }
    
    public get display(): String {
        return this._display;
    }
    public set display(value: String) {
        this._display = value;
    }
    
    public get username(): String {
        return this._username;
    }
    public set username(value: String) {
        this._username = value;
    }
    
    public get systemId(): String {
        return this._systemId;
    }
    public set systemId(value: String) {
        this._systemId = value;
    }
    
    public get provider(): Provider {
        return this._provider;
    }
    public set provider(value: Provider) {
        this._provider = value;
    }
    
}

