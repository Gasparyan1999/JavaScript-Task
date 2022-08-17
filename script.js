const num = prompt("Give me num");

function StringChallenge(num) {
  const hours = Math.floor(+num / 60);
  const minutes = +num - hours * 60;
  const result = `${hours}:${minutes}`;
  const ChallengeToken = "gvthuljp21da";
  const newString = result + ChallengeToken;
  let finalyStr = "";
  let count = 0;
  for (let i = 0; i < newString.length; i++) {
    count++;
    if (count == 4) {
      finalyStr += "_";
      count = 0;
    } else finalyStr += newString[i];
  }
  console.log(finalyStr);
}

StringChallenge(num);
