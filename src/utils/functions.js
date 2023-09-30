export const objectHasEmptyValues = (obj) => {
  for (const key in obj) {
    if (typeof obj[key] === 'string' && !obj[key].trim()) return true
    if (!obj[key]) return true
  }
  return false
}
