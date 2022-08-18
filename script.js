const myPriceArr = [44, 30, 24, 3000, 35, 30, 40, 38, 15];
const ChallengeToken = "gvthuljp21da";

function ArrayChallenge(arr) {
  let result = 0;
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] - arr[count] > result) result = arr[i] - arr[count];
    if (i == arr.length - 1) {
      count++;
      i = count;
    }
  }
  if (result > 0) return result;
  else return -1;
}

const newStr = ChallengeToken + ArrayChallenge(myPriceArr);

let newCount = 0;
let overStr = "";
for (let i = 0; i < newStr.length; i++) {
  if (newCount == 3) {
    overStr += "_";
    newCount = 0;
  } else {
    overStr += newStr[i];
    newCount++;
  }
}

console.log(overStr);
