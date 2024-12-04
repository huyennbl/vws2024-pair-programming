import DistanceCalculator from './DistanceCalculator'
let calculator
describe('DistanceCalculator', () => {
  beforeEach(() => {
    calculator = new DistanceCalculator()
  })
  describe('getMyLocation()', () => {
    it('should return [0,0]', () => {
      expect(calculator.getMyLocation()).toEqual([0, 0])
    })
  })
  describe('getDistance()', () => {
  })
})
