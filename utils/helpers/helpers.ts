export function extractLastNumber(input: string): string {
  return input.replace(/(\d+).*$/, "$1");
}
