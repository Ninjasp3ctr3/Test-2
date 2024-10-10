function functie() {}

function uitlegBijTypeVanParameter(parameter) {
  let test = typeof parameter;
  console.log(test);
  switch (test) {
    case "boolean":
      console.log("De mogelijke waarden zijn: false en true");
      break;
    case "number":
      console.log("Mogelijke waarden zijn: 1, 69, 3.141592");
      break;
    case "string":
      console.log("Mogelijke waarden zijn: 'a', 'Bart, '3'");
      break;
    case "object":
      console.log("Mogelijke waarden zijn: [1, 2], {naam: 'Bart'}, null");
      break;
    case "undefined":
      console.log("De waarde is: undefined");
      break;
    case "function":
      console.log("De waarde is een functie, bv: function hihi() {}");
      break;
    default:
      console.log("Geen informatie over dit type!");
      break;
  }
}

uitlegBijTypeVanParameter();
