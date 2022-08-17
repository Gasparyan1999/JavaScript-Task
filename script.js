
const num = prompt("Give me num");

function StringChallenge(num) {
  const hours = Math.floor(+num / 60);
  const minutes = +num - hours * 60;
  const result = `${hours}:${minutes}`;
  const ChallengeToken = "gvthuljp21da";
  const newString = result + ChallengeToken;
  let finalyStr = newString[0];
  for (let i = 1; i < newString.length; i++) {
    if (i % 3 == 0) finalyStr += "_";
    else finalyStr += newString[i];
  }
  console.log(finalyStr);
}


StringChallenge(num);