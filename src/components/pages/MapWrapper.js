import React from 'react'
import ReactDOM from 'react-dom'
import Map from './Map'
import { ChakraProvider, theme } from '@chakra-ui/react'

function MapWrapper() {
    return   <ChakraProvider theme={theme}>
    <Map />
  </ChakraProvider>;
}

export default MapWrapper