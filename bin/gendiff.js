#!/usr/bin/env node

// здесь должен быть вызов из src/cli.js

import { Command } from 'commander';
const program = new Command();

program
  .description('Compares two configuration files and shows a difference.')
  .option('-v, --version', 'output the version number');

program.parse();
