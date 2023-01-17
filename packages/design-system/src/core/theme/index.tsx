import { componentsOverrides } from '../mui/components'
import { theme } from './theme'

const components = {
  prefix: 'mui',
  components: {
    ...componentsOverrides,
  },
}

//const dls = Object.assign({}, JSON.parse(JSON.stringify(theme)), components)
const dls = {
  ...theme,
  ...components,
}

export { dls }
