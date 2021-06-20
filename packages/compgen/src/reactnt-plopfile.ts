import {componentGenerator} from './utils/reactnt-comp-generator'
import {NodePlopAPI} from 'node-plop'

export default async function plop(plop: NodePlopAPI) {
  await plop.setGenerator('native', componentGenerator)
}
