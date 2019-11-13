export class PersonName{
    private _personNameId: Number
    public get personNameId(): Number {
        return this._personNameId;
    }
    public set personNameId(value: Number) {
        this._personNameId = value;
    }
    private _preferred: Number;
    public get preferred(): Number {
        return this._preferred;
    }
    public set preferred(value: Number) {
        this._preferred = value;
    }
    private _personId: Number;
    public get personId(): Number {
        return this._personId;
    }
    public set personId(value: Number) {
        this._personId = value;
    }
    private _prefix: String;
    public get prefix(): String {
        return this._prefix;
    }
    public set prefix(value: String) {
        this._prefix = value;
    }
    private _givenName: String;
    public get givenName(): String {
        return this._givenName;
    }
    public set givenName(value: String) {
        this._givenName = value;
    }
    private _middleName: String;
    public get middleName(): String {
        return this._middleName;
    }
    public set middleName(value: String) {
        this._middleName = value;
    }
    private _familyNamePrefix: String;
    public get familyNamePrefix(): String {
        return this._familyNamePrefix;
    }
    public set familyNamePrefix(value: String) {
        this._familyNamePrefix = value;
    }
    private _familyName: String;
    public get familyName(): String {
        return this._familyName;
    }
    public set familyName(value: String) {
        this._familyName = value;
    }
    private _familyName2: String;
    public get familyName2(): String {
        return this._familyName2;
    }
    public set familyName2(value: String) {
        this._familyName2 = value;
    }
    private _familyNameSuffix: String;
    public get familyNameSuffix(): String {
        return this._familyNameSuffix;
    }
    public set familyNameSuffix(value: String) {
        this._familyNameSuffix = value;
    }
    private _degree: String;
    public get degree(): String {
        return this._degree;
    }
    public set degree(value: String) {
        this._degree = value;
    }
    private _creator: Number;
    public get creator(): Number {
        return this._creator;
    }
    public set creator(value: Number) {
        this._creator = value;
    }
    private _dateCreated: Date;
    public get dateCreated(): Date {
        return this._dateCreated;
    }
    public set dateCreated(value: Date) {
        this._dateCreated = value;
    }
    private _voided: Number;
    public get voided(): Number {
        return this._voided;
    }
    public set voided(value: Number) {
        this._voided = value;
    }
    private _voidedBy: Number;
    public get voidedBy(): Number {
        return this._voidedBy;
    }
    public set voidedBy(value: Number) {
        this._voidedBy = value;
    }
    private _dateVoided: Date;
    public get dateVoided(): Date {
        return this._dateVoided;
    }
    public set dateVoided(value: Date) {
        this._dateVoided = value;
    }
    private _voidReason: String;
    public get voidReason(): String {
        return this._voidReason;
    }
    public set voidReason(value: String) {
        this._voidReason = value;
    }
    private _changedBy: Number;
    public get changedBy(): Number {
        return this._changedBy;
    }
    public set changedBy(value: Number) {
        this._changedBy = value;
    }
    private _dateChanged: Date;
    public get dateChanged(): Date {
        return this._dateChanged;
    }
    public set dateChanged(value: Date) {
        this._dateChanged = value;
    }
    private _uuid: Number;
    public get uuid(): Number {
        return this._uuid;
    }
    public set uuid(value: Number) {
        this._uuid = value;
    }
}