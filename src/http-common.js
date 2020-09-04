import axios from 'axios';

//Define a URL base da origem para consumo do servico
export default axios.create({
  baseURL: process.env.BASE_URL || 'https://meu-desafio-api.herokuapp.com/',
  headers: {
    'Content-type': 'application/json',
  },
});
