const ROMAN: Record<string, number> = {
  I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000,
};

/**
 * Convert a Roman numeral string to its Arabic equivalent.
 * Strips any non-Roman characters before parsing. Returns the input
 * unchanged if no valid Roman characters are found.
 */
export function romanToArabic(input: string): string {
  const clean = input.toUpperCase().replace(/[^IVXLCDM]/g, "");
  if (!clean) return input;

  let total = 0;
  for (let i = 0; i < clean.length; i++) {
    const cur = ROMAN[clean[i]];
    const next = ROMAN[clean[i + 1]];
    if (next && cur < next) {
      total += next - cur;
      i++;
    } else {
      total += cur;
    }
  }
  return String(total);
}
