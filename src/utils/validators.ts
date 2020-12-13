export const isISSN = (x: string | null | undefined): boolean => {
  if (!x) return false;
  return /^[0-9]{4}-[0-9]{3}[0-9xX]$/.test(x);
};
export const isCN = (x: string | null | undefined): boolean => {
  if (!x) return false;
  return /^[0-9]{2}-[0-9]{4}(\/[a-zA-Z]{1,2})?$/.test(x);
};
