import {
  ITEMS_GET,
  ITEM_ADD,
  // SELECTED_ITEMS_WIDTH,
  INPUT_VALUE_SET,
  INPUT_STATUS_UPDATE,
  TOGGLE_LIST,
} from '../actions/types';

export default function itemReducer(state, action) {
  switch (action.type) {
    case ITEMS_GET:
      return { ...state, items: action.payload };
    case ITEM_ADD:
      return {
        ...state,
        items: {
          ...state.items,
          [action.payload.selector]: { ...state.items[action.payload.selector], selected: true },
        },
      };
    // case SELECTED_ITEMS_WIDTH:
    //   return { ...state, itemProps: { ...state.itemProps, width: action.payload } };
    case INPUT_VALUE_SET:
      return { ...state, form: { ...state.form, value: action.payload } };
    case INPUT_STATUS_UPDATE:
      return {
        ...state,
        form: {
          ...state.form,
          inputStatus: {
            ...state.form.inputStatus,
            isFocus: action.payload.isFocus,
            isBlur: action.payload.isBlur,
          },
        },
      };
    case TOGGLE_LIST:
      return {
        ...state,
        list: {
          ...state.list,
          isOpened: action.payload,
        },
      };
    default:
      return state;
  }
}
