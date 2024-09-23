// 1. Function to create an array of numbers between lower and upper (inclusive)
function range(lower, upper) {
  const result = []
  for (let i = lower; i <= upper; i++) {
    result.push(i)
  }
  return result
}

// 2. Function to convert a string to uppercase and append exclamation marks
function shoutWithExclamations(str, num) {
  return str.toUpperCase() + '!'.repeat(num)
}

// 3. Function to add minutes to a time in 24hr format
function addMinutesToTime(time, minutesToAdd) {
  const [hours, minutes] = time.split(':').map(Number)
  let totalMinutes = hours * 60 + minutes + minutesToAdd
  totalMinutes = totalMinutes % (24 * 60)
  const newHours = Math.floor(totalMinutes / 60)
  const newMinutes = String(totalMinutes % 60).padStart(2, '0')
  return `${newHours}:${newMinutes}`
}

// Export the functions
module.exports = {
  a: range,
  b: shoutWithExclamations,
  c: addMinutesToTime
}
