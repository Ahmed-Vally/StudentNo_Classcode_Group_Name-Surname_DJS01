/**
 * Debugging Guide
 * 1. Make the code more readable
 * 2. Pick up calculation errors
 * 3. Make these calculations robust such that the calculation does not give an incorrect result, it throws an error to the user if something has gone wrong (parameter used with an incorrect unit of measurement, etc)
 */

// Given Parameters
const velocityKmh = 10000; // velocity (km/h)
const accelerationMs2 = 3; // acceleration (m/s^2)
const timeSeconds = 3600; // seconds (1 hour)
const initialDistanceKm = 0; // distance (km)
const remainingFuelKg = 5000; // remaining fuel (kg)
const fuelBurnRateKgPerS = 0.5; // fuel burn rate (kg/s)

// Function to calculate new velocity
const calcNewVel = (velocity, acceleration, time) => {
  // Check for invalid inputs
  if (typeof velocity !== 'number' || typeof acceleration !== 'number' || typeof time !== 'number') {
    throw new Error('Invalid input: velocity, acceleration, and time must be numbers.');
  }

  // Convert velocity from km/h to m/s
  const velocityMs = velocity * (1000 / 3600);

  // Calculate new velocity in m/s
  const newVelocityMs = velocityMs + (acceleration * time);

  // Convert new velocity back to km/h
  const newVelocityKmh = newVelocityMs * (3600 / 1000);

  return newVelocityKmh;
};

// Calculate new distance
const newDistanceKm = initialDistanceKm + (velocityKmh * (timeSeconds / 3600));

// Calculate remaining fuel
const newRemainingFuelKg = remainingFuelKg - (fuelBurnRateKgPerS * timeSeconds);

// Calculate new velocity based on acceleration
const newVelocityKmh = calcNewVel(velocityKmh, accelerationMs2, timeSeconds);

console.log(`Corrected New Velocity: ${newVelocityKmh.toFixed(2)} km/h`);
console.log(`Corrected New Distance: ${newDistanceKm.toFixed(2)} km`);
console.log(`Corrected Remaining Fuel: ${newRemainingFuelKg.toFixed(2)} kg`);







