import react from "react"

export const firstLetterToUpperCase = (str) => {
  let temp = str[0].toUpperCase() + str.substring(1)
  return temp
}
