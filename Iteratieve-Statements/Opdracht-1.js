function doortellen(getal) {
  if (getal >= 100) {
    console.log("Het getal is honderd of meer!");
  } else {
    do {
      console.log(getal);
      getal++;
    } while (getal < 101);
  }
}

doortellen(99);
