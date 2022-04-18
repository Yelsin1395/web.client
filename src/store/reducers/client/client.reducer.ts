import { CLIENT_ALL_REQUEST } from './client.constant';

export interface IClient {
  id?: string;
  image_url: string;
  name: string;
  surname: string;
  age?: number;
  date_of_birth: string;
}

const initialState: IClient[] = [];

function clientReducer(state: IClient[] = initialState, actions: any) {
  switch (actions.type) {
    case CLIENT_ALL_REQUEST:
      return actions.payload;
    default:
      return state;
  }
}

export default clientReducer;
