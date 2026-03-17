export const saveStoreId = (id) => localStorage.setItem("storeId", id);

export const getStoreId = () => {
  const id = localStorage.getItem("storeId");
  return id && id !== "null" && id !== "undefined" ? id : null;
};

export const saveToken = (token) => localStorage.setItem("token", token);
export const getToken = () => localStorage.getItem("token");

export const clearStorage = ()=> localStorage.clear();


    