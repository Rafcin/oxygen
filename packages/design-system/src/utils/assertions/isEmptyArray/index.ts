/** @private is the value an empty array? */
export const isEmptyArray = (value?: any) =>
  Array.isArray(value) && value.length === 0
