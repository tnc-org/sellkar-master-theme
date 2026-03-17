import axiosInstance from "./axiosInstance";


// 1. SIGNUP
export const signup = (data)=>
    axiosInstance.post("/api/v1/signup", data);

// 2. VERIFY EMAIL OTP
export const verifyEmailOtp = (data)=>
    axiosInstance.post("/api/v1/verify-email-otp", data);

// 3. VERIFY EMAIL COMPLETE
export const verifyEmailComplete = (data)=>
    axiosInstance.post("/api/v1/verify-email-complete", data);

// 4. LOGIN
export const emailLogin = (data)=>
    axiosInstance.post("/api/v1/email-login", data );

// 5. GOOGLE LOGIN
export const googleLogin = (data)=>
    axiosInstance.post("/api/v1/google-login", data);

// 6.FACEBOOK LOGIN
export const facebookLogin = (data)=>
    axiosInstance.post("/api/v1/facebook-login", data);

// 7. FORGOT PASSWORD SEND EMAIL
export const forgotPasswordEmail = (data)=>
    axiosInstance.post("/api/v1/forgot-password-email", data);

// 8 FORGOT PASSWORD VERIFY OTP
export const forgotPasswordVerifyOtp = (data)=>
    axiosInstance.post("/api/v1/forgot-password-verify-otp", data);

// 9. RESET PASSWORD
export const resetPassword = (data)=>
    axiosInstance.post("/api/v1/reset-password", data);

// 10. LOGOUT
export const logout = () =>
    axiosInstance.post("/api/v1/logout");



