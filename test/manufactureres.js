const chai = require('chai');
const axios = require('axios');

const { expect } = chai;
const apiUrl = 'https://kmadrugstore.herokuapp.com/api/v1';
const api = axios.create({ baseURL: apiUrl });
const url = '/manufacturers';

describe.only(url, () => {
  it('should get a list of manufacturers', () => api.get(url)
    .then(({ data }) => expect(Array.isArray(data)).to.equal(true)));
});
