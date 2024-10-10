function functie() {}

function uitlegBijTypeVanParameter(parameter) {
  let test = typeof parameter;
  console.log(test);
  if (test === "boolean") {
    console.log("De mogelijke waarden zijn: false en true");
  } else if (test === "number") {
    console.log("Mogelijke waarden zijn: 1, 69, 3.141592");
  } else if (test === "string") {
    console.log("Mogelijke waarden zijn: 'a', 'Bart, '3'");
  } else if (test === "object") {
    console.log("Mogelijke waarden zijn: [1, 2], {naam: 'Bart'}, null");
  } else if (test === "undefined") {
    console.log("De waarde is: undefined");
  } else if (test === "function") {
    console.log("De waarde is een functie, bv: function hihi() {}");
  } else {
    console.log("Geen informatie over dit type!");
  }
}

uitlegBijTypeVanParameter();
