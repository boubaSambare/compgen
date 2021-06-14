compgen
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
$ npm install -g compgen
$ compgen COMMAND
running command...
$ compgen (-v|--version|version)
compgen/0.0.1 darwin-x64 node-v15.12.0
$ compgen --help [COMMAND]
USAGE
  $ compgen COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`compgen  [FILE]`](#compgen-hello-file)
* [`compgen help [COMMAND]`](#compgen-help-command)

## `compgen  [FILE]`

describe the command here

```
USAGE
  $ compgen hello [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print

EXAMPLE
  $ compgen hello
  hello world from ./src/hello.ts!
```

_See code: [src/commands/hello.ts](https://github.com/boubaSambare/compgen/blob/v0.0.1/src/commands/hello.ts)_

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
