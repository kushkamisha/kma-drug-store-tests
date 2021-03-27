const chai = require('chai');
const axios = require('axios');

const { expect } = chai;
const apiUrl = 'https://kmadrugstore.herokuapp.com/api/v1';
const api = axios.create({ baseURL: apiUrl });

describe('/goods-short/{id}', () => {
  it('should get a good', () => api.get('/goods-short/1')
    .then(({ data }) => {
      expect(data).to.have.keys('id', 'name', 'price', 'numAvailable', 'numInPack', 'dose', 'photo');
    }));

  it('should get a good', () => axios.get('/goods-short/9999999')
    .catch((err) => {
      expect(err.code).to.equal('ECONNREFUSED');
    }));
});
