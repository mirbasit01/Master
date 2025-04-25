import AuthProvider from "@/context/AuthProvider";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
    <AuthProvider>
      <Component {...pageProps} />
      </AuthProvider>
    </>
   )
}
