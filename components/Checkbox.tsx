import React from "react"
import { Checkbox as ChakraCheckbox, CheckboxProps } from "@chakra-ui/react"

type Props = {
  children: string
  onChange: CheckboxProps["onChange"]
}

export const Checkbox = ({ children, onChange }: Props) => {
  return <ChakraCheckbox onChange={ onChange }>{ children }</ChakraCheckbox>
}