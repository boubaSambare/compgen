import Command from '../base-command'
import {Plop, run} from 'plop'
import * as path from 'path'

class Native extends Command {
  static description = 'generate react native component';

  async run() {
    await Plop.launch({
      configPath: path.join(__dirname, `${this.dev ? '../reactnt-plopfile.ts' : '../reactnt-plopfile.js'}`),
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
