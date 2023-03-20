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
const tip = 'generous';
let saying;
function switchOnCharmFromTip(tip){
  switch (tip){
    case 'generous':
     return 'Thank you so much.';
     case 'not so generous':
      return 'Thank you.'
      

  }
}