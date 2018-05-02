const LOCATION_CHECK = (data) => {
  const toRadians = val => val * Math.PI / 180
  // Calculate a point winthin a circle
  // circle ={center: {latitude: 00.0000, longitude: 00.0000}, radius: number} // in metres
  const pointInsideCircle = (point, circle) => {
    const { center } = circle
    const distance = distanceBetween(point, center)
    return distance <= circle.radius // Use '<=' if you want to get all points in the border
  }

  const distanceBetween = (point1, point2) => {
    const R = 6371e3 // metres
    const φ1 = toRadians(point1.latitude)
    const φ2 = toRadians(point2.latitude)
    const Δφ = toRadians(point2.latitude - point1.latitude)
    const Δλ = toRadians(point2.longitude - point1.longitude)

    const a = Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
            Math.cos(φ1) * Math.cos(φ2) *
            Math.sin(Δλ / 2) * Math.sin(Δλ / 2)

    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))
    return R * c
  }

  // NOTE: First Param is the point you want to check { latitude: 30.0000, longitude: -95.0000 }
  // NOTE Next param is the center of a school building  with your paramas out
  // { center: { latitude: 30.0000, longitude: -95.0000 }, radius: 800 }
  const HOLLEMAN = pointInsideCircle(data, {center: { latitude: 30.0672, longitude: -95.9239 }, radius: 115})
  const TECH_OFFICE = pointInsideCircle(data, {center: { latitude: 30.063547, longitude: -95.926245 }, radius: 75})
  const WALLER_JR_HIGH = pointInsideCircle(data, {center: { latitude: 30.063091, longitude: -95.925915 }, radius: 70})
  const WALLER_JR_HIGH_2 = pointInsideCircle(data, {center: { latitude: 30.063128, longitude: -95.924069 }, radius: 70})
  const WALLER_JR_HIGH_3 = pointInsideCircle(data, {center: { latitude: 30.063013, longitude: -95.925098 }, radius: 70})
  const WALLER_HIGH = pointInsideCircle(data, {center: { latitude: 30.078697, longitude: -95.920345 }, radius: 275})
  const SHULTZ_JR_HIGH = pointInsideCircle(data, {center: { latitude: 30.057819, longitude: -95.910033 }, radius: 150})
  const JES = pointInsideCircle(data, {center: { latitude: 30.085986, longitude: -95.978776 }, radius: 175})
  const RRE = pointInsideCircle(data, {center: { latitude: 30.024168, longitude: -95.813759 }, radius: 175})
  const TES = pointInsideCircle(data, {center: { latitude: 30.114702, longitude: -95.841073 }, radius: 175})
  const FSE = pointInsideCircle(data, {center: { latitude: 30.166637, longitude: -95.931027 }, radius: 175})

  const HOLDER = [HOLLEMAN, TECH_OFFICE, WALLER_JR_HIGH, WALLER_JR_HIGH_2, WALLER_JR_HIGH_3, WALLER_HIGH, SHULTZ_JR_HIGH, JES, RRE, TES, FSE]
  const TEST = HOLDER.includes(true)
  return TEST
}

console.log(LOCATION_CHECK({ latitude: 30.166889, longitude: -95.931380 }))
