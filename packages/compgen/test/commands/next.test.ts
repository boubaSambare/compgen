import {expect, test} from '@oclif/test'

describe('next', () => {
  test
  .stdout()
  .command(['next'])
  .it('run nextjs command', ctx => {
    expect(ctx.stdout).to.contain('which language do you want to use?')
  })
})
