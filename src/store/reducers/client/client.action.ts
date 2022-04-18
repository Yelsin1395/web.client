import { CLIENT_ALL_REQUEST } from './client.constant';
import { IClient } from './client.reducer';

export const getAllClient = (data: IClient[]) => ({
  type: CLIENT_ALL_REQUEST,
  payload: data,
});
