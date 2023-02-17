#!/usr/bin/env bash

#root
if [[ -d ./node_modules ]]; then rm -rf ./node_modules; fi

#explorer
if [[ -d ./apps/explorer/node_modules ]]; then rm -rf ./apps/explorer/node_modules; fi
if [[ -d ./apps/explorer/dist ]]; then rm -rf ./apps/explorer/dist; fi
if [[ -d ./packages/explorer/.next ]]; then rm -rf ./packages/explorer/.next; fi
if [[ -d ./packages/explorer/.turbo ]]; then rm -rf ./packages/explorer/.turbo; fi

#robin
if [[ -d ./apps/robin/node_modules ]]; then rm -rf ./apps/robin/node_modules; fi
if [[ -d ./apps/robin/dist ]]; then rm -rf ./apps/robin/dist; fi
if [[ -d ./packages/robin/.next ]]; then rm -rf ./packages/robin/.next; fi
if [[ -d ./packages/robin/.turbo ]]; then rm -rf ./packages/robin/.turbo; fi

#airbnb
if [[ -d ./apps/airbnb/node_modules ]]; then rm -rf ./apps/airbnb/node_modules; fi
if [[ -d ./apps/airbnb/dist ]]; then rm -rf ./apps/airbnb/dist; fi
if [[ -d ./packages/airbnb/.next ]]; then rm -rf ./packages/airbnb/.next; fi
if [[ -d ./packages/airbnb/.turbo ]]; then rm -rf ./packages/airbnb/.turbo; fi

#sandbox
if [[ -d ./apps/sandbox/node_modules ]]; then rm -rf ./apps/sandbox/node_modules; fi
if [[ -d ./apps/sandbox/dist ]]; then rm -rf ./apps/sandbox/dist; fi
if [[ -d ./packages/sandbox/.next ]]; then rm -rf ./packages/sandbox/.next; fi
if [[ -d ./packages/sandbox/.turbo ]]; then rm -rf ./packages/sandbox/.turbo; fi

#design-system
if [[ -d ./packages/design-system/node_modules ]]; then rm -rf ./packages/design-system/node_modules; fi
if [[ -d ./packages/design-system/dist ]]; then rm -rf ./packages/design-system/dist; fi
if [[ -d ./packages/design-system/.rollup.cache ]]; then rm -rf ./packages/design-system/.rollup.cache; fi
if [[ -d ./packages/design-system/.turbo ]]; then rm -rf ./packages/design-system/.turbo; fi

#json-to-js
if [[ -d ./packages/json-to-js/node_modules ]]; then rm -rf ./packages/json-to-js/node_modules; fi
if [[ -d ./packages/json-to-js/dist ]]; then rm -rf ./packages/json-to-js/dist; fi
if [[ -d ./packages/json-to-js/.rollup.cache ]]; then rm -rf ./packages/json-to-js/.rollup.cache; fi
if [[ -d ./packages/json-to-js/.turbo ]]; then rm -rf ./packages/json-to-js/.turbo; fi

#prisma-explorer
if [[ -d ./packages/prisma-explorer/node_modules ]]; then rm -rf ./packages/prisma-explorer/node_modules; fi
if [[ -d ./packages/prisma-explorer/dist ]]; then rm -rf ./packages/prisma-explorer/dist; fi
if [[ -d ./packages/prisma-explorer/.rollup.cache ]]; then rm -rf ./packages/prisma-explorer/.rollup.cache; fi
if [[ -d ./packages/prisma-explorer/.turbo ]]; then rm -rf ./packages/prisma-explorer/.turbo; fi

#prisma-robin
if [[ -d ./packages/prisma-robin/node_modules ]]; then rm -rf ./packages/prisma-robin/node_modules; fi
if [[ -d ./packages/prisma-robin/dist ]]; then rm -rf ./packages/prisma-robin/dist; fi
if [[ -d ./packages/prisma-robin/.rollup.cache ]]; then rm -rf ./packages/prisma-robin/.rollup.cache; fi
if [[ -d ./packages/prisma-robin/.turbo ]]; then rm -rf ./packages/prisma-robin/.turbo; fi

#eslint-config-custom-oxygen
if [[ -d ./config/eslint-config-custom-oxygen/node_modules ]]; then rm -rf ./config/eslint-config-custom-oxygen/node_modules; fi
if [[ -d ./config/eslint-config-custom-oxygen/dist ]]; then rm -rf ./config/eslint-config-custom-oxygen/dist; fi

#tsconfig
if [[ -d ./config/tsconfig/node_modules ]]; then rm -rf ./config/tsconfig/node_modules; fi
if [[ -d ./config/tsconfig/dist ]]; then rm -rf ./config/tsconfig/dist; fi

#prettier-config
if [[ -d ./config/prettier-config/node_modules ]]; then rm -rf ./config/prettier-config/node_modules; fi
if [[ -d ./config/prettier-config/dist ]]; then rm -rf ./config/prettier-config/dist; fi

#pnpm & yarn
if [[ -d ./package-lock.json ]]; then rm  ./package-lock.json; fi
if [[ -d ./pnpm-lock.yaml ]]; then rm  ./pnpm-lock.yaml; fi
if [[ -d ./yarn.lock ]]; then rm  ./yarn.lock; fi