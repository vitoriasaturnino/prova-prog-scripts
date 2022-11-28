import axios, { AxiosInstance } from 'axios';

const api: AxiosInstance = axios.create({
  baseURL:'htts://servicodados.ibge.gov.br/api/docs/nomes?versao=2',
  headers: {
    'Content-Type': 'application/json',
  }
});

export default api;
