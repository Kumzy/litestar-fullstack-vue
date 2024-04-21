export function formatNumberWithLimit(num: number, limit: number): string {
  if (num >= limit) {
    return limit - 1 + '+'
  }
  return num.toString()
}
