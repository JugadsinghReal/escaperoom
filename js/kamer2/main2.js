
let pointer = document.documentElement;
pointer.addEventListener('mousemove', m => {
  pointer.style.setProperty('--x', m.clientX + 'px');
  pointer.style.setProperty('--y', m.clientY + 'px');
})

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function getRandomNumber() {
  return getRandomIntInclusive(1000, 4000);
}

function convertToRoman(num) {
  let singles = ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];
  let tens = ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"];
  let hundreds = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"];
  let thousands = ["", "M", "MM", "MMM", "MMMM"];
  //turn the number to a string, split individual characters and then turn each one to a number.
  let length = num.toString().length;
  let numbers = num.toString().split("").map(Number);
  let roman = '';
  let i = 0;
  
  switch (length) {
    case 4:
      roman = thousands[numbers[i]];
      i++;
    case 3:
      roman += hundreds[numbers[i]];
      i++;
    case 2:
      roman += tens[numbers[i]];
      i++;
    case 1:
    roman += singles[numbers[i]];
  }
  return roman;
}

let result = getRandomNumber();
console.log(result);
console.log(convertToRoman(result));
   
let romanNumber = document.querySelector('.roman-number');
romanNumber.textContent = convertToRoman(result);
        
const btnAskCode = document.querySelector('.ask-code');
btnAskCode.addEventListener('click', function () {
  let askCode = parseInt(prompt("Wat is de code"));
  if (askCode == result) {
    window.location.href = ("room-three.html");
  }
});

// const myTimeout = setTimeout(lost, 4000);
  
// function lost() {
//   document.body.textContent = "Je hebt verloren";
// }
  
// function myStopFunction() {
//   clearTimeout(lost);
// }