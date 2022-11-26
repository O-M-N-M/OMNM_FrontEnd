import "../styles/globals.css";
import "tailwindcss/tailwind.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import type { AppProps } from "next/app";
import { RecoilRoot } from "recoil";

import { UIProvider } from "@/provider";

import Header from '../components/header';

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        <UIProvider>
          <Header />
          <Component {...pageProps} />
        </UIProvider>
      </RecoilRoot>
    </QueryClientProvider>
  );
}

export default MyApp;
