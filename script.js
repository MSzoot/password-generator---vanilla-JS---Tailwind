// characters arrays for all possible choices 


const allCharacters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","0","1","2","3","4","5","6","7","8","9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

const lettersOnly = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]

const lettersWithnumbers = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","0","1","2","3","4","5","6","7","8","9"];

const lettersWithSpecials = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];



// id to variables

const specials = document.getElementById("specials");
const numbers = document.getElementById("numbers");
const passOne = document.getElementById("pass-one")
const passTwo = document.getElementById("pass-two")
const howMany = document.getElementById("how-many")





// password generation function

const makePass = (array,) => {
   let charactersNumber = howMany.value

    for (let i = 0 ; i < charactersNumber ; i++){
        passOne.textContent += array[ Math.floor(Math.random()* array.length)]
    }
    for (let i = 0 ; i < charactersNumber ; i++){
        passTwo.textContent += array[ Math.floor(Math.random()* array.length)]
    }
}


// generate on button pressed


const generate = ()=> {

    passOne.textContent = "";
    passTwo.textContent = "";


    if (specials.checked === true && numbers.checked === true){
       makePass(allCharacters)
    } else if ( numbers.checked === true){
       makePass(lettersWithnumbers)
    } else if ( specials.checked === true){
      makePass(lettersWithSpecials)
    }else {
        makePass(lettersOnly)
    }
    
}

//copy content from password buttons

const copyContent = (passNo) => {
let text = passNo.textContent;
navigator.clipboard.writeText(text);

alert(`Password copied to clipboard!`);
};