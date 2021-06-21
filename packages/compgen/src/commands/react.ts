import {Command, flags} from '@oclif/command'
import * as fs  from 'fs'
import * as chalk from 'chalk'
import {Plop, run} from 'plop'
import * as path from 'path'
const project = path.join(__dirname, '../../tsconfig.json')
const dev = fs.existsSync(project)
import * as inquirer from 'inquirer'



class React extends Command {
  static description = 'generate react  component';

  static flags = {
    help: flags.help({char: 'h'}),
    // flag with no value (-f, --force)
    force: flags.boolean({char: 'f'}),
  };

  static args = [{name: 'file'}];

  async run() {
    inquirer.registerPrompt('dir', require('inquirer-directory'))
    this.log(chalk.yellow('make sure you are in the root directory '))
    await Plop.launch({
      configPath: path.join(__dirname, `${dev ? '../react-plopfile.ts' : '../react-plopfile.js'}`),
    }, env =>  {
      const options = {
        ...env,
        dest: process.cwd(),
      }
      return run(options, undefined, true)
    })
  }
}

export = React
