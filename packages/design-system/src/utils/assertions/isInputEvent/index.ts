import { isObject } from "../isObject"

/** @private is the given object/value a type of synthetic event? */
export const isInputEvent = (value: any): value is React.SyntheticEvent<any> =>
  value && isObject(value) && isObject(value.target)
