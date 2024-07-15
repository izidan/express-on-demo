import mongoose from 'mongoose'

let schema = new mongoose.Schema({
    _id: { type: String, default: function () { return this['ISO3166-1-Alpha-3'] || this.M49 } },
    name: { type: String, alias: 'CLDR display name' },
    '@xsi:type': { type: String, default: 'Country' },
    capital: { type: String, alias: 'Capital' },
    continent: { type: String, alias: 'Continent' },
    currency: { type: [String], alias: 'ISO4217-currency_alphabetic_code', default: undefined, set: v => v ? v.toString().split(',') : v },
    languages: { type: [String], alias: 'Languages', default: undefined, set: v => v ? v.toString().split(',') : v },
    independent: { type: Object, alias: 'is_independent' },
    'iso.alpha2': { alias: 'ISO3166-1-Alpha-2', type: String },
    'iso.alpha3': { alias: 'ISO3166-1-Alpha-3', type: String },
    'iso.numeric': { alias: 'ISO3166-1-numeric', type: Number },
    'iso.currency.name': { type: String, alias: 'ISO4217-currency_name' },
    'iso.currency.minorUnit': { type: String, alias: 'ISO4217-currency_minor_unit' },
    'iso.currency.countryName': { type: String, alias: 'ISO4217-currency_country_name' },
    'iso.currency.numericCode': { type: String, alias: 'ISO4217-currency_numeric_code' },
    'region.code': { type: Number, alias: 'Region Code' },
    'region.name': { type: String, alias: 'Region Name' },
    'region.subCode': { type: Number, alias: 'Sub-region Code' },
    'region.subName': { type: String, alias: 'Sub-region Name' },
    'region.intermediateCode': { type: Number, alias: 'Intermediate Region Code' },
    'region.intermediateName': { type: String, alias: 'Intermediate Region Name' },
    'names.official.ar': { type: String, alias: 'official_name_ar' },
    'names.official.cn': { type: String, alias: 'official_name_cn' },
    'names.official.en': { type: String, alias: 'official_name_en' },
    'names.official.es': { type: String, alias: 'official_name_es' },
    'names.official.fr': { type: String, alias: 'official_name_fr' },
    'names.official.ru': { type: String, alias: 'official_name_ru' },
    'names.formal.ar': { type: String, alias: 'UNTERM Arabic Formal' },
    'names.formal.cn': { type: String, alias: 'UNTERM Chinese Formal' },
    'names.formal.en': { type: String, alias: 'UNTERM English Formal' },
    'names.formal.fr': { type: String, alias: 'UNTERM French Formal' },
    'names.formal.ru': { type: String, alias: 'UNTERM Russian Formal' },
    'names.formal.es': { type: String, alias: 'UNTERM Spanish Formal' },
    'names.short.ar': { type: String, alias: 'UNTERM Arabic Short' },
    'names.short.cn': { type: String, alias: 'UNTERM Chinese Short' },
    'names.short.en': { type: String, alias: 'UNTERM English Short' },
    'names.short.fr': { type: String, alias: 'UNTERM French Short' },
    'names.short.ru': { type: String, alias: 'UNTERM Russian Short' },
    'names.short.es': { type: String, alias: 'UNTERM Spanish Short' },
    m49: { type: Number, alias: 'M49' },
});

const Model = mongoose.model('country', schema, 'countries');
export default Model;