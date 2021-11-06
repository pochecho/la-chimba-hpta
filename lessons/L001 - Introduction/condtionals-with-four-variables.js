a = 1;
b = 4;
c = 5;
d = 117;

if (a > b) {
  if (a < c) {
    if (c > b) {
      console.log(c);
    } else {
      console.log(b);
    }
  } else {
    if (a > d) {
      console.log(a);
    } else {
      console.log(d);
    }
  }
} else {
  if (b < c) {
    if (c > d) {
      console.log(c);
    } else {
      console.log(d);
    }
  } else {
    if (b > d) {
      console.log(b);
    } else {
      console.log(d);
    }
  }
}
