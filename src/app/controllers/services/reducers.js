import { GET_DATA, GET_DATA_SUCCESS } from './constants';

const initialState = {};

const data = (state = initialState, action) => {
  const { type, data } = action;

  if (type === GET_DATA) {
    return {
      ...state,
      pending: true,
    };
  }

  if (type === GET_DATA_SUCCESS) {
    const { items, _links } = data;

    const nextLink = _links && _links.next.href;

    return {
      ...state,
      nextLink,
      pending: false,
      items: [...(state.items || []), ...items],
    };
  }

  return state;
};

export default data;
