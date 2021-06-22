import {Command, flags} from '@oclif/command'
import * as fs  from 'fs'
import * as path from 'path'
const project = path.join(__dirname, '../tsconfig.json')
const dev = fs.existsSync(project)

export default  abstract class BaseCommand extends Command {
  static description = 'generate react native component';

  protected  dev = dev

  static flags = {
    help: flags.help({char: 'h'}),
    // flag with no value (-f, --force)
    force: flags.boolean({char: 'f'}),
  };
}
