const chai = require('chai');
const axios = require('axios');

const { expect } = chai;
const apiUrl = 'https://kmadrugstore.herokuapp.com/api/v1';
const api = axios.create({ baseURL: apiUrl });
const url = '/categories';

describe.only(url, () => {
  it('should get a list of categories', () => api.get(url)
    .then(({ data }) => expect(Array.isArray(data)).to.equal(true)));

  it('result should be of a correct format', () => api.get(url)
    .then(({ data }) => expect(data[0]).to.have.keys('id', 'title')));
});
