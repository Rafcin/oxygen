/** @private is the given object a Function? */
// eslint-disable-next-line @typescript-eslint/ban-types
export const isFunction = (obj: any): obj is Function => typeof obj === 'function'
