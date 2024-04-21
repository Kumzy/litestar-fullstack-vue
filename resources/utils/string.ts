export function findFirstIntegerInString(inputString: string): number | null {
  const regex = /[1-7]/
  const match = inputString.match(regex)

  if (match) {
    return parseInt(match[0])
  }

  return null // Return null if no match is found
}
