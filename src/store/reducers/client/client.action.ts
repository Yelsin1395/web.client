import { CREATE_CLIENT, CLIENT_ALL_REQUEST } from './client.constant';

interface IClient {
  id?: string;
  image_url: string;
  name: string;
  surname: string;
  age?: number;
  date_of_birth: string;
}

export const getAllClient = (data: IClient[]) => ({
  type: CLIENT_ALL_REQUEST,
  payload: data,
});

export const createClient = (data: IClient) => ({
  type: CREATE_CLIENT,
  payload: {
    image_url: data.image_url,
    name: data.name,
    surname: data.surname,
    date_of_birth: data.date_of_birth,
  },
});
