export default class DistanceCalculator {
  setTargetLocation (coords) {
    this.coords = coords
  }

  setGpsService (gpsService) {
    this.gpsService = gpsService
  }

  getDistance () {
    const [x, y] = this.coords
    return Math.sqrt(
      Math.pow(x, 2) + Math.pow(y, 2)
    )
  }

  getMyLocation () {
    if (!this.gpsService) return [0, 0]
    return this.gpsService.getCoords()
  }
}
