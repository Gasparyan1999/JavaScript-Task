let str = prompt("Password");

function StringChallenge(str) {
  for (let i = 0; i < str.length; i++) {
    if (str[i].toUpperCase() == str[i]) {
      if (
        !str.toLowerCase().includes("password") &&
        str.replace(/\D/g, "").length > 0 &&
        str.length < 31 &&
        str.length > 7 &&
        str.replace(/[^a-z]/, "").replace(/\D/g, "").length > 0
      ) {
        return console.log(true);
      } else {
        return console.log(false);
      }
    } else {
      return console.log(false);
    }
  }
}

StringChallenge(str);
