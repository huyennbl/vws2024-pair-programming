export default class DistanceCalculator {
  setTargetLocation (coords) {
    this.coords = coords
  }

  getDistance () {
    const [x, y] = this.coords
    return Math.sqrt(
      Math.pow(x, 2) + Math.pow(y, 2)
    )
  }

  getMyLocation () {
    return [0, 0]
  }
}
