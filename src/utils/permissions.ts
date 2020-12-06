const BORROW = 1;
const EDIT = 2;



export const setEdit = (level: number):number => {
  return level | (1 << EDIT);
}
export const unsetEdit = (level: number):number => {
  return level & (-1 ^ (1 << EDIT));
}
export const testEdit = (level: number):boolean => {
  return ((level >> EDIT) & 1) == 1;
}

export const setBorrow = (level: number):number => {
  return level | (1 << BORROW);
}
export const unsetBorrow = (level: number):number => {
  return level & (-1 ^ (1 << BORROW));
}
export const testBorrow = (level: number):boolean => {
  return ((level >> BORROW) & 1) == 1;
}

