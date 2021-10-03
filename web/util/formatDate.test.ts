import formatDate from './formatDate'

describe('formatDate', () => {
  it('parses and formats a date in the enGB locale', () => {
    const result = formatDate('2021-10-01')
    expect(result).toEqual('1st October 2021')
  })
})
