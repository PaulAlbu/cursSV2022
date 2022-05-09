// ____pb 1__________________________________________ 
const nr = 3; 
const number = (nr)=>{                                 //varianta 1 de scriere a unei functii
    if (nr % 2 == 0) {
      return nr *2;
  } else {
      return nr-2;
  }
}
console.log(number(nr))

// putem scrie si asa codul 
let nr = 7;  
const number = (nr)=> nr % 2 == 0 ? console.log(nr *2) : console.log(nr-2); // varianta 2 de scriere a unei functii

number(nr) // call function in loc de console.log()



//____pb 2 ___________________________________________

const arr = [1,2,3,4,5,6,7,8,9];
//Asa as fi scris solutia probemei dar nu e corect asa
function checkPrime(arr) {
    let newArr=[]
    for (let i = 0; i < arr.length; i++) {
      for (let a = 2; a < arr[i]; a++) {
          if (arr[i] % a === 0){ //aici am vrut sa definesc conditia ca un nr sa fie prim insa nu imi dau seama daca ar trebui sa mai am inca un for loop nested
            newArr.push(arr[i]);
          }
        }
      }
    return newArr
}
// functia de mai jos returneaza valorile individuale ale unui nr prim 
const number = 3
function checkPrime(number) {
    if (number <= 1) {
      return false;
    } else {
      for (let i = 2; i < number; i++) {
        if (number % i == 0) {
          return false;
        }
      }
      return true;
    }
  }
  console.log(checkPrime(number))

//___pb 3 _________________________________________________________________________
saveStrings = [1, '1', 'salit', 2,6, true, 'LGD']
function strsOnly(saveStrings){                             //varianta 3 de scriere a unei functii
    onlyStr = []
    saveStrings.forEach(element => {
      if(typeof element === 'string'){
        onlyStr.push(element)
      }
    })
    return onlyStr 
  }
  console.log(strsOnly(saveStrings))

  //___pb 4 _________________________________________________________________________
  const addDigits = "15237";
  const oddNrs = addDigits => {                             //varianta 4 de scriere a unei functii
    let fin = 0;
    for(let i = 0; i< addDigits.length; i++){
      if ( Number(addDigits[i]) % 2 !== 0){
        fin += Number(addDigits[i]);
        continue;
      }
    }
  return fin;
  }
  
   console.log(oddNrs(addDigits));;

   //___pb 5 _________________________________________________________________________
let dogCompetionPlace = 1
   switch (dogCompetionPlace) {
    case 1:
        console.log('Your dog receives the gold medal!');
        break;
    case 2:
        console.log('Your dog receives the silver medal!');
        break
    case 3:
        console.log('Your dog receives the bronze medal!');
        break
    case 4:
        console.log('Your dog receives a certification');
        break
    case 5:
        console.log('Your dog receives a certification');
        break
    default:
        console.log('No medal or certification awarded.');
        break;
   }