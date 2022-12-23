import { isObject } from "../assertions/isObject"

/**
 * Recursively a set the same value for all keys and arrays nested object, cloning
 * @param object
 * @param value
 * @param visited
 * @param response
 */
export function setNestedObjectValues<T>(
  object: any,
  value: any,
  visited: any = new WeakMap(),
  response: any = {},
): T {
  // eslint-disable-next-line prefer-const
  for (let k of Object.keys(object)) {
    const val = object[k]
    if (isObject(val)) {
      if (!visited.get(val)) {
        visited.set(val, true)
        // In order to keep array values consistent for both dot path  and
        // bracket syntax, we need to check if this is an array so that
        // this will output  { friends: [true] } and not { friends: { "0": true } }
        response[k] = Array.isArray(val) ? [] : {}
        setNestedObjectValues(val, value, visited, response[k])
      }
    } else {
      response[k] = value
    }
  }

  return response
}
