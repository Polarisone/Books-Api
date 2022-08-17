const axios = require('axios');
const { expect } = require('chai');
const booksApi = require('../Api Framework files/api-search-feature')

describe('Get books by id', async function(){
    it('should find a book by using its ID',async function(){
     const book1 = await booksApi.getRandomBook();

     expect(booksApi.status).to.equal(200);

    });
});







