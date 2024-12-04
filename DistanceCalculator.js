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
    const [gpsX, gpsY] = this.getMyLocation()
    return Math.sqrt(
      Math.pow(x - gpsX, 2) + Math.pow(y - gpsY, 2)
    )
  }
}
