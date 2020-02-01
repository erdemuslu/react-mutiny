export const getSelectedItems = (state) => (
  Object.values(state).filter((item) => item.selected)
);

export const getUnselectedItems = ([items, value]) => {
  if (value.length === 0) {
    return Object.values(items).filter((item) => !item.selected);
  }

  return Object.values(items)
    .filter((item) => !item.selected && item.title.toLowerCase().indexOf(value) > -1);
};
