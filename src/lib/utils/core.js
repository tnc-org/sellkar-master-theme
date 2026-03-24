export const BaseUrl = "http://localhost:5002";


export const firstNamePattern = /^[a-zA-Z0-9 !@#$%^&*()_+{}\[\]:;<>,.?~\\/-]{2,15}$/;
export const lastNamePattern = /^[a-zA-Z0-9 !@#$%^&*()_+{}\[\]:;<>,.?~\\/-]{2,15}$/;
export const storeNamePattern = /^[a-zA-Z0-9 !@#$%^&*()_+{}\[\]:;<>,.?~\\/-]{2,15}$/;
export const emailPattern = /^[a-zA-Z0-9!#$%&'*+-/=?^_`{|}~]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
export const passwordPattern = /^(?=.*[a-zA-Z])(?=.*\d)(?!.*\s{2})[a-zA-Z\d!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]{8,24}$/;
export const otpPattern = /^[a-zA-Z0-9]{6}$/
export const cnicPattern = /^[0-9]{13}$/
// export const phoneNumberPattern = /^\+(?:[0-9]?){6,14}[0-9]$/; // international phone numbers
export const phoneNumberPattern = /^\+\d{12}$/;
export const addressPattern = /^.{2,1000}$/
export const postalCodePattern = /^[A-Za-z0-9][A-Za-z0-9\s\-]*[A-Za-z0-9]$/
export const domainPattern = /^https:\/\/(?:[a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}$/
