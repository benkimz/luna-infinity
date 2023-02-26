const results = document.getElementById("results");
const passLength = document.getElementById("length");
const uppCase = document.getElementById("uppercase");
const lowCase = document.getElementById("lowercase");
const numbers = document.getElementById("numbers");
const symbols = document.getElementById("symbols");
const generateElement = document.getElementById("genEl");
const clipboard = document.getElementById("clipboard");

const randomFunction = {
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getRandomNumber,
  symbol: getRandomSymbols,
};

generateElement.addEventListener("click", () => {
  const elementLength = +passLength.value;
  const hasLower = lowCase.checked;
  const hasUpper = uppCase.checked;
  const hasNumber = numbers.checked;
  const hasSymbols = symbols.checked;

  results.innerHTML = generatePassword(
    hasLower,
    hasUpper,
    hasNumber,
    hasSymbols,
    elementLength
  );
});

function generatePassword(lower, upper, number, symbol, elementLength){
    let generatedPassword = '';
    
    const typesCount = lower + upper + number + symbol;

    // console.log('typesCount', typesCount)

    const typesArr = [{upper}, {lower}, {number}, {symbol}].filter(item => Object.values(item)[0]);
    
    // console.log('typesArr', typesArr)

    if(typesCount === 0){
        return '';
    }

    for(i = 0; i < elementLength; i += typesCount){
        typesArr.forEach(type => {
            const funcName = Object.keys(type)[0];
           
            // console.log('funcname', funcName)
            generatedPassword += randomFunction[funcName]();

            
            
        })
        setTimeout(() =>{
            results.innerHTML = ''
        

        }, 20000);
    }

    const finalPassword = generatedPassword.slice(0, elementLength)

    
   

   
//    function clearPassword(){
//         clearTimeout()
//    }

    return finalPassword;

    
}

clipboard.addEventListener('click', () =>{
    const resultsArea = document.createElement('textArea');
    const password = results.innerText;

    if(!password){
       return; 
    }
    resultsArea.value = password;
        document.body.appendChild(resultsArea);
        resultsArea.select();
        document.execCommand('copy')
        resultsArea.remove()
        alert('Password copied')
})

function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}
console.log(getRandomLower());

function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}
console.log(getRandomUpper());

function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}
console.log(getRandomNumber());

function getRandomSymbols() {
  const symbols = "!@#$%^&*()-_+=[];:/<>~|";
  return symbols[Math.floor(Math.random() * symbols.length)];
 
}

console.log(getRandomSymbols());
