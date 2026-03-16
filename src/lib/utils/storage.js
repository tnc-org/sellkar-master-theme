export const saveStoreId = (id) => localStorage.setItem("storeId", id);
export const getStoreId = () => localStorage.getItem("storeId");

export const saveToken = (token) => localStorage.setItem("token", token);
export const getToken = () => localStorage.getItem("token");

export const clearStorage = ()=> localStorage.clear();