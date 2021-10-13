import { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/provider";

const App = ({ Component, pageProps }: AppProps) => {
    return (
        <ChakraProvider>
            <Component {...pageProps} />
        </ChakraProvider>
    );
};