// "use client"; // this is a client component
// import { Provider } from "react-redux";
// import { store } from "@/redux/store";
// import { useEffect } from "react";
// import { saveStoreId } from "@/lib/utils/storage";

// export default function ClientWrapper({ children, storeId }) {

//   useEffect(()=>{
//     if (storeId) {
//       saveStoreId(storeId);
//       console.log("StoreId saved: ", storeId);
//     }
//   }, [storeId]);

//   return <Provider store={store}>{children}</Provider>;
// }








// "use client";
// import { Provider } from "react-redux";
// import { store } from "@/redux/store";
// import { useEffect } from "react";
// import { saveStoreId, getToken } from "@/lib/utils/storage";
// import { useRouter, usePathname } from "next/navigation";
// import { GoogleOAuthProvider } from "@react-oauth/google";

// export default function ClientWrapper({ children, storeId }) {
//   const router = useRouter();
//   const pathname = usePathname();

//   useEffect(() => {
//     if (storeId) {
//       saveStoreId(storeId);
//       console.log("StoreId saved: ", storeId);
//     }
//   }, [storeId]);

//   useEffect(() => {
//     const token = getToken();
//     const isAuthPage = pathname.startsWith("/auth");

//     if (token && isAuthPage) {
//       router.push("/"); // ← logged in + on auth page → go home
//     }

//     if (!token && !isAuthPage) {
//       router.push("/auth/signin"); // ← not logged in + not on auth page → go to login
//     }
//   }, [pathname]);

//   return (
//     <GoogleOAuthProvider clientId="YOUR_GOOGLE_CLIENT_ID"> {/* ← wrap here */}
//       <Provider store={store}>
//         {children}
//       </Provider>
//     </GoogleOAuthProvider>
//   );
// }













// "use client";
// import { Provider } from "react-redux";
// import { store } from "@/redux/store";
// import { useEffect } from "react";
// import { saveStoreId, getToken } from "@/lib/utils/storage";
// import { useRouter, usePathname } from "next/navigation";
// import { GoogleOAuthProvider } from "@react-oauth/google";

// export default function ClientWrapper({ children, storeId }) {
//   const router = useRouter();
//   const pathname = usePathname();

//   useEffect(() => {
//     if (storeId) {
//       saveStoreId(storeId);
//       console.log("StoreId saved: ", storeId);
//     }
//   }, [storeId]);

//   useEffect(() => {
//     const token = getToken();
//     const isAuthPage = pathname.startsWith("/auth");

//     if (token && isAuthPage) {
//       router.push("/");
//     }

//     if (!token && !isAuthPage) {
//       router.push("/auth/signin");
//     }
//   }, [pathname]);

//   // ← Add this useEffect for Facebook SDK
//   useEffect(() => {
//     window.fbAsyncInit = function () {
//       window.FB.init({
//         appId: "YOUR_FACEBOOK_APP_ID", // ← ask your team
//         cookie: true,
//         xfbml: true,
//         version: "v18.0",
//       });
//       console.log("Facebook SDK loaded!"); // ← confirm it loads
//     };

//     (function (d, s, id) {
//       var js, fjs = d.getElementsByTagName(s)[0];
//       if (d.getElementById(id)) return;
//       js = d.createElement(s);
//       js.id = id;
//       js.src = "https://connect.facebook.net/en_US/sdk.js";
//       fjs.parentNode.insertBefore(js, fjs);
//     })(document, "script", "facebook-jssdk");
//   }, []);

//   return (
//     <GoogleOAuthProvider clientId="YOUR_GOOGLE_CLIENT_ID">
//       <Provider store={store}>
//         {children}
//       </Provider>
//     </GoogleOAuthProvider>
//   );
// } 










"use client";
import { Provider } from "react-redux";
import { store } from "@/redux/store";
import { useEffect } from "react";
import { saveStoreId, getToken } from "@/lib/utils/storage";
import { useRouter, usePathname } from "next/navigation";
import { GoogleOAuthProvider } from "@react-oauth/google";

export default function ClientWrapper({ children, storeId }) {
  const router = useRouter();
  const pathname = usePathname();

  // Save StoreId
  useEffect(() => {
    if (storeId) {
      saveStoreId(storeId);
      console.log("StoreId saved: ", storeId);
    }
  }, [storeId]);

  // Auth check
  useEffect(() => {
    const token = getToken();
    const isAuthPage = pathname.startsWith("/auth");

    if (token && isAuthPage) {
      router.push("/");
    }

    if (!token && !isAuthPage) {
      router.push("/auth/signin");
    }
  }, [pathname]);

  // Facebook SDK
  useEffect(() => {
    // ← Define BEFORE loading script
    window.fbAsyncInit = function () {
      window.FB.init({
        appId: "YOUR_FACEBOOK_APP_ID", // ← ask your team
        cookie: true,
        xfbml: true,
        version: "v18.0",
      });
      console.log("Facebook SDK initialized!");
    };

    // ← Load script AFTER defining fbAsyncInit
    (function (d, s, id) {
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s);
      js.id = id;
      js.src = "https://connect.facebook.net/en_US/sdk.js";
      fjs.parentNode.insertBefore(js, fjs);
    })(document, "script", "facebook-jssdk");
  }, []);

  return (
    <GoogleOAuthProvider clientId={ process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID}> {/* ← ask your team */}
      <Provider store={store}>
        {children}
      </Provider>
    </GoogleOAuthProvider>
  );
}