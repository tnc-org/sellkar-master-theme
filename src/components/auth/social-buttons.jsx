// 'use client';

// export function SocialButtons() {
//   return (
//     <div className="flex gap-4 justify-center">
//       {/* Google Button */}
//       <button
//         type="button"
//         className="flex-1 h-12 rounded-lg border-2 border-gray-300 hover:bg-gray-50 transition-colors flex items-center justify-center"
//       >
//         <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
//           <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
//           <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
//           <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
//           <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
//         </svg>
//       </button>

//       {/* Facebook Button */}
//       <button
//         type="button"
//         className="flex-1 h-12 rounded-lg border-2 border-gray-300 hover:bg-gray-50 transition-colors flex items-center justify-center"
//       >
//         <svg className="w-5 h-5" viewBox="0 0 24 24" fill="#1877F2">
//           <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
//         </svg>
//       </button>
//     </div>
//   );
// }







// "use client";
// import { useGoogleLogin } from "@react-oauth/google";
// import { googleLogin, facebookLogin } from "@/lib/api/auth";
// import { saveToken } from "@/lib/utils/storage";

// export default function SocialButtons() {

//   // Google Login
//   const handleGoogleLogin = useGoogleLogin({
//     onSuccess: async (tokenResponse) => {
//       try {
//         const res = await googleLogin({
//           accessToken: tokenResponse.access_token,
//         });

//         const token = res?.data?.data?.token;
//         saveToken(token);
//         document.cookie = `token=${token}; path=/`;
//         window.location.href = "/";

//       } catch (error) {
//         console.log("Google login error:", error?.response?.data);
//       }
//     },
//     onError: () => console.log("Google login failed"),
//   });

//   // Facebook Login
//   const handleFacebookLogin = () => {
//     window.FB.login(async (response) => {
//       if (response.authResponse) {
//         try {
//           const res = await facebookLogin({
//             accessToken: response.authResponse.accessToken,
//           });

//           const token = res?.data?.data?.token;
//           saveToken(token);
//           document.cookie = `token=${token}; path=/`;
//           window.location.href = "/";

//         } catch (error) {
//           console.log("Facebook login error:", error?.response?.data);
//         }
//       }
//     }, { scope: "email" });
//   };

//   return (
//     <div className="flex gap-3">
//       <button
//         type="button"
//         onClick={() => handleGoogleLogin()}
//         className="w-full h-12 border-2 border-gray-300 rounded-lg font-medium text-gray-700 hover:bg-gray-50 transition-colors"
//       >
//         Google
//       </button>

//       <button
//         type="button"
//         onClick={handleFacebookLogin}
//         className="w-full h-12 border-2 border-gray-300 rounded-lg font-medium text-gray-700 hover:bg-gray-50 transition-colors"
//       >
//         Facebook
//       </button>
//     </div>
//   );
// }

















// "use client";
// import { useGoogleLogin } from "@react-oauth/google";
// import { googleLogin, facebookLogin } from "@/lib/api/auth";
// import { saveToken } from "@/lib/utils/storage";

// export default function SocialButtons() {

//   // Google Login
//   const handleGoogleLogin = useGoogleLogin({
//     onSuccess: async (tokenResponse) => {
//       try {
//         const res = await googleLogin({
//           accessToken: tokenResponse.access_token,
//         });

//         const token = res?.data?.data?.token;
//         saveToken(token);
//         document.cookie = `token=${token}; path=/`;
//         window.location.href = "/";

//       } catch (error) {
//         console.log("Google login error:", error?.response?.data);
//       }
//     },
//     onError: () => console.log("Google login failed"),
//   });

//   // Facebook Login
//   const handleFacebookLogin = () => {
//     if (!window.FB) { // ← check if FB SDK loaded
//       console.log("Facebook SDK not loaded");
//       return;
//     }

//     window.FB.login(async (response) => {
//       if (response.authResponse) {
//         try {
//           const res = await facebookLogin({
//             accessToken: response.authResponse.accessToken,
//           });

//           const token = res?.data?.data?.token;
//           saveToken(token);
//           document.cookie = `token=${token}; path=/`;
//           window.location.href = "/";

//         } catch (error) {
//           console.log("Facebook login error:", error?.response?.data);
//         }
//       }
//     }, { scope: "email" });
//   };

//   return (
//     <div className="flex gap-3">

//       {/* Google Button */}
//       <button
//         type="button"
//         onClick={() => handleGoogleLogin()}
//         className="w-full h-12 border-2 border-gray-300 rounded-lg font-medium text-gray-700 hover:bg-gray-50 transition-colors flex items-center justify-center gap-2"
//       >
//         {/* Google Icon */}
//         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className="w-5 h-5">
//           <path fill="#FFC107" d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 12.955 4 4 12.955 4 24s8.955 20 20 20 20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z"/>
//           <path fill="#FF3D00" d="m6.306 14.691 6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 16.318 4 9.656 8.337 6.306 14.691z"/>
//           <path fill="#4CAF50" d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238A11.91 11.91 0 0 1 24 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44z"/>
//           <path fill="#1976D2" d="M43.611 20.083H42V20H24v8h11.303a12.04 12.04 0 0 1-4.087 5.571l.003-.002 6.19 5.238C36.971 39.205 44 34 44 24c0-1.341-.138-2.65-.389-3.917z"/>
//         </svg>
//         Google
//       </button>

//       {/* Facebook Button */}
//       <button
//         type="button"
//         onClick={handleFacebookLogin}
//         className="w-full h-12 border-2 border-gray-300 rounded-lg font-medium text-gray-700 hover:bg-gray-50 transition-colors flex items-center justify-center gap-2"
//       >
//         {/* Facebook Icon */}
//         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className="w-5 h-5">
//           <path fill="#3F51B5" d="M42 37a5 5 0 0 1-5 5H11a5 5 0 0 1-5-5V11a5 5 0 0 1 5-5h26a5 5 0 0 1 5 5v26z"/>
//           <path fill="#FFF" d="M34.368 25H31v13h-5V25h-3v-4h3v-2.41c.002-3.508 1.459-5.59 5.592-5.59H35v4h-2.287C31.104 17 31 17.6 31 18.723V21h4l-.632 4z"/>
//         </svg>
//         Facebook
//       </button>

//     </div>
//   );
// }












// "use client";
// import { useGoogleLogin } from "@react-oauth/google";
// import { googleLogin, facebookLogin } from "@/lib/api/auth";
// import { saveToken } from "@/lib/utils/storage";

// export default function SocialButtons() {

//   // Google Login
//   const handleGoogleLogin = useGoogleLogin({
//     onSuccess: async (tokenResponse) => {
//       try {
//         const res = await googleLogin({
//           accessToken: tokenResponse.access_token,
//         });

//         const token = res?.data?.data?.token;
//         saveToken(token);
//         document.cookie = `token=${token}; path=/`;
//         window.location.href = "/";

//       } catch (error) {
//         console.log("Google login error:", error?.response?.data);
//       }
//     },
//     onError: () => console.log("Google login failed"),
//   });

//   // ← Separate async function for Facebook
//   const handleFacebookResponse = async (accessToken) => {
//     try {
//       const res = await facebookLogin({ accessToken });
//       const token = res?.data?.data?.token;
//       saveToken(token);
//       document.cookie = `token=${token}; path=/`;
//       window.location.href = "/";
//     } catch (error) {
//       console.log("Facebook login error:", error?.response?.data);
//     }
//   };

//   // Facebook Login
//   const handleFacebookLogin = () => {
//     if (!window.FB) {
//       console.log("Facebook SDK not loaded");
//       return;
//     }

//     // ← removed async from callback
//     window.FB.login((response) => {
//       if (response.authResponse) {
//         handleFacebookResponse(response.authResponse.accessToken); // ← call separate function
//       }
//     }, { scope: "email" });
//   };

//   return (
//     <div className="flex gap-3">

//       {/* Google Button */}
//       <button
//         type="button"
//         onClick={() => handleGoogleLogin()}
//         className="w-full h-12 border-2 border-gray-300 rounded-lg font-medium text-gray-700 hover:bg-gray-50 transition-colors flex items-center justify-center gap-2"
//       >
//         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className="w-5 h-5">
//           <path fill="#FFC107" d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 12.955 4 4 12.955 4 24s8.955 20 20 20 20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z"/>
//           <path fill="#FF3D00" d="m6.306 14.691 6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 16.318 4 9.656 8.337 6.306 14.691z"/>
//           <path fill="#4CAF50" d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238A11.91 11.91 0 0 1 24 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44z"/>
//           <path fill="#1976D2" d="M43.611 20.083H42V20H24v8h11.303a12.04 12.04 0 0 1-4.087 5.571l.003-.002 6.19 5.238C36.971 39.205 44 34 44 24c0-1.341-.138-2.65-.389-3.917z"/>
//         </svg>
//         Google
//       </button>

//       {/* Facebook Button */}
//       <button
//         type="button"
//         onClick={handleFacebookLogin}
//         className="w-full h-12 border-2 border-gray-300 rounded-lg font-medium text-gray-700 hover:bg-gray-50 transition-colors flex items-center justify-center gap-2"
//       >
//         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className="w-5 h-5">
//           <path fill="#3F51B5" d="M42 37a5 5 0 0 1-5 5H11a5 5 0 0 1-5-5V11a5 5 0 0 1 5-5h26a5 5 0 0 1 5 5v26z"/>
//           <path fill="#FFF" d="M34.368 25H31v13h-5V25h-3v-4h3v-2.41c.002-3.508 1.459-5.59 5.592-5.59H35v4h-2.287C31.104 17 31 17.6 31 18.723V21h4l-.632 4z"/>
//         </svg>
//         Facebook
//       </button>

//     </div>
//   );
// }















"use client";
import { useGoogleLogin } from "@react-oauth/google";
import { googleLogin, facebookLogin } from "@/lib/api/auth";
import { saveToken } from "@/lib/utils/storage";

export default function SocialButtons() {

  // Google Login
  const handleGoogleLogin = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      try {
        const res = await googleLogin({
          accessToken: tokenResponse.access_token,
        });

        const token = res?.data?.data?.token;
        saveToken(token);
        document.cookie = `token=${token}; path=/`;
        window.location.href = "/";

      } catch (error) {
        console.log("Google login error:", error?.response?.data);
      }
    },
    onError: () => console.log("Google login failed"),
  });

  // ← Separate async function for Facebook response
  const handleFacebookResponse = async (accessToken) => {
    try {
      const res = await facebookLogin({ accessToken });
      const token = res?.data?.data?.token;
      saveToken(token);
      document.cookie = `token=${token}; path=/`;
      window.location.href = "/";
    } catch (error) {
      console.log("Facebook login error:", error?.response?.data);
    }
  };

  // Facebook Login
  const handleFacebookLogin = () => {
    if (!window.FB) {
      console.log("Facebook SDK not loaded");
      return;
    }

    // ← getLoginStatus ensures FB is fully ready before login
    window.FB.getLoginStatus(() => {
      window.FB.login((response) => {
        if (response.authResponse) {
          handleFacebookResponse(response.authResponse.accessToken);
        }
      }, { scope: "email" });
    });
  };

  return (
    <div className="flex gap-3">

      {/* Google Button */}
      <button
        type="button"
        onClick={() => handleGoogleLogin()}
        className="w-full h-12 border-2 border-gray-300 rounded-lg font-medium text-gray-700 hover:bg-gray-50 transition-colors flex items-center justify-center gap-2"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className="w-5 h-5">
          <path fill="#FFC107" d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 12.955 4 4 12.955 4 24s8.955 20 20 20 20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z"/>
          <path fill="#FF3D00" d="m6.306 14.691 6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 16.318 4 9.656 8.337 6.306 14.691z"/>
          <path fill="#4CAF50" d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238A11.91 11.91 0 0 1 24 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44z"/>
          <path fill="#1976D2" d="M43.611 20.083H42V20H24v8h11.303a12.04 12.04 0 0 1-4.087 5.571l.003-.002 6.19 5.238C36.971 39.205 44 34 44 24c0-1.341-.138-2.65-.389-3.917z"/>
        </svg>
        Google
      </button>

      {/* Facebook Button */}
      <button
        type="button"
        onClick={handleFacebookLogin}
        className="w-full h-12 border-2 border-gray-300 rounded-lg font-medium text-gray-700 hover:bg-gray-50 transition-colors flex items-center justify-center gap-2"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className="w-5 h-5">
          <path fill="#3F51B5" d="M42 37a5 5 0 0 1-5 5H11a5 5 0 0 1-5-5V11a5 5 0 0 1 5-5h26a5 5 0 0 1 5 5v26z"/>
          <path fill="#FFF" d="M34.368 25H31v13h-5V25h-3v-4h3v-2.41c.002-3.508 1.459-5.59 5.592-5.59H35v4h-2.287C31.104 17 31 17.6 31 18.723V21h4l-.632 4z"/>
        </svg>
        Facebook
      </button>

    </div>
  );
}