export const capitalizeFirstLetter = (str?: string | undefined) => {
  if (!str) return ""

  return str.replace(/^\w/, c => c.toUpperCase())
}
