export const storeData = (name, data) => {
  localStorage.setItem(name, data);
};

export const getStoreData = (name) => {
  return localStorage.getItem(name);
};
