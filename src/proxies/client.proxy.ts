import axios from 'axios';

class ClientProxy {
  async getListClients() {
    const { data } = await axios.get('/client/list');
    return data.data;
  }

  async getAverageAge() {
    const { data } = await axios.get('/client/averageAge');
    return data.data;
  }

  async createClient(model: any) {
    const { data } = await axios.post('/client/create', model);
    return data.data;
  }
}

export default new ClientProxy();
