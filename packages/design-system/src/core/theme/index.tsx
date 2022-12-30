import { componentsOverrides } from '../mui/components'
import * as theme from './theme.json'

const components = {
  prefix: 'mui',
  components: {
    ...componentsOverrides,
  },
}

const dls = Object.assign({}, JSON.parse(JSON.stringify(theme)), components)

export { dls }
