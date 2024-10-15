function doortellen(getal, printOneven) {
  if (getal >= 100) {
    console.log("Het getal is honderd of meer!");
  } else {
    if (printOneven == true) {
      let i = 0;
      i = getal % 2;
      console.log(i);
      if (i == 0) {
        getal += 1;
        while (getal < 101) {
          console.log(getal);
          getal += 2;
        }
      } else {
        while (getal < 101) {
          console.log(getal);
          getal += 2;
        }
      }
    } else {
      let i = 0;
      i = getal % 2;
      console.log(i);
      if (i == 1) {
        getal += 1;
        while (getal < 101) {
          console.log(getal);
          getal += 2;
        }
      } else {
        while (getal < 101) {
          console.log(getal);
          getal += 2;
        }
      }
    }
  }
}
doortellen(20, false);
