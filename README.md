The tool compares two configuration files and shows a difference. It supports JSON and YAML files and shows result in several text output formats. This is my second student project.

For installation use command:

git clone https://github.com/faciledictu/frontend-project-lvl2.git

and then install dependencies using "make install" command.

Usage:

gendiff [options] filepath1 filepath2

Options:

  -V, --version        output the version number
  
  -f, --format <type>  output format (default: "stylish")
  
  -h, --help           display help for command

comparing simple json files:
https://asciinema.org/a/plpNEnSHoUd7tHO8oSktOAfE1

comparing simple yml files:
https://asciinema.org/a/VwD6zouqt6rv4WHcTf3I6Z6Hf

comparing nested files:
https://asciinema.org/a/ybNHGsJYda9mHlPOcvxmouH9s

output 1:
https://asciinema.org/a/BTDXeNwW9jOPOv6NsyGzeABom

output 2:
https://asciinema.org/a/cdznYOiKzu8nPn3Gvs9HXBptp


### Hexlet tests and linter status:
[![Actions Status](https://github.com/durgedancing/frontend-project-lvl2/workflows/hexlet-check/badge.svg)](https://github.com/durgedancing/frontend-project-lvl2/actions)

<a href="https://codeclimate.com/github/codeclimate/codeclimate/maintainability"><img src="https://api.codeclimate.com/v1/badges/a99a88d28ad37a79dbf6/maintainability" /></a>

<a href="https://codeclimate.com/github/codeclimate/codeclimate/test_coverage"><img src="https://api.codeclimate.com/v1/badges/a99a88d28ad37a79dbf6/test_coverage" /></a>

![test&lint](https://github.com/durgedancing/frontend-project-lvl2/actions/workflows/test&lint.yml/badge.svg)
