import {
  ITEMS_GET,
  ITEM_ADD,
  ITEM_HIDE,
  ITEM_MAKE_SELECTED,
  INPUT_VALUE_SET,
  INPUT_STATUS_UPDATE,
  TOGGLE_LIST,
  TOGGLE_MENU,
  ITEM_UPDATE,
  ERROR_SHOW,
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
          [action.payload.selector]: action.payload,
        },
      };
    case ITEM_MAKE_SELECTED:
      return {
        ...state,
        items: {
          ...state.items,
          [action.payload.selector]: {
            ...state.items[action.payload.selector],
            selected: !state.items[action.payload.selector].selected,
          },
        },
      };
    case ITEM_HIDE:
      return {
        ...state,
        items: {
          ...state.items,
          [action.payload.selector]: {
            ...state.items[action.payload.selector],
            isHidden: true,
          },
        },
      };
    case ITEM_UPDATE:
      return {
        ...state,
        items: {
          ...state.items,
          [action.payload.selector]: {
            ...state.items[action.payload.selector],
            color: action.payload.color || state.items[action.payload.selector].color,
            title: action.payload.title || state.items[action.payload.selector].title,
          },
        },
      };
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
            isForceFocus: action.payload.isForceFocus,
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
    case TOGGLE_MENU:
      return {
        ...state,
        menu: {
          ...state.menu,
          isOpened: action.payload.isOpened,
          selector: action.payload.selector,
        },
      };
    case ERROR_SHOW:
      return {
        ...state,
        list: {
          ...state.list,
          isTagExist: action.payload,
        },
      };
    default:
      return state;
  }
}
