import {Command, flags} from '@oclif/command'
import * as fs  from 'fs'
import {Plop, run} from 'plop'
import * as path from 'path'
const project = path.join(__dirname, '../../tsconfig.json')
const dev = fs.existsSync(project)

class Native extends Command {
  static description = 'generate react native component';

  static flags = {
    help: flags.help({char: 'h'}),
    // flag with no value (-f, --force)
    force: flags.boolean({char: 'f'}),
  };

  static args = [{name: 'file'}];

  async run() {
    await Plop.launch({
      configPath: path.join(__dirname, `${dev ? '../reactnt-plopfile.ts' : '../reactnt-plopfile.js'}`),
    }, env =>  {
      const options = {
        ...env,
        dest: process.cwd(),
      }
      return run(options, undefined, true)
    })
  }
}

export = Native
