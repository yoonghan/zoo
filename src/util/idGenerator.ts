export const formatStringAsId = (unformattedId: string) => {
  return unformattedId.trim().toLowerCase().replace(/(\s)+/, "-");
};
