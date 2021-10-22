import { expect } from 'chai';
import CasesHelper from '../helpers/cases.helper';
import CountriesHelper from '../helpers/countries.helper';

describe('country codes', function () {
    const countriesHelper = new CountriesHelper();
    const casesHelper = new CasesHelper();
    let countryCode;

    before(async function () {
        await countriesHelper.get();
        countryCode = countriesHelper.response.body[Math.floor(Math.random() * countriesHelper.response.body.length)];
        await casesHelper.get(countryCode);
    });

    it('response status code is 200', async function () {
        expect(casesHelper.response.statusCode).to.eq(200);
    });

    it('response contains an array with at least one item', async function () {
        expect(casesHelper.response.body.length).to.at.least(1);
    });

    it('response has randomly chosen country code', async function () {  //response has an array of strings
        for (let casesData of casesHelper.response.body) {
            expect(casesData['Country_code']).to.eq(countryCode);
        };
    });
});