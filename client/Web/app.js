function validateForm() {
  let uname = document.forms["myform"]["uname"];
  let unameValue = uname.value.trim();
  let age = document.forms["myform"]["age"].value;

  let acctype = document.querySelectorAll("input[name=docs]:checked");

  let regName = /^[a-zA-Z]+$/;

  if (unameValue.length < 6) {
    alert("Must be at least 6 letters long");
    uname.focus();
    return false;
  }

  if (!regName.test(unameValue)) {
    uname.style.border = "solid 2px red";
    document.getElementById("unamelabel").innerHTML =
      "Name can only have alphabets";
    document.getElementById("unamelabel").style.color = "red";
    document.getElementById("unamelabel").style.visibility = "visible";
    uname.focus();
    return false;
  } else {
    uname.style.border = "solid 2px green";
    document.getElementById("unamelabel").innerHTML = "Username valid!";
    document.getElementById("unamelabel").style.color = "green";
    document.getElementById("unamelabel").style.visibility = "visible";
  }

  if (age < 18) {
    alert("Age should be above 18");
    return false;
  }

  if (acctype.length === 0) {
    // fallback, though one is checked by default
    document.querySelectorAll("input[name=docs]")[1].checked = true;
  }

  confirm("Do you want to submit?");
  return true;
}
