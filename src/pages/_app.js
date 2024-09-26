import '../app/globals.css';
import { ChakraProvider } from '@chakra-ui/react'

export const metadata = {
    title: "Frontend Task",
    description: "Frontend Task",
  };

export default function App({ Component, pageProps }) {
  return (
      <ChakraProvider>
        <Component {...pageProps} />
      </ChakraProvider>
  );
}
