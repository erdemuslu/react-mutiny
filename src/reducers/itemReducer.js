import {
  ITEMS_GET,
  SELECTED_ITEMS_WIDTH,
} from '../actions/types';

export default function itemReducer(state, action) {
  switch (action.type) {
    case ITEMS_GET:
      return { ...state, items: action.payload };
    case SELECTED_ITEMS_WIDTH:
      return { ...state, itemProps: { ...state.itemProps, width: action.payload } };
    default:
      return state;
  }
}
