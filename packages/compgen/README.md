rc-compgen
=======

generate react or react native component

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/compgen.svg)](https://npmjs.org/package/compgen)
[![Downloads/week](https://img.shields.io/npm/dw/compgen.svg)](https://npmjs.org/package/compgen)
[![License](https://img.shields.io/npm/l/compgen.svg)](https://github.com/boubaSambare/compgen/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g rc-compgen
$ compgen COMMAND
running command...
$ compgen (-v|--version|version)
rc-compgen/0.0.1 darwin-x64 node-v15.12.0
$ compgen --help [COMMAND]
USAGE
  $ compgen COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`compgen autocomplete [SHELL]`](#compgen-autocomplete-shell)
* [`compgen help [COMMAND]`](#compgen-help-command)

## `compgen autocomplete [SHELL]`

display autocomplete installation instructions

```
USAGE
  $ compgen autocomplete [SHELL]

ARGUMENTS
  SHELL  shell type

OPTIONS
  -r, --refresh-cache  Refresh cache (ignores displaying instructions)

EXAMPLES
  $ compgen autocomplete
  $ compgen autocomplete bash
  $ compgen autocomplete zsh
  $ compgen autocomplete --refresh-cache
```

_See code: [@oclif/plugin-autocomplete](https://github.com/oclif/plugin-autocomplete/blob/v0.3.0/src/commands/autocomplete/index.ts)_

## `compgen help [COMMAND]`

display help for compgen

```
USAGE
  $ compgen help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v3.2.2/src/commands/help.ts)_
<!-- commandsstop -->
