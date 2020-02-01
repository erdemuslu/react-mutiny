import {
  ITEMS_GET,
  ITEM_ADD,
  // SELECTED_ITEMS_WIDTH,
  INPUT_VALUE_SET,
  INPUT_STATUS_UPDATE,
} from './types';

export const createInitial = (payload) => ({
  type: ITEMS_GET,
  payload,
});

export const addItem = (payload) => ({
  type: ITEM_ADD,
  payload,
});

export const setInputValue = (payload) => ({
  type: INPUT_VALUE_SET,
  payload,
});

export const updateInputStatus = (payload) => ({
  type: INPUT_STATUS_UPDATE,
  payload,
});

// export const setSelectedItemsWrapperWidth = (payload) => ({
//   type: SELECTED_ITEMS_WIDTH,
//   payload,
// });
