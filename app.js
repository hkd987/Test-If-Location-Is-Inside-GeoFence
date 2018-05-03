// NOTE: This would come from your database
const models = () => {
  return {
    name: 'TEST',
    latitude: 30.0000,
    longitude: -95.00000,
    radius: 175
  }
}

const LOCATION_CHECK = async (data) => {
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
  const TEMP = []
  const SCHOOLS = await models.Campus.findAll()
  for (const school in SCHOOLS) {
    // NOTE: data comes from the function
    // NOTE: school.... comes from the object in your database
    TEMP.push(pointInsideCircle(data, { center: { latitude: school.latitude, longitude: school.longitude }, radius: school.radius }))
  }
  const TEST = TEMP.includes(true)
  return TEST
}

console.log(LOCATION_CHECK({ latitude: 30.062676, longitude: -95.923599 }))
