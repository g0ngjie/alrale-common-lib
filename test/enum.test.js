const { Enum } = require('../lib');

describe("Enum", () => {
  it("week", () => {
    const { Week } = Enum
    expect(Week.SUN).toBe('Sunday')
  })
});
