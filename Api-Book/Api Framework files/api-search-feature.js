"use strict";
const client = require('./api-insomnia');



class Randombook {
    async getRandomBook(token){
        const response = await client.get('Books/random', token);

        return response;
    }

    async getBookById(){
        const response = await client.get('Books/random', token);

        return response;
    }
    async getBookByName(){
    const response = await client.get('Books/random', token);

    return response;
    }
}
module.exports = new Randombook();
