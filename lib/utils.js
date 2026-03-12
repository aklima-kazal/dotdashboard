// Utility helpers
// `cn` - simple className combiner supporting strings, arrays and objects
export function cn(...args) {
  return args
    .flatMap((arg) => {
      if (!arg && arg !== 0) return []
      if (typeof arg === 'string') return [arg]
      if (Array.isArray(arg)) return arg
      if (typeof arg === 'object')
        return Object.keys(arg).filter((k) => Boolean(arg[k]))
      return [String(arg)]
    })
    .filter(Boolean)
    .join(' ')
}

export default cn
