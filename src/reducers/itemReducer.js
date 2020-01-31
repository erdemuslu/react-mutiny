import {
  ITEMS_GET,
} from '../actions/types';

export default function itemReducer(state, action) {
  switch (action.type) {
    case ITEMS_GET:
      return action.payload;
    default:
      return state;
  }
}
