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
function ternaryCheckCity(city) {
  const result = city === 'NYC' ? 'Ok, sounds good.' : 'No go.'}
  return 'Ok, sounds good.'
const tip = 'generous';
let saying;
function switchOnCharmFromTip(tip){
  switch (tip){
    case 'generous':
     return 'Thank you so much.';
     case 'not as generous':
      return 'Thank you.';
      default:
        return 'Bye.';
      }
}