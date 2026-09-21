type ClassValue = string | false | null | undefined;

/** Junta class names ignorando valores falsy. */
export function cx(...values: ClassValue[]): string {
  return values.filter(Boolean).join(' ');
}
