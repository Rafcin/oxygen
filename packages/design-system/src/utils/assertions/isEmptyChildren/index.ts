import * as React from 'react'

/** @private Does a React component have exactly 0 children? */
export const isEmptyChildren = (children: any): boolean =>
  React.Children.count(children) === 0
