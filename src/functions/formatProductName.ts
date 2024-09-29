export const formatProductName = (name: string): string => {
  return name.trim().toLowerCase().replace(/\s+/g, '-');
};
