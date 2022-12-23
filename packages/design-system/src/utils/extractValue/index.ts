export function extractValue(components: Array<any>, type: any) {
  return (
    components
      .filter((component) => component.types.indexOf(type) === 0)
      .map((item) => item.long_name)
      .pop() || null
  )
}
