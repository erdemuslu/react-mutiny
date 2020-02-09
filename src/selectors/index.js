export const getSelectedItems = (state) => (
  Object.values(state).filter((item) => item.selected && !item.isHidden)
);

export const getUnselectedItems = ([items, value]) => {
  if (value.length === 0) {
    return Object.values(items).filter((item) => !item.selected && !item.isHidden);
  }

  return Object.values(items)
    .filter((item) => !item.selected && item.title.toLowerCase().indexOf(value) > -1);
};
