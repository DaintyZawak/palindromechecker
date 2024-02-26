const palindrome = prompt("Enter a word or number: ");

function validation() {
  const length = palindrome.length; //calculates the length of the user's input

  //use for loop to divide the words into 2 halves
  for (let i = 0; i < length / 2; i++) {
    //validates the first and last characters are the same
    if (palindrome[i] !== palindrome[length - 1 - i]) {
      alert(`${palindrome} is not a palindrome!`);
    } else {
      alert(`${palindrome} is a palindrome`);
    }
  }
}

const result = validation(palindrome);
console.log(result);

//Another solution

// function validation(num) {
//   const str = num.toString();
//   const rev = str.split("").reverse().join("");

//   if (rev == str) {
//     return true;
//   } else {
//     return false;
//   }
// }

// let str1 = `A man, a plan, a canal, Panama`;
// let str2 = 112211;
// let str3 = 12345;

// console.log(validation(str1));
// console.log(validation(str2));
// console.log(validation(str3));
