import { ChakraProvider } from '@chakra-ui/react';
import QueryClientProvider from '../libs/react-query';
import { AppProps } from 'next/app';

function App({ Component, pageProps }: AppProps) {
    return (
        <QueryClientProvider>
            <ChakraProvider>
                <Component {...pageProps} />
            </ChakraProvider>
        </QueryClientProvider>
    )
}

export default App;