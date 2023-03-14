import React from "react"
import { Button as ChakraButton } from "@chakra-ui/react"

export const Button = ({ children }:{children: string}) => {
  return <ChakraButton>{children}</ChakraButton>
}