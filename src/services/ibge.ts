import api from './api';
import { Props } from '../types';

class IbgeServices {
  async get(name: string):Promise<Props>{
    const { data } = await api.get(`/ ${name}`);

    return data;
  }
}

export default new IbgeServices(); 