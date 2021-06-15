import {Command, flags} from '@oclif/command'
import * as fs  from 'fs'
import {Plop, run} from 'plop'
import * as path from 'path'
const project = path.join(__dirname, '../tsconfig.json')
const dev = fs.existsSync(project)

class Compgenrc extends Command {
  static description = 'generate react and react native component';

  static flags = {
    help: flags.help({char: 'h'}),
    // flag with no value (-f, --force)
    force: flags.boolean({char: 'f'}),
  };

  static args = [{name: 'file'}];

  async run() {
    await Plop.launch({
      cwd: process.cwd(),
      configPath: path.join(__dirname, `${dev ? 'plopfile.ts' : 'plopfile.js'}`),
    }, env => run(env, undefined, false))
  }
}

export = Compgenrc
