export const getSelectedItems = (state) => (
  Object.values(state).filter((item) => item.selected)
);

export const getUnselectedItems = (state) => Object.values(state).filter((item) => !item.selected);
