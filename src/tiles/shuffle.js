export const shuffled = (TILES) => {
  let cloned = [...TILES]
  for (let i = cloned.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    let temp = cloned[i]
    cloned[i] = cloned[j]
    cloned[j] = temp
  }
  return cloned
}
