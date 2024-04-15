export const formatStringAsId = (unformattedId: string) => {
  return unformattedId.trim().toLowerCase().replaceAll(/(\s)+/g, "-");
};
