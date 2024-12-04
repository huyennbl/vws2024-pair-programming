export default class DistanceCalculator {
  getMyLocation () {
    return [0, 0]
  }

  getDistance (targetLocation) {
    const [x, y] = targetLocation
    return Math.sqrt(
      Math.pow(x, 2) + Math.pow(y, 2)
    )
  }
}
