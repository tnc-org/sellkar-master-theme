"use client";
import { Provider } from "react-redux";
import { store } from "@/redux/store";
import { useEffect } from "react";
import { saveStoreId, getToken } from "@/lib/utils/storage";
import { useRouter, usePathname } from "next/navigation";
import { GoogleOAuthProvider } from "@react-oauth/google";

// ─── Routes that require a logged-in token ────────────────────────────────────
const PROTECTED_ROUTES = ['/profile', '/checkout', '/orders', '/wishlist'];

export default function ClientWrapper({ children, storeId }) {
  const router   = useRouter();
  const pathname = usePathname();

  // Save StoreId
  useEffect(() => {
    if (storeId) {
      saveStoreId(storeId);
    }
  }, [storeId]);

  // Auth guard
  useEffect(() => {
    const token      = getToken();
    const isAuthPage = pathname.startsWith('/auth');
    const isProtected = PROTECTED_ROUTES.some((r) => pathname.startsWith(r));

    // Already logged in → don't show auth pages
    if (token && isAuthPage) {
      router.push('/');
      return;
    }

    // Not logged in → only block protected routes
    if (!token && isProtected) {
      router.push('/auth/signin');
    }
  }, [pathname]);

  // Facebook SDK
  useEffect(() => {
    window.fbAsyncInit = function () {
      window.FB.init({
        appId:   process.env.NEXT_PUBLIC_FACEBOOK_APP_ID || 'YOUR_FACEBOOK_APP_ID',
        cookie:  true,
        xfbml:   true,
        version: 'v18.0',
      });
    };

    (function (d, s, id) {
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s);
      js.id  = id;
      js.src = 'https://connect.facebook.net/en_US/sdk.js';
      fjs.parentNode.insertBefore(js, fjs);
    })(document, 'script', 'facebook-jssdk');
  }, []);

  return (
    <GoogleOAuthProvider clientId={process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID}>
      <Provider store={store}>
        {children}
      </Provider>
    </GoogleOAuthProvider>
  );
}