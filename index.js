function scuberGreetingForFeet(someNumber){
 let result;
   if (someNumber <= 400){ result = "This one is on me!"
      } else if (someNumber > 2000  && someNumber  <= 2499){result = "I will gladly take your thirty bucks."

      } else {result = "No can do."}

 return result;

}







function ternaryCheckCity(someCity){
  let result;
  someCity == "NYC" ? result = "Ok, sounds good." : result = "No go.";

  return result;
}

function switchOnCharmFromTip(tipAmount){

  switch (tipAmount) {
    case 'generous':
      return 'Thank you so much.'
      
      break;
    
    case 'not as generous':
        return 'Thank you.'
       
        break

    default: return "Bye."
      break;
  }
  
}