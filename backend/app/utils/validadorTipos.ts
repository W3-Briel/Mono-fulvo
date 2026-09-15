export function isObjectValid(value: any): value is object {
  return value !== undefined && value !== null && typeof value === 'object'
}