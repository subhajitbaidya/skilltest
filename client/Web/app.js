function addNumbers() {
  let a = 10;
  let b = 20;

  let add = (a, b) => {
    return a + b;
  };

  return add(a, b);
}

document.getElementById("output").innerHTML = addNumbers();
