import {expect, test} from '@oclif/test'

describe('react', () => {
  test
  .stdout()
  .command(['react'])
  .it('run react command', ctx => {
    expect(ctx.stdout).to.contain('which language do you want to use?')
  })
})
