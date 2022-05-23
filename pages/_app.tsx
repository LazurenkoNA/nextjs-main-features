import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "theme";
import { Sidebar } from "views/components/Sidebar";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Sidebar>
        <Component {...pageProps} />
      </Sidebar>
    </ChakraProvider>
  );
}

export default MyApp;
