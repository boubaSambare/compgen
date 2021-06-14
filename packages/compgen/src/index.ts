import {Command, flags} from '@oclif/command'
import {Plop, run} from 'plop'

class Compgen extends Command {
  static description = 'to generate react component';

  static flags = {
    help: flags.help({char: 'h'}),
    // flag with no value (-f, --force)
    force: flags.boolean({char: 'f'}),
  };

  static args = [{name: 'file'}];

  async run() {
    await Plop.launch({
      cwd: process.cwd(),
      configPath: 'src/utils/plopfile.ts',
    }, env => run(env, undefined, false))
  }
}

export = Compgen
