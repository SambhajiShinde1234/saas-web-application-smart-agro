const capitalizeFirstLetter = (string) => {
  if (!string) return '';
  const result = string.charAt(0).toUpperCase() + string.slice(1);
  return result;
};

export default capitalizeFirstLetter;
