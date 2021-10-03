
import { ChakraProvider } from "@chakra-ui/react";
import { Web3ReactProvider } from '@web3-react/core';
import Web3 from 'web3'
import { ToastProvider } from "react-toast-notifications";

function getLibrary(provider) {
  return new Web3(provider)
}

function MyApp({ Component, pageProps }) {
  return (

    <ChakraProvider>
      <Web3ReactProvider getLibrary={getLibrary}>
        <ToastProvider autoDismiss={true} autoDismissTimeout="2000">
          <Component {...pageProps} />
        </ToastProvider>
      </Web3ReactProvider>
    </ChakraProvider>



  )

}

export default MyApp
