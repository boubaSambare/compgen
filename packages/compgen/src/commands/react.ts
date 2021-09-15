import Command from '../base-command'
import * as chalk from 'chalk'
import {Plop, run} from 'plop'
import * as path from 'path'
class React extends Command {
  static description = 'generate react  component';

  async run() {
    this.log(JSON.stringify(process.env.LANG, null, 2))
    this.log(chalk.yellow('make sure you are in the root directory '))
    await Plop.launch({
      configPath: path.join(__dirname, `${this.dev ? '../react-plopfile.ts' : '../react-plopfile.js'}`),
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
