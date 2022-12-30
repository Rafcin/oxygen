import fs from 'fs'
import { program } from 'commander'

program
  .version('1.0.0')
  .option('-i, --input <input>', 'Input JSON file')
  .option('-o, --output <output>', 'Output file')
  .option('--js', 'Output as a JS file (default)')
  .option('--ts', 'Output as a TS file')
  .parse()

const { input, output, js, ts } = program.opts()

if (!input || !output) {
  console.log('Error: Input and output files are required.')
  program.outputHelp()
  process.exit(1)
}

const inputFile = input
const outputFile = output
const isJs = js
const isTs = ts

if (isJs && isTs) {
  console.log('Error: Can only specify one output type (--js or --ts).')
  program.outputHelp()
  process.exit(1)
}

const outputType = isTs ? 'ts' : 'js'

fs.promises
  .readFile(inputFile, 'utf8')
  .then((data) => {
    if (outputType === 'js') {
      return fs.promises.writeFile(outputFile, `module.exports = ${data}`, 'utf8')
    } else if (outputType === 'ts') {
      return fs.promises.writeFile(outputFile, `export default ${data}`, 'utf8')
    }
  })
  .then(() => {
    console.log(`Successfully wrote JSON to ${outputFile}`)
  })
  .catch((err) => {
    console.error(err)
    process.exit(1)
  })
