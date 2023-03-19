function scuberGreetingForFeet(rideLength){
  if (rideLength <=400){
  return 'This one is on me!'
}
else if (rideLength >400 && rideLength <=2000){
  return 'That will be twenty bucks.'
}
else if (rideLength > 2000 && rideLength <=2500){
  return 'I will gladly take your thirty bucks.'
}
else (rideLength > 2500);{
  return 'No can do.'
}
}
function ternaryCheckCity(NYC) {
  return (NYC ? 'Ok, sounds good.' : 'No go.')
}

console.log(ternaryCheckCity(true));


console.log(ternaryCheckCity(null));

