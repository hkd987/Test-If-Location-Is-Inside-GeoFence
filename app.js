const toRadians = val => val * Math.PI / 180
const toDegrees = val => val * 180 / Math.PI

// Calculate a point winthin a circle
// circle ={center: {latitude: 00.0000, longitude: 00.0000}, radius: number} // in metres
const pointInsideCircle = (point, circle) => {
  let center = circle.center
  let distance = distanceBetween(point, center)
  return distance <= circle.radius // Use '<=' if you want to get all points in the border
}

const distanceBetween = (point1, point2) => {
  var R = 6371e3 // metres
  var φ1 = toRadians(point1.latitude)
  var φ2 = toRadians(point2.latitude)
  var Δφ = toRadians(point2.latitude - point1.latitude)
  var Δλ = toRadians(point2.longitude - point1.longitude)

  var a = Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
            Math.cos(φ1) * Math.cos(φ2) *
            Math.sin(Δλ / 2) * Math.sin(Δλ / 2)

  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))
  return R * c
}


// NOTE: First Param is the point you want to check { latitude: 30.0000, longitude: -95.0000 }
// NOTE Next param is the center of a school building  with your paramas out
// { center: { latitude: 30.0000, longitude: -95.0000 }, radius: 800 }
const HOLLEMAN = pointInsideCircle({ latitude: 30.066804, longitude: -95.924552 }, {center: { latitude: 30.0672, longitude: -95.9239 }, radius: 115})
const TECH_OFFICE = pointInsideCircle({ latitude: 30.064114, longitude: -95.926684 }, {center: { latitude: 30.063547, longitude: -95.926245 }, radius: 75})
const WALLER_JR_HIGH = pointInsideCircle({ latitude: 30.063013, longitude: -95.925098 }, {center: { latitude: 30.063091, longitude: -95.925915 }, radius: 70})
const WALLER_JR_HIGH_2 = pointInsideCircle({ latitude: 30.063013, longitude: -95.925098 }, {center: { latitude: 30.063128, longitude: -95.924069 }, radius: 70})
const WALLER_JR_HIGH_3 = pointInsideCircle({ latitude: 30.062141, longitude: -95.924790 }, {center: { latitude: 30.063013, longitude: -95.925098 }, radius: 70})
const WALLER_HIGH = pointInsideCircle({ latitude: 30.076348, longitude: -95.921442 }, {center: { latitude: 30.078697, longitude: -95.920345 }, radius: 275})
const SHULTZ_JR_HIGH = pointInsideCircle({ latitude: 30.059150, longitude: -95.909603 }, {center: { latitude: 30.057819, longitude: -95.910033 }, radius: 150})
const JES = pointInsideCircle({ latitude: 30.086282, longitude: -95.979531 }, {center: { latitude: 30.085986, longitude: -95.978776 }, radius: 175})
console.log(JES)
