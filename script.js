let str = prompt("Password");

function StringChallenge(str) {
  const passwordCheck =
    !str.toLowerCase().includes("password") &&
    str.replace(/\D/g, "").length > 0 &&
    str.length < 31 &&
    str.length > 7 &&
    str.replace(/[^a-z]/, "").replace(/\D/g, "").length > 0 &&
    str.toLowerCase() != str;

    return console.log(passwordCheck)
}

StringChallenge(str);
