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








"use client";
import { Provider } from "react-redux";
import { store } from "@/redux/store";
import { useEffect } from "react";
import { saveStoreId, getToken } from "@/lib/utils/storage";
import { useRouter, usePathname } from "next/navigation";

export default function ClientWrapper({ children, storeId }) {
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (storeId) {
      saveStoreId(storeId);
      console.log("StoreId saved: ", storeId);
    }
  }, [storeId]);

  useEffect(() => {
    const token = getToken();
    const isAuthPage = pathname.startsWith("/auth");

    if (token && isAuthPage) {
      router.push("/"); // ← logged in + on auth page → go home
    }

    if (!token && !isAuthPage) {
      router.push("/auth/signin"); // ← not logged in + not on auth page → go to login
    }
  }, [pathname]);

  return <Provider store={store}>{children}</Provider>;
}