export default class DistanceCalculator {
  setGpsService (gpsService) {
    this.gpsService = gpsService
  }

  getMyLocation () {
    if (!this.gpsService) return [0, 0]
    return this.gpsService.getCoords()
  }

  getDistance (targetLocation) {
    const [x, y] = targetLocation
    return Math.sqrt(
      Math.pow(x, 2) + Math.pow(y, 2)
    )
  }
}
