import {expect, test} from '@oclif/test'

describe('native', () => {
  test
  .stdout()
  .command(['native'])
  .it('run native command', ctx => {
    expect(ctx.stdout).to.contain('which language do you want to use?')
  })
})
