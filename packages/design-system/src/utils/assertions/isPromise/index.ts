import { isFunction } from "../isFunction"
import { isObject } from "../isObject"

/** @private is the given object/value a promise? */
export const isPromise = (value: any): value is PromiseLike<any> =>
  isObject(value) && isFunction(value.then)
