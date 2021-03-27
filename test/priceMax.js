const chai = require('chai');
const axios = require('axios');

const { expect } = chai;
const apiUrl = 'https://kmadrugstore.herokuapp.com/api/v1';
const api = axios.create({ baseURL: apiUrl });
const url = '/price-max';

describe(url, () => {
  it('result should be a number', () => api.get(url)
    .then(({ data }) => expect(typeof data).to.equal('number')));
});
