import { Command } from 'commander';
import genDiff from './genDiff.js';

const program = new Command();

program
  .description('Compares two configuration files and shows a difference.')
  .option('-v, --version', 'output the version number')
  .helpOption('-h, --help', 'output usage information')
  .option('-f, --format <type>', 'output format')
  .usage('[options] <filepath1> <filepath2>')
  .arguments('<filepath1> <filepath2>')
  .action((filepath1, filepath2) => genDiff(filepath1, filepath2));

export default program;
