const chai = require('chai');
const axios = require('axios');

const { expect } = chai;
const apiUrl = 'https://kmadrugstore.herokuapp.com/api/v1';
const api = axios.create({ baseURL: apiUrl });

describe.only('/goods', () => {
  it('should get a list of goods', () => api({
    url: '/goods',
    params: {
      page: 1,
      'page-size': 3,
    },
  })
    .then(({ data }) => expect(data.goods.length).to.equal(3)));

  it('should get no goods on a huge page number', () => api({
    url: '/goods',
    params: {
      page: 99999,
      'page-size': 3,
    },
  })
    .then(({ data }) => expect(data.goods.length).to.equal(0)));
});
