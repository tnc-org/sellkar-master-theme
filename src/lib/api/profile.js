// // // lib/api/profile.js
// // import axiosInstance from './axiosInstance';

// // // ── GET ──────────────────────────────────────────────
// // // Get current user profile
// // export const getProfile = () =>
// //   axiosInstance.get('/api/v1/profile');

// // // ── PERSONAL INFO ────────────────────────────────────
// // // Update personal info (firstName, lastName, dateOfBirth, etc.)
// // export const updatePersonalInfo = (data) =>
// //   axiosInstance.put('/api/v1/profile', data);

// // // ── EMAIL ────────────────────────────────────────────
// // // Step 1: Send OTP to new email
// // export const sendEmailOtp = (data) =>
// //   axiosInstance.post('/api/v1/verify-email-otp', data);   // { email }

// // // Step 2: Verify OTP and update email
// // export const verifyEmailComplete = (data) =>
// //   axiosInstance.post('/api/v1/verify-email-complete', data); // { email, otpCode }

// // // ── PRIMARY PHONE ────────────────────────────────────
// // // Step 1: Send OTP to new primary phone
// // export const sendPhoneOtp = (data) =>
// //   axiosInstance.post('/api/v1/profile-phone', data);       // { phoneNumber }

// // // Step 2: Verify OTP and update primary phone
// // export const verifyPhoneComplete = (data) =>
// //   axiosInstance.post('/api/v1/profile-phone-complete', data); // { phoneNumber, otpCode }

// // // ── ALTERNATE / HOME PHONE ───────────────────────────
// // // Step 1: Send OTP to alternate phone
// // export const sendPhoneHomeOtp = (data) =>
// //   axiosInstance.post('/api/v1/profile-phone-home', data);  // { phoneNumber }

// // // Step 2: Verify OTP and update alternate phone
// // export const verifyPhoneHomeComplete = (data) =>
// //   axiosInstance.post('/api/v1/profile-phone-home-complete', data); // { phoneNumber, otpCode }

// // // ── ADDRESS ──────────────────────────────────────────
// // // Update address (country, city, postalCode)
// // export const updateAddress = (data) =>
// //   axiosInstance.put('/api/v1/profile-address', data);

// // // ── PASSWORD ─────────────────────────────────────────
// // // Change password
// // export const changePassword = (data) =>
// //   axiosInstance.post('/api/v1/change-password', data);     // { oldPassword, newPassword }

// // // ── PREFERENCES ──────────────────────────────────────
// // // Update preferences (currency, pushNotifications, is2faEnabled)
// // export const updatePreferences = (data) =>
// //   axiosInstance.put('/api/v1/profile-preferences', data);

// // // ── PROFILE PHOTO ────────────────────────────────────
// // // Upload profile photo (FormData with "photo" field)
// // export const updateProfilePhoto = (formData) =>
// //   axiosInstance.put('/api/v1/profile-photo', formData, {
// //     headers: { 'Content-Type': 'multipart/form-data' },
// //   });













// // lib/api/profile.js
// import axiosInstance from './axiosInstance';

// // GET profile
// export const getProfile = () =>
//   axiosInstance.get('/api/v1/profile');

// // Update profile (firstName, lastName, pushNotifications, currencyId)
// export const updateProfile = (data) =>
//   axiosInstance.put('/api/v1/profile', data);

// // Update profile picture — FormData with field name "file"
// export const updateProfilePicture = (formData) =>
//   axiosInstance.put('/api/v1/profile-picture', formData, {
//     headers: { 'Content-Type': 'multipart/form-data' },
//   });

// // Update password
// export const updatePassword = (data) =>
//   axiosInstance.put('/api/v1/password', data); // { oldPassword, newPassword }

// // Update address
// export const updateAddress = (data) =>
//   axiosInstance.put('/api/v1/address', data); // { country, state, city, street, postal_code }

// // ── EMAIL ─────────────────────────────────────────────────────────────────────
// export const sendProfileEmailOtp = (data) =>
//   axiosInstance.post('/api/v1/profile-email-otp', data); // { email }

// export const completeProfileEmail = (data) =>
//   axiosInstance.post('/api/v1/profile-email-complete', data); // { email, otpCode }

// // ── PRIMARY PHONE ─────────────────────────────────────────────────────────────
// export const sendProfilePhoneOtp = (data) =>
//   axiosInstance.post('/api/v1/profile-phone-otp', data); // { phoneNumber }

// export const completeProfilePhone = (data) =>
//   axiosInstance.post('/api/v1/profile-phone-complete', data); // { phoneNumber, otpCode }

// // ── ALTERNATE / HOME PHONE ────────────────────────────────────────────────────
// export const sendProfilePhoneHomeOtp = (data) =>
//   axiosInstance.post('/api/v1/profile-phone-home-otp', data); // { phoneNumber }

// export const completeProfilePhoneHome = (data) =>
//   axiosInstance.post('/api/v1/profile-phone-home-complete', data); // { phoneNumber, otpCode }

// export const getCurrencies = () =>
//   axiosInstance.get('/api/v1/ua/currencies');









// lib/api/profile.js
import axiosInstance from './axiosInstance';

// GET profile
export const getProfile = () =>
  axiosInstance.get('/api/v1/profile');

// GET all currencies (for dropdown)
export const getCurrencies = () =>
  axiosInstance.get('/api/v1/ua/currencies');

// Update profile (firstName, lastName, pushNotifications, currencyId)
export const updateProfile = (data) =>
  axiosInstance.put('/api/v1/profile', data);

// Update profile picture — FormData with field name "file"
export const updateProfilePicture = (formData) =>
  axiosInstance.put('/api/v1/profile-picture', formData, {
    headers: { 'Content-Type': 'multipart/form-data' },
  });

// Update password
export const updatePassword = (data) =>
  axiosInstance.put('/api/v1/password', data); // { oldPassword, newPassword }

// Update address
export const updateAddress = (data) =>
  axiosInstance.put('/api/v1/address', data); // { country, state, city, street, postal_code }

// ── EMAIL ─────────────────────────────────────────────────────────────────────
export const sendProfileEmailOtp = (data) =>
  axiosInstance.post('/api/v1/profile-email-otp', data); // { email }

export const completeProfileEmail = (data) =>
  axiosInstance.post('/api/v1/profile-email-complete', data); // { email, otpCode }

// ── PRIMARY PHONE ─────────────────────────────────────────────────────────────
export const sendProfilePhoneOtp = (data) =>
  axiosInstance.post('/api/v1/profile-phone-otp', data); // { phoneNumber }

export const completeProfilePhone = (data) =>
  axiosInstance.post('/api/v1/profile-phone-complete', data); // { phoneNumber, otpCode }

// ── ALTERNATE / HOME PHONE ────────────────────────────────────────────────────
export const sendProfilePhoneHomeOtp = (data) =>
  axiosInstance.post('/api/v1/profile-phone-home-otp', data); // { phoneNumber }

export const completeProfilePhoneHome = (data) =>
  axiosInstance.post('/api/v1/profile-phone-home-complete', data); // { phoneNumber, otpCode }