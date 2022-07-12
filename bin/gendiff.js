#!/usr/bin/env node

import { Command } from 'commander';
import genDiff from '../src/genDiff.js';

const program = new Command();

program
  .description('Compares two configuration files and shows a difference.')
  .option('-v, --version', 'output the version number')
  .helpOption('-h, --help', 'output usage information')
  .option('-f, --format <type>', 'output format', 'stylish', 'plain', 'nested')
  .usage('[options] <filepath1> <filepath2> <style>')
  .arguments('<filepath1> <filepath2> <style>')
  .action((filepath1, filepath2, style = 'stylish') => console.log(genDiff(filepath1, filepath2, style)))
  .parse();

export default program;
