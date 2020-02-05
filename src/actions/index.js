import {
  ITEMS_GET,
  ITEM_ADD,
  INPUT_VALUE_SET,
  INPUT_STATUS_UPDATE,
  TOGGLE_LIST,
  TOGGLE_MENU,
  ITEM_UPDATE,
} from './types';

export const createInitial = (payload) => ({
  type: ITEMS_GET,
  payload,
});

export const addItem = (payload) => ({
  type: ITEM_ADD,
  payload,
});

export const updateItem = (payload) => ({
  type: ITEM_UPDATE,
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

export const toggleList = (payload) => ({
  type: TOGGLE_LIST,
  payload,
});

export const toggleMenu = (payload) => ({
  type: TOGGLE_MENU,
  payload,
});
