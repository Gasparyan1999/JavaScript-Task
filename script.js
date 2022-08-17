// const num = prompt("Give me num");

// function StringChallenge(num) {
//   const hours = Math.floor(+num / 60);
//   const minutes = +num - hours * 60;
//   const result = `${hours}:${minutes}`;
//   const ChallengeToken = "gvthuljp21da";
//   const newString = result + ChallengeToken;
//   let finalyStr = "";
//   let count = 0;
//   for (let i = 0; i < newString.length; i++) {
//     count++;
//     if (count == 4) {
//       finalyStr += "_";
//       count = 0;
//     } else finalyStr += newString[i];
//   }
//   console.log(finalyStr);
//   return (xun = 254);
// }

// StringChallenge(num);

let str = prompt("Password");

function StringChallenge(str) {
  if (str.length < 31 && str.length > 6) {
    if (
      !str.toLowerCase().includes("password") &&
      str[0] == str[0].toUpperCase() &&
      str.replace(/\D/g, "").length > 0 &&
      str.replace(/[^a-z]/, "").replace(/\D/g, "").length > 0
    ) {
      console.log("true");
    } else {
      console.log("false");
    }
  } else {
    console.log("false");
  }
}
StringChallenge(str);
