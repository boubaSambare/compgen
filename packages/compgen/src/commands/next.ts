import Command from '../base-command'
import * as chalk from 'chalk'
import {Plop, run} from 'plop'
import * as path from 'path'
class Next extends Command {
  static description = 'generate nextjs component';

  async run() {
    this.log(chalk.yellow('make sure you are in your root directory'))
    await Plop.launch({
      configPath: path.join(__dirname, `${this.dev ? '../next-plopfile.ts' : '../next-plopfile.js'}`),
    }, env =>  {
      const options = {
        ...env,
        dest: process.cwd(),
      }
      return run(options, undefined, true)
    })
  }
}

export = Next
