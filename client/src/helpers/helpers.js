export const processMap = (map) => {
  let preferences = [];
  for (const [k] of map) {
    preferences.push(k)
  }
  return preferences;
}

