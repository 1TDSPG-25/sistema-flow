export function maskCpf(value: string): string {
  let v = value.replace(/\D/g, "");
  if (v.length > 11) v = v.slice(0, 11);
  let masked = v;
  if (v.length > 3) masked = v.slice(0, 3) + "." + v.slice(3);
  if (v.length > 6) masked = masked.slice(0, 7) + "." + masked.slice(7);
  if (v.length > 9) masked = masked.slice(0, 11) + "-" + masked.slice(11);
  return masked;
}
