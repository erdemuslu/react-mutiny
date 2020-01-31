import {
  ITEMS_GET,
  ITEM_ADD,
} from './types';

export const createInitial = (payload) => ({
  type: ITEMS_GET,
  payload,
});

export const addItem = (payload) => ({
  type: ITEM_ADD,
  payload,
});
