import {Command, flags} from '@oclif/command'
import * as fs  from 'fs'
import * as chalk from 'chalk'
import {Plop, run} from 'plop'
import * as path from 'path'
const project = path.join(__dirname, '../../tsconfig.json')
const dev = fs.existsSync(project)

class Next extends Command {
  static description = 'generate nextjs component';

  static flags = {
    help: flags.help({char: 'h'}),
    // flag with no value (-f, --force)
    force: flags.boolean({char: 'f'}),
  };

  static args = [{name: 'file'}];

  async run() {
    this.log(chalk.yellow('make sure are in your root directory'))
    await Plop.launch({
      configPath: path.join(__dirname, `${dev ? '../next-plopfile.ts' : '../next-plopfile.js'}`),
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
