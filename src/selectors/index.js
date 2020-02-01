export const getSelectedItems = (state = []) => state.filter((item) => item.selected);

export const getUnselectedItems = (state) => state.filter((item) => !item.selected);
