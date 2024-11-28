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

    it('should return data from GpsService', () => {
      const gpsService = {
        getCoords: function () {
          return [3, 2]
        }
      }
      calculator.setGpsService(gpsService)
      expect(calculator.getMyLocation()).toEqual([3, 2])
    })
  })

  describe('getDistance()', () => {
    it('should return 5 when TargetLocation = [3,4]', () => {
      calculator.setTargetLocation([3, 4])
      expect(calculator.getDistance()).toEqual(5)
    })

    it('should return 10 when TargetLocation = [8,6]', () => {
      calculator.setTargetLocation([8, 6])
      expect(calculator.getDistance()).toEqual(10)
    })

    it('should return 13 when TargetLocation = [8,6] and my gps location = [-4,11]', () => {
      calculator.setTargetLocation([8, 6])
      const gpsService = {
        getCoords: function () {
          return [-4, 11]
        }
      }
      calculator.setGpsService(gpsService)

      expect(calculator.getDistance()).toEqual(13)
    })
  })
})
