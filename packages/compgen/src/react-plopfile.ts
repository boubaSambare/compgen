import {componentGenerator} from './utils/react-comp-generator'
import {NodePlopAPI} from 'node-plop'

export default async function plop(plop: NodePlopAPI) {
  await plop.setGenerator('react', componentGenerator)
}
