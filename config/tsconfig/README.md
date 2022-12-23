# @oxygen/tsconfig

Custom `tsconfig` setup that can be extended.

## Breakdown

All currently `cjs` format:

- `./base`
  - `./jest`
  - `./next`
  - `./node14`
  - `./react`
  - `./react-library`
  - `./react-native`

```sh
yarn add @oxygen/tsconfig --dev
```

### Example

```json
{
  // ...
  "extends": "@oxygen/tsconfig/node14.json"
  // ...
}
```
