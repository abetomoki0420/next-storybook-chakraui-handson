import React from "react"
import { Checkbox as ChakraCheckbox} from "@chakra-ui/react"

export const Checkbox = ({children}: {children: string}) => {
  return <ChakraCheckbox>{ children }</ChakraCheckbox>
}