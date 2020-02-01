import {
  ITEMS_GET,
  ITEM_ADD,
  SELECTED_ITEMS_WIDTH,
} from './types';

export const createInitial = (payload) => ({
  type: ITEMS_GET,
  payload,
});

export const addItem = (payload) => ({
  type: ITEM_ADD,
  payload,
});

export const setSelectedItemsWrapperWidth = (payload) => ({
  type: SELECTED_ITEMS_WIDTH,
  payload,
});
