import { CREATE_CLIENT, CLIENT_ALL_REQUEST } from './client.constant';

const initialState = {
  image_url: null,
  name: null,
  surname: null,
  date_of_birth: null,
};

function clientReducer(state: any = initialState, actions: any) {
  switch (actions.type) {
    case CLIENT_ALL_REQUEST:
      return actions.payload;
    case CREATE_CLIENT:
      return actions.payload;
    default:
      return state;
  }
}

export default clientReducer;
