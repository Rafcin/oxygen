#!/usr/bin/env bash

#root
if [[ -d ./node_modules ]]; then rm -rf ./node_modules; fi

#dashboard
if [[ -d ./apps/dashboard/node_modules ]]; then rm -rf ./apps/dashboard/node_modules; fi
if [[ -d ./apps/dashboard/dist ]]; then rm -rf ./apps/dashboard/dist; fi
if [[ -d ./packages/dashboard/.next ]]; then rm -rf ./packages/dashboard/.next; fi
if [[ -d ./packages/dashboard/.turbo ]]; then rm -rf ./packages/dashboard/.turbo; fi

#bot
if [[ -d ./apps/bot/node_modules ]]; then rm -rf ./apps/bot/node_modules; fi
if [[ -d ./apps/bot/dist ]]; then rm -rf ./apps/bot/dist; fi
if [[ -d ./packages/bot/.next ]]; then rm -rf ./packages/bot/.next; fi
if [[ -d ./packages/bot/.turbo ]]; then rm -rf ./packages/bot/.turbo; fi

#docs
if [[ -d ./apps/docs/node_modules ]]; then rm -rf ./apps/docs/node_modules; fi
if [[ -d ./apps/docs/dist ]]; then rm -rf ./apps/docs/dist; fi
if [[ -d ./packages/docs/.next ]]; then rm -rf ./packages/docs/.next; fi
if [[ -d ./packages/docs/.turbo ]]; then rm -rf ./packages/docs/.turbo; fi

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