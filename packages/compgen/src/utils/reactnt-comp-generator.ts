import {Actions, PlopGeneratorConfig} from 'node-plop'
import * as fs  from 'fs'
import * as path from 'path'

export enum ComponentPropNames {
    componentName = 'componentName',
    path = 'path',
    language= 'language',
}

type Answers = {[p in ComponentPropNames]: string}

export const componentGenerator: PlopGeneratorConfig = {
  description: 'Add a reat component',
  prompts: [
    {
      type: 'list',
      name: ComponentPropNames.language,
      message: 'which language do you want to use?',
      choices: ['javascript', 'typescript'],
    },
    {
      type: 'input',
      name: ComponentPropNames.componentName,
      message: 'what should it be called?',
      default: 'Component',
    },
    {
      type: 'dir',
      name: ComponentPropNames.path,
      message: 'where do you want it to be created?',
      basePath: './src',
    } as any,
  ],
  actions: data => {
    const answers = data as Answers
    const componentPath = `${process.cwd()}/${answers.path}/{{properCase ${ComponentPropNames.componentName}}}`
    const actualComponentPath = `${process.cwd()}/${answers.path}/${answers.componentName}`

    if (fs.existsSync(actualComponentPath)) {
      throw new Error(`Component '${answers.componentName}' already exists`)
    }

    const actions: Actions = [
      {
        type: 'add',
        path: `${componentPath}/${answers.language === 'typescript' ? 'index.tsx' : 'index.jsx'}`,
        templateFile: path.join(__dirname, `../templates/reactnative/${answers.language === 'typescript' ? 'index.ts.hbs' : 'index.js.hbs'}`),
        abortOnFail: true,
      },
    ]
    return actions
  },
}
