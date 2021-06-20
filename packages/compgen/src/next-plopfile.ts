import {componentGenerator} from './utils/next-comp-generator'
import {NodePlopAPI} from 'node-plop'

export default async function plop(plop: NodePlopAPI) {
  await plop.setGenerator('next', componentGenerator)
}
