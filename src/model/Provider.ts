export class Provider {
    private _userId: Number;
    private _providerId: Number;
    private _personId: Number;
    private _name: String;
    private _identifier: String;
    private _creator: Number;
    private _dateCreated: Date;
    private _changedBy: Number;
    private _retired: Number;
    private _dateChanged: Date;
    private _providerRoleId: Number;
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
    public get personId(): Number {
        return this._personId;
    }
    public set personId(value: Number) {
        this._personId = value;
    }
    public get name(): String {
        return this._name;
    }
    public set name(value: String) {
        this._name = value;
    }
    public get identifier(): String {
        return this._identifier;
    }
    public set identifier(value: String) {
        this._identifier = value;
    }
    public get creator(): Number {
        return this._creator;
    }
    public set creator(value: Number) {
        this._creator = value;
    }
    public get dateCreated(): Date {
        return this._dateCreated;
    }
    public set dateCreated(value: Date) {
        this._dateCreated = value;
    }
    public get changedBy(): Number {
        return this._changedBy;
    }
    public set changedBy(value: Number) {
        this._changedBy = value;
    }
    public get dateChanged(): Date {
        return this._dateChanged;
    }
    public set dateChanged(value: Date) {
        this._dateChanged = value;
    }
    public get retired(): Number {
        return this._retired;
    }
    public set retired(value: Number) {
        this._retired = value;
    }
    private _retiredBy: Number;
    public get retiredBy(): Number {
        return this._retiredBy;
    }
    public set retiredBy(value: Number) {
        this._retiredBy = value;
    }
    private _dateRetired: Number;
    public get dateRetired(): Number {
        return this._dateRetired;
    }
    public set dateRetired(value: Number) {
        this._dateRetired = value;
    }
    private _retriedReseason: String;
    public get retriedReseason(): String {
        return this._retriedReseason;
    }
    public set retriedReseason(value: String) {
        this._retriedReseason = value;
    }
    private _uuid: String;
    public get uuid(): String {
        return this._uuid;
    }
    public set uuid(value: String) {
        this._uuid = value;
    }
    public get providerRoleId(): Number {
        return this._providerRoleId;
    }
    public set providerRoleId(value: Number) {
        this._providerRoleId = value;
    }
}
