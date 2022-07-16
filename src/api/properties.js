export const getProperties = async () => {
  const response = await fetch('/property-data.json')
  const json = await response.json()

  return json?.result?.properties?.elements
}
