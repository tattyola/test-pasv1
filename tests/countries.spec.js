import {expect} from 'chai';
import CountriesHelper from '../helpers/countries.helper';


describe('country codes', function () {
    const countriesHelper = new CountriesHelper();
    before(async function () {
        await countriesHelper.get();
    });

    it('response status code is 200', async function () {
        expect(countriesHelper.response.statusCode).to.eq(200);
    });

    it('response contains an array with at least one item', async function () {
        expect(countriesHelper.response.body.length).to.at.least(1);
    });

    it('elements of array in response are string', async function () {
        for (let countryCode of countriesHelper.response.body) {
            expect(countryCode).to.be.a('string');
        };
    });
});