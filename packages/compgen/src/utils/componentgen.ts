import {Actions, PlopGeneratorConfig} from 'node-plop'
import * as fs  from 'fs'
import * as path from 'path'
const project = path.join(__dirname, '../tsconfig.json')
const dev = fs.existsSync(project)
import * as inquirer from 'inquirer'

inquirer.registerPrompt('directory', require('inquirer-directory'))

export enum ComponentPropNames {
    componentName = 'componentName',
    path = 'path',
}

type Answers = {[p in ComponentPropNames]: string}

export const componentGenerator: PlopGeneratorConfig = {
  description: 'Add a reat component',
  prompts: [
    {
      type: 'input',
      name: ComponentPropNames.componentName,
      message: 'what should it be called?',
      default: 'Component',
    },
    {
      type: 'directory',
      name: ComponentPropNames.path,
      message: 'where do you want it to be created?',
    },
  ],
  actions: data => {
    const answers = data as Answers
    const componentPath = `${process.cwd()}/${answers.path}/{{properCase ${ComponentPropNames.componentName}}}`

    const actions: Actions = [
      {
        type: 'add',
        path: `${componentPath}/index.tsx`,
        templateFile: path.join(__dirname, '../templates/react/index.ts.hbs'),
        abortOnFail: true,
      },
    ]
    return actions
  },
}
