import {componentGenerator} from './utils/reactnt-comp-generator'
import {NodePlopAPI} from 'node-plop'

export default async function plop(plop: NodePlopAPI) {
  plop.setPrompt('dir', require('inquirer-directory'))
  await plop.setGenerator('native', componentGenerator)
}
