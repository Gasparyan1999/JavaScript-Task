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
