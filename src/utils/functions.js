export const objectHasEmptyValues = (obj) => {
  for (const key in obj) {
    if (typeof obj[key] === 'string' && !obj[key].trim()) return true
    if (!obj[key]) return true
  }
  return false
}

export const validateToken = (token) => {
  const tokenSplit = token?.split('-')

  if (!tokenSplit) return false

  return tokenSplit.length === 5 && tokenSplit[0].length === 8 && tokenSplit[4].length === 12
}
